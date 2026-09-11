import { useState } from 'react';

import {
Bot,
Send,
User
} from 'lucide-react';

export default function AiCoach() {

const [messages, setMessages] = useState([
{
sender: 'ai',
text:
"Hello, athlete! 👋 I'm your FITVERSE AI Coach. Ask me about workouts, nutrition, weight loss, muscle building, or recovery."
}
]);

const [input, setInput] = useState('');

const [isTyping, setIsTyping] = useState(false);

const generateReply = (userText) => {


const lower = userText.toLowerCase();


if (
  lower.includes('chest') ||
  lower.includes('push')
) {

  return `💪 Chest Workout:


1. Push-ups – 3 sets
2. Incline Dumbbell Press – 4 sets
3. Chest Fly – 3 sets
4. Stretch – 5 minutes

Focus on proper form and controlled movements.`;


}


if (
  lower.includes('diet') ||
  lower.includes('food') ||
  lower.includes('protein')
) {

  return `🥗 Nutrition Tip:


Include protein-rich foods such as eggs, milk, paneer, chicken, fish, lentils and legumes.

Also include vegetables, fruits and sufficient water for a balanced diet.`;


}


if (
  lower.includes('weight') ||
  lower.includes('fat') ||
  lower.includes('cardio')
) {

  return `🔥 Fitness Strategy:

• 20–30 minutes of cardio
• Regular strength training
• Balanced calorie-controlled meals
• Consistent sleep schedule

Small sustainable habits produce long-term results!`;


}


if (
  lower.includes('muscle') ||
  lower.includes('bulk')
) {

  return `🏋️ Muscle Building Tips:


• Focus on compound exercises
• Gradually increase resistance
• Eat sufficient protein
• Allow recovery between workouts
• Maintain consistent training`;


}


if (
  lower.includes('sleep') ||
  lower.includes('recovery')
) {

  return `😴 Recovery Advice:


Quality sleep and recovery are essential for fitness progress.

Try to maintain a consistent sleep schedule, stay hydrated and include rest days in your routine.`;


}


return `⚡ Great question!


Consistency is one of the most important factors in fitness. FITVERSE AI can help guide your workouts, nutrition and recovery based on your goals.`;

};

const handleSend = (e) => {

e.preventDefault();

if (!input.trim()) return;

const userText = input.trim();


setMessages((prev) => [
  ...prev,
  {
    sender: 'user',
    text: userText
  }
]);


setInput('');

setIsTyping(true);


setTimeout(() => {

  const reply = generateReply(userText);


  setMessages((prev) => [
    ...prev,
    {
      sender: 'ai',
      text: reply
    }
  ]);


  setIsTyping(false);

}, 900);


};

return (


<div className="space-y-6 max-w-4xl mx-auto pb-12">

  <div className="glass p-6 rounded-2xl flex items-center gap-4">

    <div className="w-12 h-12 bg-[#ccff00]/20 border border-[#ccff00]/40 rounded-xl flex items-center justify-center text-[#ccff00]">

      <Bot size={26} />

    </div>


    <div>

      <h1 className="text-2xl font-black flex items-center gap-3">

        FITVERSE AI Coach

        <span className="bg-[#ccff00] text-black text-[10px] px-3 py-1 rounded-full font-bold">

          ONLINE

        </span>

      </h1>

      <p className="text-gray-400 text-sm mt-1">

        Personalized workout and fitness guidance.

      </p>

    </div>

  </div>


  <div className="glass p-6 rounded-2xl min-h-[450px] max-h-[550px] overflow-y-auto space-y-5">

    {messages.map((message, i) => (

      <div
        key={i}
        className={`flex items-start gap-3 ${
          message.sender === 'user'
            ? 'flex-row-reverse'
            : ''
        }`}
      >

        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            message.sender === 'user'
              ? 'bg-white text-black'
              : 'bg-[#ccff00]/20 border border-[#ccff00]/40 text-[#ccff00]'
          }`}
        >

          {message.sender === 'user'
            ? <User size={18} />
            : <Bot size={18} />
          }

        </div>


        <div
          className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
            message.sender === 'user'
              ? 'bg-[#ccff00] text-black rounded-tr-none font-semibold'
              : 'bg-white/10 border border-white/10 text-gray-200 rounded-tl-none'
          }`}
        >

          {message.text}

        </div>

      </div>

    ))}


    {isTyping && (

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-xl bg-[#ccff00]/20 text-[#ccff00] flex items-center justify-center">

          <Bot size={18} />

        </div>

        <div className="bg-white/10 text-gray-400 p-3 rounded-xl text-sm animate-pulse">

          AI Coach is analyzing...

        </div>

      </div>

    )}

  </div>


  <form
    onSubmit={handleSend}
    className="glass p-2 rounded-2xl flex gap-2"
  >

    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Ask your AI Coach anything..."
      className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
    />

    <button
      type="submit"
      className="bg-[#ccff00] text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2"
    >

      <Send size={17} />

      <span className="hidden sm:inline">
        Send
      </span>

    </button>

  </form>

</div>


);
}
