import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Home, Dumbbell, Bot, Camera, Trophy, LogOut } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Layout() {
  const { logout, user } = useContext(AppContext);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/app', icon: <Home size={20} />, exact: true },
    { name: 'Workouts', path: '/app/workouts', icon: <Dumbbell size={20} /> },
    { name: 'Pose Trainer', path: '/app/pose-trainer', icon: <Camera size={20} /> },
    { name: 'AI Coach', path: '/app/ai-coach', icon: <Bot size={20} /> },
    { name: 'Challenges', path: '/app/challenges', icon: <Trophy size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-dark text-white overflow-hidden relative">
      {/* Background and Ambient Lighting */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-black pointer-events-none fixed" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none fixed" />

      {/* Sidebar with Guaranteed Visible Logo */}
      <aside className="w-64 bg-card/80 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col relative z-10">
        <div className="p-6 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/app')}>
          <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center shadow-[0_0_12px_rgba(204,255,0,0.4)] shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M6.5 6.5h11M6.5 17.5h11M6 12h12M3 9v6M21 9v6"/>
            </svg>
          </div>
          <h1 className="text-xl font-black tracking-tight text-white">
            FITVERSE <span className="text-primary">AI</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 mt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                    ? 'bg-primary text-black font-bold shadow-[0_0_20px_rgba(204,255,0,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={() => { logout(); navigate('/auth'); }}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-medium text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}