import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Onboarding from './pages/Onboarding';

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

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Authentication */}
        <Route path="/auth" element={<Auth />} />

        {/* Onboarding */}
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Main Application */}
        <Route path="/app" element={<Layout />}>

          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Workouts */}
          <Route path="workouts" element={<Workouts />} />

          {/* Pose Trainer */}
          <Route path="pose-trainer" element={<PoseTrainer />} />

          {/* AI Coach */}
          <Route path="ai-coach" element={<AiCoach />} />

          {/* Challenges */}
          <Route path="challenges" element={<Challenges />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}