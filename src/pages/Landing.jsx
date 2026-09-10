import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, Camera, Trophy, Activity } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark to-dark pointer-events-none" />
      
      <nav className="glass fixed w-full z-50 px-8 py-4 flex justify-between items-center border-b border-white/5">
        <h1 className="text-2xl font-bold tracking-tighter">🏋️ FITVERSE <span className="text-primary">AI</span></h1>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/auth')} 
          className="bg-primary text-black px-6 py-2 rounded-full font-semibold transition-colors"
        >
          Login / Start
        </motion.button>
      </nav>

      <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            FITNESS IS NOT A TASK.<br/>
            <span className="text-primary">IT'S YOUR NEXT LEVEL.</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10 font-medium">
            FITVERSE AI uses intelligent recommendations, gamification, and real-time AI pose detection to help you build a healthier, active lifestyle.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(204,255,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/auth')} 
              className="bg-primary text-black px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              🚀 Start Your Journey
            </motion.button>
          </div>
        </motion.div>

        {/* Staggered Feature Grid */}
        <motion.div 
          id="features" 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-32 w-full"
        >
          {[
            { icon: <Bot size={32}/>, title: "AI Coach", desc: "Personalized fitness recommendations." },
            { icon: <Camera size={32}/>, title: "Smart Pose", desc: "Webcam-based real-time form correction." },
            { icon: <Trophy size={32}/>, title: "Gamification", desc: "Earn XP, streaks, and badges." },
            { icon: <Activity size={32}/>, title: "Analytics", desc: "Detailed tracking of your progress." }
          ].map((f, i) => (
            <motion.div key={i} variants={itemVariants} className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform cursor-pointer border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="text-primary mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}