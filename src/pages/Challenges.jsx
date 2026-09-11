import { motion } from 'framer-motion';
import { Trophy, Users, ShieldAlert } from 'lucide-react';

export default function Challenges() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold mb-2">Community Challenges</h1>
      <p className="text-gray-400 mb-8">Compete with friends and earn exclusive badges.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { name: "🔥 30-Day Fitness Challenge", progress: 40, participants: "2,456", reward: "Champion Badge" },
            { name: "🚶 10,000 Steps Daily", progress: 75, participants: "5,120", reward: "Walker Badge" },
            { name: "💪 100 Push-ups Weekly", progress: 10, participants: "1,200", reward: "Strength Badge" }
          ].map((c, i) => (
            <div key={i} className="glass p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg">{c.name}</h3>
                <span className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"><Users size={12}/> {c.participants}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-primary h-2 rounded-full transition-all duration-1000" style={{ width: `${c.progress}%` }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>Progress: <span className="text-white font-medium">{c.progress}%</span></span>
                <span className="flex items-center gap-1 text-primary"><Trophy size={14}/> {c.reward}</span>
              </div>
              <button className="w-full bg-white/5 hover:bg-white hover:text-black py-2.5 rounded-xl font-medium transition-colors border border-white/10">Join Challenge</button>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="glass p-6 rounded-2xl border border-white/5 h-fit relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Trophy className="text-yellow-500"/> Global Leaderboard</h3>
          <div className="space-y-3 relative z-10">
            {[
              { rank: 1, name: "Arun Kumar", xp: "5,200 XP", color: "text-yellow-400", badge: "🥇" },
              { rank: 2, name: "Thamarai (You)", xp: "4,850 XP", color: "text-gray-300", highlight: true, badge: "🥈" },
              { rank: 3, name: "Priya", xp: "4,200 XP", color: "text-orange-400", badge: "🥉" },
              { rank: 4, name: "Rahul Singh", xp: "3,950 XP", color: "text-gray-500", badge: "4" },
              { rank: 5, name: "Ananya", xp: "3,100 XP", color: "text-gray-500", badge: "5" },
            ].map((user, i) => (
              <div key={i} className={`flex items-center justify-between p-4 rounded-xl transition-all ${user.highlight ? 'bg-primary/10 border border-primary/30 shadow-[0_0_15px_rgba(204,255,0,0.1)] scale-[1.02]' : 'bg-gray-800/40 border border-transparent'}`}>
                <div className="flex items-center gap-4">
                  <span className={`font-bold text-lg w-6 text-center ${user.color}`}>{user.badge}</span>
                  <span className={user.highlight ? 'text-primary font-bold' : 'text-gray-200'}>{user.name}</span>
                </div>
                <span className="text-sm font-mono font-bold text-gray-300">{user.xp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}