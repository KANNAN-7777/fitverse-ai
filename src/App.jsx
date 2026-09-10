import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
        {/* Landing Page (Shown when opening the main URL /) */}
        <Route path="/" element={<Landing />} />
        
        {/* Auth Page */}
        <Route path="/auth" element={<Auth />} />

        {/* Dashboard Layout & Nested App Pages */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="pose-trainer" element={<PoseTrainer />} />
          <Route path="ai-coach" element={<AiCoach />} />
          <Route path="challenges" element={<Challenges />} />
        </Route>

        {/* Catch-all redirect back to Landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}