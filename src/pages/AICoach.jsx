import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, User } from 'lucide-react';

export default function AICoach() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello, athlete! I'm your FITVERSE AI Coach. What's your fitness goal for today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      let aiReply = "That's a solid goal! Keep pushing your limits and make sure to stay hydrated.";
      const lower = userMessage.text.toLowerCase();
      if (lower.includes('weight loss') || lower.includes('fat')) {
        aiReply = "For fat loss, I recommend combining a 25-minute HIIT session with a controlled caloric deficit. Check out our Workouts tab!";
      } else if (lower.includes('muscle') || lower.includes('gain') || lower.includes('strength')) {
        aiReply = "Focus on progressive overload with compound movements like push-ups and core strength workouts to pack on lean muscle.";
      }
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    }, 1000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="glass p-6 rounded-2xl border border-white/10 flex items-center justify-between shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop")' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-2xl flex items-center justify-center text-primary shadow-[0_0_15px_rgba(204,255,0,0.3)]">
            <Bot size={26} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">FITVERSE AI Coach <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full">ONLINE</span></h1>
            <p className="text-gray-300 text-xs font-medium">Real-time personalized workout and nutrition intelligence.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 rounded-2xl border border-white/10 space-y-4 shadow-2xl min-h-[400px] max-h-[500px] overflow-y-auto flex flex-col">
        {messages.map((m, i) => (
          <div key={i} className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${m.sender === 'user' ? 'bg-white text-black font-bold' : 'bg-primary/20 border border-primary/40 text-primary'}`}>
              {m.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
            </div>
            <div className={`max-w-[75%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-md ${
              m.sender === 'user' 
                ? 'bg-primary text-black rounded-tr-none font-semibold' 
                : 'bg-white/10 border border-white/10 text-gray-200 rounded-tl-none backdrop-blur-md'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="glass p-2 rounded-2xl border border-white/10 flex items-center gap-2 shadow-xl">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask your AI Coach anything (e.g., 'Give me a chest workout')..." 
          className="flex-1 bg-transparent border-none px-4 py-3 text-white focus:outline-none text-sm font-medium placeholder:text-gray-500"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          type="submit" 
          className="bg-primary text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-colors"
        >
          <Send size={16} /> Send
        </motion.button>
      </form>
    </motion.div>
  );
}