import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, Camera, Trophy, Activity } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark pointer-events-none" />
      
      <nav className="glass fixed w-full z-50 px-8 py-4 flex justify-between items-center border-b border-white/5">
        <h1 className="text-2xl font-bold tracking-tighter">🏋️ FITVERSE <span className="text-primary">AI</span></h1>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>
        <button onClick={() => navigate('/auth')} className="bg-primary text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
          Login / Start
        </button>
      </nav>

      <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            FITNESS IS NOT A TASK.<br/>
            <span className="text-primary">IT'S YOUR NEXT LEVEL.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            FITVERSE AI uses intelligent recommendations, gamification, and real-time AI pose detection to help you build a healthier, active lifestyle.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => navigate('/auth')} className="bg-primary text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all">
              🚀 Start Your Journey
            </button>
          </div>
        </motion.div>

        <div id="features" className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-32 w-full">
          {[
            { icon: <Bot size={32}/>, title: "AI Coach", desc: "Personalized fitness recommendations." },
            { icon: <Camera size={32}/>, title: "Smart Pose", desc: "Webcam-based real-time form correction." },
            { icon: <Trophy size={32}/>, title: "Gamification", desc: "Earn XP, streaks, and badges." },
            { icon: <Activity size={32}/>, title: "Analytics", desc: "Detailed tracking of your progress." }
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform cursor-pointer">
              <div className="text-primary mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}