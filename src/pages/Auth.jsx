import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

export default function Auth() {

  const { login } = useContext(AppContext);

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {

    login({
      name: 'Thamarai Kannan',
      email: 'thamarai@sih2026.com',
      role: 'student'
    });

    navigate('/onboarding');
  };

  return (

    <div className="min-h-screen bg-[#0b0f17] flex items-center justify-center p-5 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ccff0015,transparent_50%)]" />

      <div className="relative w-full max-w-md bg-[#121824]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-3xl font-black">

          {isLogin ? 'Welcome Back 👋' : 'Create Account'}

        </h1>

        <p className="text-gray-400 mt-2 mb-8">

          Let's level up your fitness journey.

        </p>

        <div className="space-y-4">

          {!isLogin && (

            <input
              placeholder="Full Name"
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-[#ccff00]"
            />

          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-[#ccff00]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-[#ccff00]"
          />

        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-[#ccff00] text-black py-4 rounded-xl font-bold"
        >

          {isLogin ? 'Login' : 'Create Account'}

        </button>

        <div className="flex items-center gap-3 my-6">

          <div className="flex-1 border-t border-gray-700" />

          <span className="text-gray-500 text-sm">

            SIH DEMO

          </span>

          <div className="flex-1 border-t border-gray-700" />

        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-white text-black py-4 rounded-xl font-bold"
        >

          🚀 One-Click Demo Login

        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center mt-6 text-gray-400 cursor-pointer hover:text-white"
        >

          {isLogin
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Login'
          }

        </p>

      </div>

    </div>
  );
}