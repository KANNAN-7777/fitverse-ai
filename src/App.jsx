import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import PoseTrainer from './pages/PoseTrainer';
import AiCoach from './pages/AiCoach';
import Challenges from './pages/Challenges';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is your Landing Page shown first at the root URL */}
        <Route path="/" element={<Landing />} />
        
        {/* Authentication page */}
        <Route path="/auth" element={<Auth />} />

        {/* Dashboard and inner app layout */}
        <Route path="/app" element={<Layout />}>
  <Route index element={<Dashboard />} />
  <Route path="workouts" element={<Workouts />} />
  <Route path="pose-trainer" element={<PoseTrainer />} />
  <Route path="ai-coach" element={<AiCoach />} />
  <Route path="challenges" element={<Challenges />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}