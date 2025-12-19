
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Terminal as TerminalIcon, AlertCircle } from 'lucide-react';
import { askCoach, getCLIHelp } from '../services/gemini';
import { Message } from '../types';

const TuxCoach: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Tux, your Linux Coach. Ready to start your journey? Whether you're looking for a distro recommendation, need help with a terminal command, or just want to brainstorm a workflow, I'm here to help. What's on your mind?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askCoach(userMsg, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "Something went wrong." }]);
    setIsLoading(false);
  };

  const quickActions = [
    { label: "Recommended Distro for Gaming", prompt: "What's the best Linux distro for gaming in 2024?" },
    { label: "CLI Helper: Search Files", prompt: "Show me the command to search for files larger than 1GB." },
    { label: "Windows Migration Plan", prompt: "I'm coming from Windows 11. What should I learn in my first week?" }
  ];

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-12rem)]">
      <div className="flex-1 overflow-y-auto space-y-6 px-4 pb-8 custom-scrollbar" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-6 py-4 rounded-3xl ${
              m.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
            }`}>
              {m.role === 'assistant' && (
                <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-xs uppercase tracking-widest">
                  <Sparkles size={14} />
                  <span>Tux Coach</span>
                </div>
              )}
              <div className="whitespace-pre-wrap leading-relaxed">
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl animate-pulse flex gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 space-y-4">
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {quickActions.map((action, i) => (
              <button 
                key={i}
                onClick={() => { setInput(action.prompt); handleSend(); }}
                className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-full text-sm text-slate-300 transition-all hover:bg-indigo-500/10"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
        
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-all"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-1 shadow-2xl flex items-center gap-2 pr-4">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask anything about Linux..."
              className="flex-1 bg-transparent border-none outline-none p-4 text-white resize-none max-h-32"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 p-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          Powered by Gemini 3 Flash • No RTFM Policy Enforced
        </p>
      </div>
    </div>
  );
};

export default TuxCoach;
