import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

import {
  Flame,
  Zap,
  Award,
  Target,
  Play
} from 'lucide-react';

import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const chartData = [
  { name: 'Mon', xp: 400 },
  { name: 'Tue', xp: 550 },
  { name: 'Wed', xp: 350 },
  { name: 'Thu', xp: 700 },
  { name: 'Fri', xp: 600 },
  { name: 'Sat', xp: 850 },
  { name: 'Sun', xp: 1000 }
];

export default function Dashboard() {

  const { user, xp, streak } = useContext(AppContext);

  const navigate = useNavigate();

  const userName = user?.name || 'Thamarai Kannan';

  const stats = [

    {
      icon: <Flame className="text-orange-500" />,
      label: 'Current Streak',
      value: `${streak} Days`
    },

    {
      icon: <Zap className="text-yellow-400" />,
      label: 'Workouts Completed',
      value: '28 Sessions'
    },

    {
      icon: <Target className="text-red-500" />,
      label: 'Calories Burned',
      value: '8,450 kcal'
    },

    {
      icon: <Award className="text-[#ccff00]" />,
      label: 'Total XP',
      value: `${xp} XP`
    }

  ];

  return (

    <div className="space-y-7 pb-10">

      {/* Welcome */}

      <div className="rounded-3xl bg-gradient-to-r from-[#121824] to-black border border-white/10 p-8">

        <span className="text-[#ccff00] font-bold text-sm">

          ⚡ AI FITNESS DASHBOARD

        </span>

        <h1 className="text-4xl font-black mt-3">

          Welcome back, {userName}! 👋

        </h1>

        <p className="text-gray-400 mt-2">

          Ready to become a stronger version of yourself?

        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {stats.map((stat, index) => (

          <div
            key={index}
            className="bg-[#121824]/80 border border-white/10 p-5 rounded-2xl"
          >

            <div className="mb-4">

              {stat.icon}

            </div>

            <h2 className="text-2xl font-black">

              {stat.value}

            </h2>

            <p className="text-xs text-gray-400 mt-1">

              {stat.label}

            </p>

          </div>

        ))}

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Workout */}

        <div className="bg-[#121824] border border-white/10 rounded-2xl p-6">

          <span className="text-[#ccff00] text-xs font-bold">

            FEATURED WORKOUT

          </span>

          <h2 className="text-2xl font-black mt-3">

            🔥 Full Body Burn

          </h2>

          <p className="text-gray-400 mt-3">

            25 minutes • Cardio • 320 kcal

          </p>

          <button
            onClick={() => navigate('/app/workouts')}
            className="mt-6 w-full bg-[#ccff00] text-black py-3 rounded-xl font-bold flex justify-center gap-2"
          >

            <Play size={18} />

            Start Workout

          </button>

        </div>

        {/* Chart */}

        <div className="lg:col-span-2 bg-[#121824] border border-white/10 rounded-2xl p-6">

          <h2 className="font-bold text-xl mb-5">

            📊 Weekly Performance

          </h2>

          <div className="h-64">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={chartData}>

                <XAxis
                  dataKey="name"
                  stroke="#888"
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="xp"
                  stroke="#ccff00"
                  fill="#ccff0033"
                  strokeWidth={3}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}