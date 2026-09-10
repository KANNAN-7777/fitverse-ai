import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';

export default function AiCoach() {
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
        aiReply = "For fat loss, I recommend combining a 25-minute HIIT session with a controlled caloric deficit.";
      } else if (lower.includes('muscle') || lower.includes('gain') || lower.includes('strength')) {
        aiReply = "Focus on progressive overload with compound movements to pack on lean muscle.";
      }
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 text-white">
      {/* Header Banner */}
      <div className="bg-gray-900/90 border border-white/10 p-6 rounded-2xl shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center text-primary">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              FITVERSE AI Coach <span className="bg-primary text-black text-xs px-2 py-0.5 rounded-full font-bold">ONLINE</span>
            </h1>
            <p className="text-gray-400 text-sm">Real-time personalized workout and nutrition intelligence.</p>
          </div>
        </div>
      </div>

      {/* Chat Messages Box */}
      <div className="bg-gray-900/80 border border-white/10 p-6 rounded-2xl min-h-[380px] max-h-[480px] overflow-y-auto space-y-4 flex flex-col shadow-2xl">
        {messages.map((m, i) => (
          <div key={i} className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.sender === 'user' ? 'bg-white text-black font-bold' : 'bg-primary/20 border border-primary/40 text-primary'}`}>
              {m.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-[75%] p-4 rounded-xl text-sm font-medium ${
              m.sender === 'user' 
                ? 'bg-primary text-black rounded-tr-none font-semibold shadow-md' 
                : 'bg-white/10 border border-white/10 text-gray-200 rounded-tl-none shadow-md'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="bg-gray-900/90 border border-white/10 p-2 rounded-2xl flex items-center gap-2 shadow-xl">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask your AI Coach anything (e.g., 'Give me a chest workout')..." 
          className="flex-1 bg-transparent border-none px-4 py-3 text-white focus:outline-none text-sm placeholder:text-gray-500"
        />
        <button 
          type="submit" 
          className="bg-primary text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Send size={16} /> Send
        </button>
      </form>
    </div>
  );
}