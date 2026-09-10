import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Flame, Zap, Award, Target, Play } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const chartData = [
  { name: 'Mon', xp: 400 }, { name: 'Tue', xp: 300 },
  { name: 'Wed', xp: 550 }, { name: 'Thu', xp: 400 },
  { name: 'Fri', xp: 700 }, { name: 'Sat', xp: 600 },
  { name: 'Sun', xp: 800 },
];

export default function Dashboard() {
  const { user, xp, streak, level } = useContext(AppContext);
  const navigate = useNavigate();

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="flex items-center gap-4">
          <img 
            src={`https://ui-avatars.com/api/?name=${user?.name || 'Athlete'}&background=ccff00&color=000&size=128&bold=true`} 
            alt="Profile" 
            className="w-16 h-16 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          />
          <div>
            <h1 className="text-3xl font-bold">Good Morning, {user?.name || 'Athlete'} 👋</h1>
            <p className="text-gray-400 mt-1">Ready to level up your fitness today?</p>
          </div>
        </div>
        <div className="w-full md:w-auto md:text-right bg-card p-4 rounded-xl border border-white/5 shadow-lg">
          <div className="text-sm font-bold flex justify-between md:justify-end gap-4">
            <span>LEVEL {level}</span>
            <span className="text-primary">{xp} XP</span>
          </div>
          <div className="w-full md:w-48 h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${(xp % 1000) / 10}%` }} />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <Flame className="text-orange-500" />, label: 'Current Streak', val: `${streak} Days` },
          { icon: <Zap className="text-yellow-500" />, label: 'Workouts', val: '28' },
          { icon: <Target className="text-red-500" />, label: 'Calories', val: '8,450 kcal' },
          { icon: <Award className="text-primary" />, label: 'Total XP', val: xp }
        ].map((stat, i) => (
          <motion.div key={i} variants={item} whileHover={{ y: -5 }} className="glass p-5 rounded-2xl flex flex-col justify-between border border-white/5 shadow-xl transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <div className="mb-4 bg-gray-800/80 w-fit p-3 rounded-xl backdrop-blur-md">{stat.icon}</div>
            <div>
              <div className="text-2xl font-bold">{stat.val}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={item} className="lg:col-span-1 rounded-2xl border border-white/10 relative overflow-hidden group shadow-xl flex flex-col justify-end p-6 min-h-[300px]">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop")' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
          
          <div className="relative z-10">
            <h3 className="text-xs font-bold tracking-widest mb-2 text-primary uppercase">Today's Mission</h3>
            <h2 className="text-3xl font-bold mb-4 text-white">🔥 Full Body Energy</h2>
            
            <div className="space-y-2 mb-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="flex justify-between text-sm"><span className="text-gray-300">Duration:</span> <span className="font-bold text-white">25 Mins</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-300">Difficulty:</span> <span className="text-yellow-400 font-bold">Intermediate</span></div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/app/workouts')} 
              className="w-full bg-primary text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <Play fill="currentColor" size={18} /> Start Workout
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={item} className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5 shadow-xl">
          <h3 className="text-lg font-bold mb-6">Weekly Activity (XP Earned)</h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ccff00" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#ccff00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', color: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }} itemStyle={{ color: '#ccff00', fontWeight: 'bold' }} />
                <Area type="monotone" dataKey="xp" stroke="#ccff00" strokeWidth={4} fillOpacity={1} fill="url(#colorXp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}