import { useState, useRef, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AICoach() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi there! I'm FITBOT 🤖, your personal AI fitness companion. How can I help you level up today?" }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  const predefinedResponses = {
    "15 minutes": "Perfect! Here's a quick 15-min burn:\n🔥 Jumping Jacks - 2 mins\n💪 Squats - 3 sets x 15\n🏃 High Knees - 2 mins\n🧘 Stretching - 3 mins",
    "lose weight": "To lose weight, focus on a caloric deficit and high-intensity interval training (HIIT). Would you like a beginner HIIT plan?",
    "muscle": "Building muscle requires progressive overload and sufficient protein intake. Try a 4-day split: Push, Pull, Legs, Upper.",
    "default": "That's a great goal! I can create a customized routine for you. What equipment do you have access to?"
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      let botReply = predefinedResponses["default"];
      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes("15 min")) botReply = predefinedResponses["15 minutes"];
      else if (lowerInput.includes("weight")) botReply = predefinedResponses["lose weight"];
      else if (lowerInput.includes("muscle")) botReply = predefinedResponses["muscle"];

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 1000);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[calc(100vh-120px)] md:h-[80vh] flex flex-col glass rounded-2xl overflow-hidden border border-white/5">
      <div className="bg-gray-900 p-4 border-b border-gray-800 flex items-center gap-3">
        <div className="bg-primary/20 p-2 rounded-full"><Bot className="text-primary" /></div>
        <div>
          <h2 className="font-bold text-lg">FITBOT 🤖</h2>
          <p className="text-xs text-primary flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Online • AI Ready</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl whitespace-pre-wrap text-sm md:text-base ${m.sender === 'user' ? 'bg-primary text-black rounded-br-sm font-medium' : 'bg-gray-800 text-gray-200 rounded-bl-sm border border-gray-700'}`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="p-4 bg-gray-900 border-t border-gray-800">
        <div className="flex gap-2 mb-3 overflow-x-auto hide-scrollbar pb-2">
          {["I have 15 minutes", "How to lose weight?", "Build muscle plan"].map((q, i) => (
            <button key={i} onClick={() => setInput(q)} className="whitespace-nowrap bg-gray-800 border border-gray-700 text-xs px-4 py-2 rounded-full hover:bg-gray-700 transition-colors text-white">
              {q}
            </button>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Message FITBOT..." className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" />
          <button type="submit" className="bg-primary text-black p-3 rounded-xl hover:bg-primaryHover transition-colors flex items-center justify-center">
            <Send size={20} />
          </button>
        </form>
      </div>
    </motion.div>
  );
}