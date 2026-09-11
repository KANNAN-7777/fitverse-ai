import {
  useRef,
  useState,
  useEffect
} from 'react';

import {
  Camera,
  CheckCircle2
} from 'lucide-react';

export default function PoseTrainer() {

  const videoRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const [reps, setReps] = useState(0);

  const [feedback, setFeedback] = useState(
    'Position yourself in the frame.'
  );

  useEffect(() => {

    let interval;

    if (isActive) {

      interval = setInterval(() => {

        setReps((prev) => prev + 1);

        setFeedback('✅ Great posture! Keep going.');

      }, 4000);

    }

    return () => clearInterval(interval);

  }, [isActive]);

  const startCamera = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true
        });

      if (videoRef.current) {

        videoRef.current.srcObject = stream;

        setIsActive(true);

        setFeedback(
          'AI Tracking Started. Ready for Squats!'
        );

      }

    } catch (error) {

      setFeedback(
        'Camera permission denied.'
      );

    }

  };

  const stopCamera = () => {

    const stream = videoRef.current?.srcObject;

    if (stream) {

      stream.getTracks().forEach((track) => {
        track.stop();
      });

    }

    setIsActive(false);

    setFeedback(
      'Workout stopped.'
    );

  };

  return (

    <div>

      <h1 className="text-3xl font-black flex gap-3 items-center">

        <Camera className="text-[#ccff00]" />

        AI Smart Form Trainer

      </h1>

      <p className="text-gray-400 mt-2 mb-7">

        Webcam-based exercise posture monitoring and repetition tracking.

      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/10">

          {!isActive && (

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

              <Camera
                size={55}
                className="text-gray-500 mb-5"
              />

              <button
                onClick={startCamera}
                className="bg-[#ccff00] text-black px-6 py-3 rounded-xl font-bold"
              >

                Enable Camera & Start

              </button>

            </div>

          )}

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover scale-x-[-1]"
          />

          {isActive && (

            <>

              <div className="absolute top-5 left-5 bg-black/80 px-4 py-3 rounded-xl">

                Squats:

                <span className="text-[#ccff00] font-bold">

                  {' '}{reps} / 15

                </span>

              </div>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/90 border border-[#ccff00]/30 px-6 py-3 rounded-full flex gap-2 whitespace-nowrap">

                <CheckCircle2 className="text-[#ccff00]" />

                {feedback}

              </div>

            </>

          )}

        </div>

        <div className="bg-[#121824] border border-white/10 rounded-2xl p-6">

          <h2 className="font-bold text-xl">

            Instructions

          </h2>

          <ul className="space-y-5 text-gray-400 mt-6 text-sm">

            <li>
              <span className="text-[#ccff00]">1.</span>
              {' '}Ensure your full body is visible.
            </li>

            <li>
              <span className="text-[#ccff00]">2.</span>
              {' '}Stand approximately 2 meters away.
            </li>

            <li>
              <span className="text-[#ccff00]">3.</span>
              {' '}AI analyzes posture and counts repetitions.
            </li>

          </ul>

          {isActive && (

            <button
              onClick={stopCamera}
              className="mt-10 w-full py-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30"
            >

              Stop Workout

            </button>

          )}

        </div>

      </div>

    </div>
  );
}