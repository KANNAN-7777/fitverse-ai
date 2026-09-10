import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Workouts() {
  const { addXp } = useContext(AppContext);
  const workouts = [
    { title: "Full Body Burn", duration: "25 Min", type: "Cardio", cal: 320, img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop" },
    { title: "Core Strength", duration: "15 Min", type: "Strength", cal: 150, img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop" },
    { title: "Yoga Flow", duration: "30 Min", type: "Flexibility", cal: 200, img: "https://images.unsplash.com/photo-1599901860904-17e086208e01?q=80&w=600&auto=format&fit=crop" },
    { title: "Quick HIIT", duration: "10 Min", type: "Fat Loss", cal: 180, img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop" },
    { title: "Upper Body Pump", duration: "45 Min", type: "Strength", cal: 400, img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" },
    { title: "Morning Stretch", duration: "10 Min", type: "Recovery", cal: 50, img: "https://images.unsplash.com/photo-1552674605-e35240d3331c?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-bold mb-2">Workout Programs</h1>
      <p className="text-gray-400 mb-8">Select a program to start earning XP.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((w, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="rounded-2xl relative overflow-hidden group border border-white/10 h-72 flex flex-col justify-end p-6 shadow-xl"
          >
            {/* Background Image & Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${w.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            
            {/* Card Content */}
            <div className="relative z-10">
              <span className="bg-primary text-black font-bold text-xs px-3 py-1 rounded-full mb-3 inline-block shadow-lg">
                {w.type}
              </span>
              <h2 className="text-2xl font-bold mb-2 text-white">{w.title}</h2>
              
              <div className="flex gap-4 text-gray-300 text-sm mb-4 font-medium">
                <span>⏱ {w.duration}</span>
                <span>🔥 {w.cal} kcal</span>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { alert(`Awesome job! You earned +100 XP.`); addXp(100); }} 
                className="w-full bg-white/20 backdrop-blur-sm hover:bg-primary hover:text-black text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
              >
                <Play size={16} fill="currentColor" /> Start Workout
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}