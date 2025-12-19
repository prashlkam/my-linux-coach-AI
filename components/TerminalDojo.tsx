
import React, { useState } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, CheckCircle, Copy, Code } from 'lucide-react';
import { COMMANDS } from '../constants';

const TerminalDojo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [terminalHistory, setTerminalHistory] = useState<{cmd: string, output: string}[]>([]);
  const [input, setInput] = useState('');

  const categories = ['All', 'File', 'Network', 'System', 'Package'];
  const filtered = activeCategory === 'All' ? COMMANDS : COMMANDS.filter(c => c.category === activeCategory);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    let output = '';
    if (input === 'ls') output = 'Desktop  Documents  Downloads  Music  Pictures  Videos';
    else if (input === 'clear') {
      setTerminalHistory([]);
      setInput('');
      return;
    } else if (input === 'help') output = 'Try commands: ls, ip addr, htop, clear';
    else output = `Command not found: ${input}. This is a simulated environment.`;

    setTerminalHistory([...terminalHistory, { cmd: input, output }]);
    setInput('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Library Side */}
      <div className="space-y-6 overflow-y-auto pr-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Terminal Dojo</h1>
          <p className="text-slate-400">Master the command line one brick at a time.</p>
        </div>

        <div className="flex gap-2 p-1 bg-slate-900 rounded-xl w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((cmd, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-slate-700">
              <div className="flex gap-4 items-start">
                <div className={`mt-1 p-2 rounded-lg ${
                  cmd.dangerLevel === 'Safe' ? 'bg-green-500/10 text-green-500' : 
                  cmd.dangerLevel === 'Warning' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {cmd.dangerLevel === 'Safe' ? <CheckCircle size={18} /> : <ShieldAlert size={18} />}
                </div>
                <div>
                  <code className="text-indigo-400 font-mono text-lg">{cmd.cmd}</code>
                  <p className="text-sm text-slate-400 mt-1">{cmd.description}</p>
                </div>
              </div>
              <button 
                className="opacity-0 group-hover:opacity-100 p-2 hover:bg-slate-800 rounded-lg transition-all text-slate-400"
                onClick={() => setInput(cmd.cmd)}
              >
                <TerminalIcon size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Simulator Side */}
      <div className="flex flex-col h-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="h-10 bg-slate-800 px-4 flex items-center justify-between border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <Code size={12} />
            <span>bash — 80x24</span>
          </div>
          <div className="w-8"></div>
        </div>

        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto space-y-4 bg-[#0a0f1d]">
          <div className="text-green-400">Welcome to Linux Coach Terminal Sandbox v1.0.0</div>
          <div className="text-slate-500">Type 'help' for suggestions. Click command cards to pre-fill.</div>
          
          {terminalHistory.map((entry, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex gap-2">
                <span className="text-indigo-400">user@coach:~$</span>
                <span className="text-slate-100">{entry.cmd}</span>
              </div>
              {entry.output && <div className="text-slate-400 pl-4">{entry.output}</div>}
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex gap-2">
            <span className="text-indigo-400 shrink-0">user@coach:~$</span>
            <input 
              autoFocus
              className="bg-transparent border-none outline-none text-slate-100 w-full focus:ring-0" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TerminalDojo;
