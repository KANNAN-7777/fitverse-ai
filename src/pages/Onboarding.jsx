import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {

  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const [selected, setSelected] = useState([]);

  const steps = [

    {
      title: 'What is your fitness goal?',
      options: [
        '🔥 Lose Weight',
        '💪 Build Muscle',
        '🏃 Improve Stamina',
        '🧘 Stay Healthy'
      ]
    },

    {
      title: 'What is your current fitness level?',
      options: [
        '🟢 Beginner',
        '🟡 Intermediate',
        '🔴 Advanced'
      ]
    },

    {
      title: 'How much time can you spend daily?',
      options: [
        '10 Minutes',
        '20 Minutes',
        '30 Minutes',
        '45+ Minutes'
      ]
    }

  ];

  const selectOption = (option) => {

    const newSelected = [...selected];

    newSelected[step] = option;

    setSelected(newSelected);

    setTimeout(() => {

      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        navigate('/app');
      }

    }, 300);
  };

  return (

    <div className="min-h-screen bg-[#0b0f17] text-white flex items-center justify-center p-5">

      <div className="w-full max-w-3xl text-center">

        <p className="text-[#ccff00] font-bold tracking-widest">

          STEP {step + 1} OF 3

        </p>

        <div className="w-full bg-white/10 h-2 rounded-full mt-4">

          <div
            className="bg-[#ccff00] h-2 rounded-full transition-all"
            style={{
              width: `${((step + 1) / 3) * 100}%`
            }}
          />

        </div>

        <h1 className="text-3xl md:text-5xl font-black mt-10 mb-10">

          {steps[step].title}

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {steps[step].options.map((option) => (

            <button
              key={option}
              onClick={() => selectOption(option)}
              className="p-6 rounded-2xl bg-[#121824] border border-white/10 text-lg hover:bg-[#ccff00] hover:text-black hover:scale-[1.02] transition-all"
            >

              {option}

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}