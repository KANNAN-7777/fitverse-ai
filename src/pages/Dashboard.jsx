import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Flame, Zap, Award, Target, Play, Sparkles } from 'lucide-react';
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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 pb-12">
      
      {/* Cinematic Hero Banner Image Header */}
      <div className="relative rounded-3xl overflow-hidden p-8 border border-white/10 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-50 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 flex items-center gap-5">
          <img 
            src={`https://ui-avatars.com/api/?name=${user?.name || 'Athlete'}&background=ccff00&color=000&size=128&bold=true`} 
            alt="Profile" 
            className="w-18 h-18 rounded-2xl border-2 border-primary shadow-[0_0_20px_rgba(204,255,0,0.4)]"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary/20 text-primary border border-primary/40 text-xs font-bold px-3 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles size={12}/> LEVEL {level} ATHLETE
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Welcome back, {user?.name || 'Athlete'}!</h1>
            <p className="text-gray-300 text-sm mt-1 font-medium">Your AI Coach has optimized today's workout plan for maximum growth.</p>
          </div>
        </div>

        <div className="relative z-10 bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 w-full md:w-64 shadow-xl">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex justify-between">
            <span>XP Progress</span>
            <span className="text-primary font-mono">{xp} / {(level * 1000)} XP</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden p-0.5 border border-white/5">
            <div className="h-full bg-primary rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(204,255,0,0.8)]" style={{ width: `${(xp % 1000) / 10}%` }} />
          </div>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <Flame className="text-orange-500" size={24} />, label: 'Current Streak', val: `${streak} Days`, bg: 'from-orange-500/10 to-transparent' },
          { icon: <Zap className="text-yellow-400" size={24} />, label: 'Workouts Completed', val: '28 Sessions', bg: 'from-yellow-500/10 to-transparent' },
          { icon: <Target className="text-red-500" size={24} />, label: 'Active Calories', val: '8,450 kcal', bg: 'from-red-500/10 to-transparent' },
          { icon: <Award className="text-primary" size={24} />, label: 'Total XP Earned', val: xp, bg: 'from-primary/10 to-transparent' }
        ].map((stat, i) => (
          <motion.div key={i} variants={item} whileHover={{ y: -5 }} className={`glass p-5 rounded-2xl flex flex-col justify-between border border-white/10 shadow-xl bg-gradient-to-b ${stat.bg} relative overflow-hidden`}>
            <div className="mb-4 bg-black/40 w-fit p-3 rounded-xl border border-white/5 backdrop-blur-md shadow-inner">{stat.icon}</div>
            <div>
              <div className="text-2xl font-black text-white">{stat.val}</div>
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Feature Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={item} className="lg:col-span-1 rounded-2xl border border-white/10 relative overflow-hidden group shadow-2xl flex flex-col justify-end p-6 min-h-[340px]">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop")' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
          
          <div className="relative z-10">
            <span className="bg-primary text-black font-extrabold text-xs px-3 py-1 rounded-full mb-3 inline-block shadow-lg">
              FEATURED ROUTINE
            </span>
            <h2 className="text-2xl font-black mb-2 text-white">🔥 Full Body Hypertrophy</h2>
            
            <div className="space-y-2 mb-6 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="flex justify-between text-xs font-medium"><span className="text-gray-300">Duration:</span> <span className="font-bold text-white">25 Mins</span></div>
              <div className="flex justify-between text-xs font-medium"><span className="text-gray-300">Intensity:</span> <span className="text-yellow-400 font-bold">Advanced</span></div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/app/workouts')} 
              className="w-full bg-primary text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              <Play fill="currentColor" size={16} /> Launch Workout
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={item} className="lg:col-span-2 glass p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">📊 Weekly Performance Analytics</h3>
            <span className="text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full font-bold">+18% vs Last Week</span>
          </div>
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ccff00" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ccff00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0b0f17', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} itemStyle={{ color: '#ccff00', fontWeight: 'bold' }} />
                <Area type="monotone" dataKey="xp" stroke="#ccff00" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}