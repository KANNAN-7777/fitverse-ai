import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const steps = [
    { title: "What is your fitness goal?", options: ["🔥 Lose Weight", "💪 Build Muscle", "🏃 Improve Stamina", "🧘 Stay Healthy"] },
    { title: "What's your current fitness level?", options: ["🟢 Beginner", "🟡 Intermediate", "🔴 Advanced"] },
    { title: "How much time can you spend daily?", options: ["10 mins", "20 mins", "30 mins", "45+ mins"] }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/app'); // Redirects to Dashboard
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <h2 className="text-primary text-sm font-bold tracking-widest mb-4">STEP {step} OF 3</h2>
        
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-10">{steps[step-1].title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {steps[step-1].options.map((opt, i) => (
                <button key={i} onClick={handleNext} className="glass p-6 rounded-2xl text-xl font-medium hover:bg-primary hover:text-black transition-all border border-white/5 hover:scale-[1.02]">
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}