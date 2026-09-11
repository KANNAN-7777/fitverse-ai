import { useContext } from 'react';

import { Play } from 'lucide-react';

import { AppContext } from '../context/AppContext';

export default function Workouts() {

  const { addXp } = useContext(AppContext);

  const workouts = [

    {
      title: 'Full Body Burn',
      duration: '25 Min',
      type: 'Cardio',
      cal: 320
    },

    {
      title: 'Core Strength',
      duration: '15 Min',
      type: 'Strength',
      cal: 150
    },

    {
      title: 'Yoga Flow',
      duration: '30 Min',
      type: 'Flexibility',
      cal: 200
    },

    {
      title: 'Quick HIIT',
      duration: '10 Min',
      type: 'Fat Loss',
      cal: 180
    },

    {
      title: 'Upper Body Pump',
      duration: '45 Min',
      type: 'Strength',
      cal: 400
    },

    {
      title: 'Morning Stretch',
      duration: '10 Min',
      type: 'Recovery',
      cal: 50
    }

  ];

  const completeWorkout = (title) => {

    alert(
      `${title} Completed!\n\n🎉 You earned +100 XP!`
    );

    addXp(100);
  };

  return (

    <div>

      <h1 className="text-3xl font-black">

        Workout Programs

      </h1>

      <p className="text-gray-400 mt-2 mb-8">

        Select a workout and earn XP.

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {workouts.map((workout, index) => (

          <div
            key={index}
            className="bg-[#121824] border border-white/10 rounded-2xl p-6 hover:border-[#ccff00]/40 transition-all"
          >

            <span className="text-xs bg-white/10 px-3 py-1 rounded-full">

              {workout.type}

            </span>

            <h2 className="text-2xl font-bold mt-5">

              {workout.title}

            </h2>

            <div className="text-gray-400 mt-4">

              ⏱ {workout.duration}

              <br />

              🔥 {workout.cal} kcal

            </div>

            <button
              onClick={() => completeWorkout(workout.title)}
              className="w-full mt-6 bg-white/10 hover:bg-[#ccff00] hover:text-black py-3 rounded-xl font-bold transition-all flex justify-center gap-2"
            >

              <Play size={18} />

              Complete Workout

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}