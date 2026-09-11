import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Workouts() {
  const { addXp } = useContext(AppContext);
  const workouts = [
    { title: "Full Body Burn", duration: "25 Min", type: "Cardio", cal: 320, color: "from-orange-500" },
    { title: "Core Strength", duration: "15 Min", type: "Strength", cal: 150, color: "from-blue-500" },
    { title: "Yoga Flow", duration: "30 Min", type: "Flexibility", cal: 200, color: "from-purple-500" },
    { title: "Quick HIIT", duration: "10 Min", type: "Fat Loss", cal: 180, color: "from-red-500" },
    { title: "Upper Body Pump", duration: "45 Min", type: "Strength", cal: 400, color: "from-primary" },
    { title: "Morning Stretch", duration: "10 Min", type: "Recovery", cal: 50, color: "from-green-500" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold mb-2">Workout Programs</h1>
      <p className="text-gray-400 mb-8">Select a program to start earning XP.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((w, i) => (
          <div key={i} className={`glass p-6 rounded-2xl relative overflow-hidden group border border-white/5`}>
            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${w.color} to-transparent rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
            
            <span className="bg-gray-800 text-xs px-3 py-1 rounded-full mb-4 inline-block border border-gray-700 text-gray-300">{w.type}</span>
            <h2 className="text-2xl font-bold mb-2">{w.title}</h2>
            
            <div className="flex gap-4 text-gray-400 text-sm mb-6 bg-black/30 p-3 rounded-lg w-fit">
              <span>⏱ {w.duration}</span>
              <span>🔥 {w.cal} kcal</span>
            </div>
            
            <button 
              onClick={() => { alert(`Workout Completed!\nAwesome job! You earned +100 XP.`); addXp(100); }} 
              className="w-full bg-white/10 hover:bg-primary hover:text-black text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Play size={16} fill="currentColor" /> Start Workout
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}