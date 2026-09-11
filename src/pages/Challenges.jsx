import {
  Trophy,
  Users
} from 'lucide-react';

export default function Challenges() {

  const challenges = [

    {
      name: '🔥 30-Day Fitness Challenge',
      progress: 40,
      participants: '2,456',
      reward: 'Champion Badge'
    },

    {
      name: '🚶 10,000 Steps Daily',
      progress: 75,
      participants: '5,120',
      reward: 'Walker Badge'
    },

    {
      name: '💪 100 Push-ups Weekly',
      progress: 10,
      participants: '1,200',
      reward: 'Strength Badge'
    }

  ];

  const leaderboard = [

    ['🥇', 'Arun Kumar', '5,200 XP'],
    ['🥈', 'Thamarai (You)', '4,850 XP'],
    ['🥉', 'Priya', '4,200 XP'],
    ['4', 'Rahul Singh', '3,950 XP'],
    ['5', 'Ananya', '3,100 XP']

  ];

  return (

    <div>

      <h1 className="text-3xl font-black">

        Community Challenges

      </h1>

      <p className="text-gray-400 mt-2 mb-8">

        Compete, stay consistent and earn badges.

      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

        {/* Challenges */}

        <div className="space-y-5">

          {challenges.map((challenge, index) => (

            <div
              key={index}
              className="bg-[#121824] border border-white/10 p-6 rounded-2xl"
            >

              <div className="flex justify-between gap-4">

                <h2 className="font-bold text-lg">

                  {challenge.name}

                </h2>

                <span className="text-gray-400 text-sm flex gap-1">

                  <Users size={16} />

                  {challenge.participants}

                </span>

              </div>

              <div className="bg-black/50 h-3 rounded-full mt-6 overflow-hidden">

                <div
                  className="bg-[#ccff00] h-full rounded-full"
                  style={{
                    width: `${challenge.progress}%`
                  }}
                />

              </div>

              <div className="flex justify-between mt-3 text-sm">

                <span className="text-gray-400">

                  Progress: {challenge.progress}%

                </span>

                <span className="text-[#ccff00]">

                  🏆 {challenge.reward}

                </span>

              </div>

              <button
                onClick={() => alert('Challenge Joined Successfully! 🎉')}
                className="w-full mt-5 py-3 rounded-xl border border-white/10 hover:bg-[#ccff00] hover:text-black transition-all"
              >

                Join Challenge

              </button>

            </div>

          ))}

        </div>

        {/* Leaderboard */}

        <div className="bg-[#121824] border border-white/10 p-6 rounded-2xl h-fit">

          <h2 className="text-xl font-bold flex gap-2">

            <Trophy className="text-[#ccff00]" />

            Global Leaderboard

          </h2>

          <div className="space-y-3 mt-6">

            {leaderboard.map((user, index) => (

              <div
                key={index}
                className={`flex justify-between items-center p-4 rounded-xl ${
                  index === 1
                    ? 'bg-[#ccff00]/10 border border-[#ccff00]/30'
                    : 'bg-black/30'
                }`}
              >

                <div className="flex gap-4">

                  <span>

                    {user[0]}

                  </span>

                  <span className={
                    index === 1
                      ? 'text-[#ccff00] font-bold'
                      : ''
                  }>

                    {user[1]}

                  </span>

                </div>

                <span className="text-gray-400">

                  {user[2]}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}