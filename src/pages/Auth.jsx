import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

export default function Auth() {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleDemoLogin = () => {
    login({ name: 'Thamarai', email: 'demo@sih2026.com', level: 'Intermediate' });
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark relative p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark" />
      
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass p-8 rounded-3xl w-full max-w-md relative z-10 border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-gray-400 mb-8">Let's level up your fitness journey today.</p>

        <div className="space-y-4 mb-6">
          {!isLogin && <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" />}
          <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" />
          <input type="password" placeholder="Password" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" />
        </div>

        <button className="w-full bg-white text-black font-bold py-3 rounded-xl mb-4 hover:bg-gray-200 transition-colors">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <div className="relative flex py-2 items-center mb-4">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">For SIH Demo</span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>

        <button onClick={handleDemoLogin} className="w-full bg-primary text-black font-bold py-3 rounded-xl hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-all">
          🚀 One-Click Demo Login
        </button>

        <p className="text-center text-sm text-gray-400 mt-6 cursor-pointer hover:text-white" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </p>
      </motion.div>
    </div>
  );
}