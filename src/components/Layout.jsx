import { Outlet, NavLink, useNavigate } from 'react-router-dom';

import {
  Home,
  Dumbbell,
  Bot,
  Camera,
  Trophy,
  LogOut,
  Menu,
  X
} from 'lucide-react';

import { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

export default function Layout() {

  const { logout } = useContext(AppContext);

  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    {
      name: 'Dashboard',
      path: '/app',
      icon: <Home size={20} />,
      exact: true
    },
    {
      name: 'Workouts',
      path: '/app/workouts',
      icon: <Dumbbell size={20} />
    },
    {
      name: 'Pose Trainer',
      path: '/app/pose-trainer',
      icon: <Camera size={20} />
    },
    {
      name: 'AI Coach',
      path: '/app/ai-coach',
      icon: <Bot size={20} />
    },
    {
      name: 'Challenges',
      path: '/app/challenges',
      icon: <Trophy size={20} />
    }
  ];

  const SidebarContent = () => (
    <>
      <div
        className="p-6 flex items-center gap-3 cursor-pointer"
        onClick={() => navigate('/app')}
      >

        <div className="w-10 h-10 bg-[#ccff00]/20 border border-[#ccff00]/40 rounded-xl flex items-center justify-center">

          <Dumbbell
            size={23}
            className="text-[#ccff00]"
          />

        </div>

        <h1 className="text-xl font-black tracking-tight">

          FITVERSE

          <span className="text-[#ccff00]">
            {' '}AI
          </span>

        </h1>

      </div>

      <nav className="flex-1 px-4 space-y-2">

        {navItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                isActive
                  ? 'bg-[#ccff00] text-black font-bold'
                  : 'text-gray-400 hover:bg-white/10 hover:text-white'
              }`
            }
          >

            {item.icon}

            {item.name}

          </NavLink>

        ))}

      </nav>

      <div className="p-4 border-t border-white/10">

        <button
          onClick={() => {
            logout();
            navigate('/auth');
          }}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>
    </>
  );

  return (

    <div className="min-h-screen bg-[#0b0f17] text-white relative">

      {/* Background */}

      <div
        className="fixed inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48")'
        }}
      />

      {/* Desktop Sidebar */}

      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#121824]/90 backdrop-blur-xl border-r border-white/10 hidden md:flex flex-col z-30">

        <SidebarContent />

      </aside>

      {/* Mobile Header */}

      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#121824]/95 backdrop-blur-xl z-40 flex items-center justify-between px-5 border-b border-white/10">

        <h1 className="font-black">

          FITVERSE

          <span className="text-[#ccff00]">
            {' '}AI
          </span>

        </h1>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
        >

          {mobileMenu
            ? <X size={26} />
            : <Menu size={26} />
          }

        </button>

      </header>

      {/* Mobile Sidebar */}

      {mobileMenu && (

        <aside className="fixed top-16 left-0 bottom-0 w-64 bg-[#121824] z-30 flex flex-col">

          <SidebarContent />

        </aside>

      )}

      {/* Main */}

      <main className="md:ml-64 min-h-screen p-5 md:p-8 pt-24 md:pt-8 relative z-10">

        <div className="max-w-7xl mx-auto">

          <Outlet />

        </div>

      </main>

    </div>
  );
}