import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';

export default function Challenges() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } };

  const challenges = [
    { name: "🔥 30-Day Fitness Challenge", progress: 40, participants: "2,456", reward: "Champion Badge", img: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=800&auto=format&fit=crop" },
    { name: "🚶 10,000 Steps Daily", progress: 75, participants: "5,120", reward: "Walker Badge", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop" },
    { name: "💪 100 Push-ups Weekly", progress: 10, participants: "1,200", reward: "Strength Badge", img: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1 className="text-3xl font-bold mb-2">Community Challenges</h1>
      <p className="text-gray-400 mb-8">Compete with friends and earn exclusive badges.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          {challenges.map((c, i) => (
            <motion.div key={i} variants={item} whileHover={{ scale: 1.02 }} className="rounded-2xl relative overflow-hidden group border border-white/10 shadow-xl h-48 flex flex-col justify-end p-5">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${c.img})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-white">{c.name}</h3>
                  <span className="flex items-center gap-1 text-xs text-white font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm"><Users size={12}/> {c.participants}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 mb-3 overflow-hidden backdrop-blur-sm">
                  <div className="bg-primary h-2.5 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(204,255,0,0.8)]" style={{ width: `${c.progress}%` }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-300 font-medium">
                  <span>Progress: <span className="text-white">{c.progress}%</span></span>
                  <span className="flex items-center gap-1 text-primary drop-shadow-md"><Trophy size={14}/> {c.reward}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass p-6 rounded-2xl border border-white/5 h-fit relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Trophy className="text-yellow-500"/> Global Leaderboard</h3>
          <div className="space-y-3 relative z-10">
            {[
              { rank: 1, name: "Arun Kumar", xp: "5,200 XP", color: "text-yellow-400", badge: "🥇" },
              { rank: 2, name: "Thamarai (You)", xp: "4,850 XP", color: "text-gray-300", highlight: true, badge: "🥈" },
              { rank: 3, name: "Priya", xp: "4,200 XP", color: "text-orange-400", badge: "🥉" },
              { rank: 4, name: "Rahul Singh", xp: "3,950 XP", color: "text-gray-500", badge: "4" },
              { rank: 5, name: "Ananya", xp: "3,100 XP", color: "text-gray-500", badge: "5" },
            ].map((user, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-default ${user.highlight ? 'bg-primary/15 border border-primary/40 shadow-[0_0_20px_rgba(204,255,0,0.15)] scale-[1.02]' : 'bg-gray-800/40 border border-transparent hover:bg-gray-800/60'}`}>
                <div className="flex items-center gap-4">
                  <span className={`font-bold text-lg w-6 text-center ${user.color} drop-shadow-md`}>{user.badge}</span>
                  <span className={user.highlight ? 'text-primary font-bold tracking-wide' : 'text-gray-200 font-medium'}>{user.name}</span>
                </div>
                <span className="text-sm font-mono font-bold text-gray-300">{user.xp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}