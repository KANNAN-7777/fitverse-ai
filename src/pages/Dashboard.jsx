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

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold">Good Morning, {user?.name || 'Athlete'} 👋</h1>
          <p className="text-gray-400 mt-1">Ready to level up your fitness today?</p>
        </div>
        <div className="w-full md:w-auto md:text-right bg-card p-4 rounded-xl border border-white/5">
          <div className="text-sm font-bold flex justify-between md:justify-end gap-4">
            <span>LEVEL {level}</span>
            <span className="text-primary">{xp} XP</span>
          </div>
          <div className="w-full md:w-48 h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${(xp % 1000) / 10}%` }} />
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <Flame className="text-orange-500" />, label: 'Current Streak', val: `${streak} Days` },
          { icon: <Zap className="text-yellow-500" />, label: 'Workouts', val: '28' },
          { icon: <Target className="text-red-500" />, label: 'Calories', val: '8,450 kcal' },
          { icon: <Award className="text-primary" />, label: 'Total XP', val: xp }
        ].map((stat, i) => (
          <div key={i} className="glass p-5 rounded-2xl flex flex-col justify-between border border-white/5">
            <div className="mb-4 bg-gray-800/50 w-fit p-2 rounded-lg">{stat.icon}</div>
            <div>
              <div className="text-2xl font-bold">{stat.val}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Mission */}
        <div className="lg:col-span-1 glass p-6 rounded-2xl bg-gradient-to-br from-card to-gray-900 border border-white/5 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
          <h3 className="text-sm font-bold tracking-wider mb-2 text-primary">TODAY'S MISSION</h3>
          <h2 className="text-2xl font-bold mb-4">🔥 Full Body Energy</h2>
          
          <div className="space-y-3 mb-8 bg-black/30 p-4 rounded-xl">
            <div className="flex justify-between text-sm"><span className="text-gray-400">Duration:</span> <span className="font-semibold">25 Mins</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Difficulty:</span> <span className="text-yellow-400 font-semibold">Intermediate</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Reward:</span> <span className="text-primary font-semibold">+100 XP</span></div>
          </div>

          <button onClick={() => navigate('/app/workouts')} className="w-full bg-primary text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primaryHover transition-colors">
            <Play fill="currentColor" size={16} /> Start Workout
          </button>
        </div>

        {/* Activity Chart */}
        <div className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold mb-6">Weekly Activity (XP Earned)</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ccff00" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ccff00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px', color: '#fff' }} itemStyle={{ color: '#ccff00' }} />
                <Area type="monotone" dataKey="xp" stroke="#ccff00" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}