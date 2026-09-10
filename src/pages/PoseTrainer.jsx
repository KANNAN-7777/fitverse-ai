import { useRef, useState, useEffect } from 'react';
import { Camera, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PoseTrainer() {
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [reps, setReps] = useState(0);
  const [feedback, setFeedback] = useState("Position yourself in frame.");

  // Simulate AI Pose Tracking logic for SIH demo
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setReps(prev => prev + 1);
        setFeedback("✅ Great posture! Keep your back straight.");
        setTimeout(() => setFeedback("Going down..."), 2000);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsActive(true);
        setFeedback("Tracking Started. Ready for Squats.");
      }
    } catch (err) {
      console.error("Camera access denied", err);
      setFeedback("Camera access denied. Please allow camera permissions.");
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    const tracks = stream?.getTracks();
    tracks?.forEach(track => track.stop());
    setIsActive(false);
    setReps(0);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2"><Camera className="text-primary"/> AI Smart Form Trainer</h1>
        <p className="text-gray-400">Use your webcam to analyze exercise posture and count repetitions automatically.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-2xl overflow-hidden relative aspect-video bg-black flex items-center justify-center border border-white/10">
          {!isActive && (
            <div className="absolute text-center z-10 flex flex-col items-center">
              <Camera size={48} className="text-gray-600 mb-4" />
              <button onClick={startCamera} className="bg-primary text-black px-6 py-3 rounded-full font-bold hover:bg-primaryHover transition-colors shadow-lg">
                Enable Camera & Start
              </button>
            </div>
          )}
          <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover opacity-80 scale-x-[-1]" />
          
          {/* AI Overlay Mockup */}
          {isActive && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-white/10 text-xl font-mono text-white">
                Squats: <span className="text-primary font-bold">{reps} / 15</span>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur px-6 py-3 rounded-full border border-primary text-primary font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.2)] whitespace-nowrap">
                <CheckCircle2 size={18} /> {feedback}
              </div>
            </div>
          )}
        </div>

        <div className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5">
          <h3 className="font-bold text-xl mb-2">Instructions</h3>
          <ul className="text-gray-400 space-y-4 text-sm">
            <li className="flex gap-3"><span className="text-primary font-bold">1.</span> Ensure your full body is visible in the camera.</li>
            <li className="flex gap-3"><span className="text-primary font-bold">2.</span> Stand 2 meters away from the screen.</li>
            <li className="flex gap-3"><span className="text-primary font-bold">3.</span> The AI will automatically count reps when proper form is detected.</li>
          </ul>

          <div className="mt-auto pt-6">
            {isActive && (
              <button onClick={stopCamera} className="w-full bg-red-500/10 text-red-500 border border-red-500/50 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-colors">
                Stop Workout
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}