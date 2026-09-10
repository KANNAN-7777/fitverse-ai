import React, { useState } from 'react';
import { Bot, Send, User, Sparkles } from 'lucide-react';

export default function AiCoach() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello, athlete! I'm your FITVERSE AI Coach. Ask me anything about your workouts, nutrition, or recovery." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Simulate intelligent AI response based on keywords
    setTimeout(() => {
      let aiReply = "That's a solid strategy! Consistency is key to hitting your Smart India Hackathon fitness goals. Keep pushing!";
      const lower = userText.toLowerCase();

      if (lower.includes('chest') || lower.includes('push')) {
        aiReply = "For an elite chest session, focus on 4 sets of weighted push-ups, incline dumbbell presses, and cable flyes with a 2-second negative.";
      } else if (lower.includes('diet') || lower.includes('food') || lower.includes('protein') || lower.includes('nutrition')) {
        aiReply = "Aim for roughly 1.6g to 2.2g of protein per kg of body weight. Incorporate lean meats, lentils, paneer, or plant-based protein sources to fuel your recovery.";
      } else if (lower.includes('weight loss') || lower.includes('fat') || lower.includes('cardio')) {
        aiReply = "For optimal fat oxidation, combine a 25-minute HIIT circuit with a clean caloric deficit. Make sure to track your active calories daily!";
      } else if (lower.includes('biceps') || lower.includes('arm')) {
        aiReply = "To maximize arm hypertrophy, incorporate barbell curls, hammer curls, and strict tricep pushdowns with controlled contraction.";
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 text-white">
      {/* Header Banner */}
      <div className="bg-gray-900/90 border border-white/10 p-6 rounded-2xl shadow-xl flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center text-primary shadow-[0_0_15px_rgba(204,255,0,0.3)]">
            <Bot size={26} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">
              FITVERSE AI Coach <span className="bg-primary text-black text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">ONLINE</span>
            </h1>
            <p className="text-gray-400 text-xs mt-0.5 font-medium">Real-time personalized workout and nutrition intelligence.</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-primary">
          <Sparkles size={14} /> AI Model v2.4 Active
        </div>
      </div>

      {/* Chat Messages Box */}
      <div className="bg-gray-900/80 border border-white/10 p-6 rounded-2xl min-h-[380px] max-h-[480px] overflow-y-auto space-y-4 flex flex-col shadow-2xl backdrop-blur-md">
        {messages.map((m, i) => (
          <div key={i} className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${m.sender === 'user' ? 'bg-white text-black font-bold shadow-md' : 'bg-primary/20 border border-primary/40 text-primary shadow-[0_0_10px_rgba(204,255,0,0.2)]'}`}>
              {m.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
            </div>
            <div className={`max-w-[75%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
              m.sender === 'user' 
                ? 'bg-primary text-black rounded-tr-none font-semibold shadow-lg' 
                : 'bg-white/10 border border-white/10 text-gray-200 rounded-tl-none shadow-md backdrop-blur-md'
            }`}>
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 text-primary flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div className="bg-white/10 border border-white/10 text-gray-400 p-3 rounded-2xl rounded-tl-none text-xs italic animate-pulse">
              AI Coach is analyzing your request...
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="bg-gray-900/90 border border-white/10 p-2 rounded-2xl flex items-center gap-2 shadow-xl backdrop-blur-md">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask your AI Coach anything (e.g., 'Give me a chest workout' or 'Diet plan')..." 
          className="flex-1 bg-transparent border-none px-4 py-3 text-white focus:outline-none text-sm placeholder:text-gray-500 font-medium"
        />
        <button 
          type="submit" 
          className="bg-primary text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(204,255,0,0.3)]"
        >
          <Send size={16} /> Send
        </button>
      </form>
    </div>
  );
}