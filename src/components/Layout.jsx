import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Home, Dumbbell, Bot, Camera, Trophy, LogOut } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Layout() {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/app' },
    { icon: <Dumbbell size={20} />, label: 'Workouts', path: '/app/workouts' },
    { icon: <Bot size={20} />, label: 'AI Coach', path: '/app/coach' },
    { icon: <Camera size={20} />, label: 'Pose Trainer', path: '/app/pose-trainer' },
    { icon: <Trophy size={20} />, label: 'Challenges', path: '/app/challenges' },
  ];

  return (
    <div className="flex h-screen bg-darker text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-gray-800 hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">🏋️ FITVERSE</span> AI
          </h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/app'}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary text-black font-semibold' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="flex items-center gap-3 text-gray-400 hover:text-red-500 w-full px-4 py-2 transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-darker p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 w-full glass flex justify-around p-4 border-t border-gray-800 z-50">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} end={item.path === '/app'} className={({ isActive }) => `p-2 rounded-full ${isActive ? 'text-primary' : 'text-gray-500'}`}>
            {item.icon}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}