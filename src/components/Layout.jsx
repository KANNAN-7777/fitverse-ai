import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Home, Dumbbell, Bot, Camera, Trophy, LogOut } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import myLogo from '../assets/logo.png';

export default function Layout() {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/app', icon: <Home size={20} /> },
    { name: 'Workouts', path: '/app/workouts', icon: <Dumbbell size={20} /> },
    { name: 'Pose Trainer', path: '/app/pose-trainer', icon: <Camera size={20} /> },
    { name: 'AI Coach', path: '/app/ai-coach', icon: <Bot size={20} /> },
    { name: 'Challenges', path: '/app/challenges', icon: <Trophy size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-darker text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-gray-800 hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <img src={myLogo} alt="Fitverse Logo" className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(204,255,0,0.4)]" />
          <h1 className="text-xl font-bold tracking-tight text-white">
            FITVERSE <span className="text-primary">AI</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/app'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                    ? 'bg-primary text-black font-semibold shadow-[0_0_20px_rgba(204,255,0,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={() => { logout(); navigate('/auth'); }}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-medium text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 bg-dark">
        <Outlet />
      </main>
    </div>
  );
}