import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import {
  Bot,
  Camera,
  Trophy,
  Activity,
  Dumbbell
} from 'lucide-react';

export default function Landing() {

  const navigate = useNavigate();

  const features = [

    {
      icon: <Bot size={30} />,
      title: 'AI Coach',
      desc: 'Personalized fitness recommendations.'
    },

    {
      icon: <Camera size={30} />,
      title: 'Smart Pose',
      desc: 'Real-time exercise form guidance.'
    },

    {
      icon: <Trophy size={30} />,
      title: 'Gamification',
      desc: 'Earn XP, badges and streaks.'
    },

    {
      icon: <Activity size={30} />,
      title: 'Analytics',
      desc: 'Track your fitness progress.'
    }

  ];

  return (

    <div className="min-h-screen bg-[#0b0f17] text-white relative overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48")'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0b0f17]/90 to-[#0b0f17]" />

      {/* Navbar */}

      <nav className="relative z-20 flex justify-between items-center px-6 md:px-12 py-5 border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="bg-[#ccff00]/20 p-2 rounded-xl">

            <Dumbbell className="text-[#ccff00]" />

          </div>

          <h1 className="font-black text-xl">

            FITVERSE

            <span className="text-[#ccff00]">
              {' '}AI
            </span>

          </h1>

        </div>

        <button
          onClick={() => navigate('/auth')}
          className="bg-[#ccff00] text-black px-5 py-2 rounded-full font-bold"
        >

          Start Now

        </button>

      </nav>

      {/* Hero */}

      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center items-center text-center px-5">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-sm font-bold">

            ⚡ SMART INDIA HACKATHON 2026

          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            FITNESS IS NOT A TASK.

            <br />

            <span className="text-[#ccff00]">

              IT'S YOUR NEXT LEVEL.

            </span>

          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 mt-6 text-lg">

            An AI-powered fitness ecosystem that combines personalized
            coaching, smart pose training, gamification and community
            challenges.

          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/auth')}
            className="mt-8 bg-[#ccff00] text-black px-8 py-4 rounded-full font-bold text-lg"
          >

            🚀 Start Your Journey

          </motion.button>

        </motion.div>

        {/* Features */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-24 w-full max-w-6xl">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left"
            >

              <div className="text-[#ccff00] mb-4">

                {feature.icon}

              </div>

              <h3 className="font-bold text-lg">

                {feature.title}

              </h3>

              <p className="text-gray-400 text-sm mt-2">

                {feature.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}