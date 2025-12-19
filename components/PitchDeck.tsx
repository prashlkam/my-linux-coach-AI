
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Shield, Zap, RefreshCcw, Smile } from 'lucide-react';

const data = [
  { name: 'Privacy', linux: 95, windows: 20, mac: 50 },
  { name: 'Speed', linux: 90, windows: 55, mac: 75 },
  { name: 'Updates', linux: 100, windows: 30, mac: 60 },
  { name: 'Customization', linux: 100, windows: 15, mac: 25 },
];

const PitchDeck: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
          The <span className="text-indigo-500">Freedom</span> Operating System
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Linux isn't just an OS; it's a movement toward privacy, performance, and owning your hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Shield, title: "Zero Tracking", desc: "No telemetry, no hidden ads, no 'features' that watch your keystrokes.", color: "text-green-500" },
          { icon: Zap, title: "Lighting Fast", desc: "Old computer? Give it new life. Linux uses far fewer resources than Windows.", color: "text-yellow-500" },
          { icon: RefreshCcw, title: "You Control Updates", desc: "No more 'Restarting in 10 minutes' while you're in the middle of a meeting.", color: "text-indigo-500" },
          { icon: Smile, title: "Free Forever", desc: "Built by the community, for the community. Zero license keys, zero fees.", color: "text-pink-500" },
        ].map((item, i) => (
          <div key={i} className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 text-center space-y-4 hover:border-slate-700 transition-all">
            <div className={`mx-auto w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center ${item.color}`}>
              <item.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 space-y-8">
        <h2 className="text-3xl font-bold text-center">By the Numbers</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                itemStyle={{ color: '#f1f5f9' }}
              />
              <Bar dataKey="linux" name="Linux" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="windows" name="Windows" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mac" name="macOS" fill="#a855f7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-slate-500 text-sm">Comparison based on average community benchmarks and architectural design.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">The Migration Roadmap</h2>
          <div className="space-y-4">
            {[
              { day: "Day 1", title: "Live USB Testing", text: "Try Linux without installing anything. Just plug in a USB and explore." },
              { day: "Day 7", title: "The Dual Boot", text: "Install Linux alongside Windows. Use both as you transition slowly." },
              { day: "Day 30", title: "Full Mastery", text: "Moving your files, setting up your workflow, and realizing you haven't booted Windows in weeks." },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 p-6 bg-slate-900/40 rounded-2xl border border-slate-800/50">
                <div className="text-2xl font-black text-indigo-500">{step.day}</div>
                <div>
                  <h4 className="font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
           <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
           <img src="https://picsum.photos/seed/linux_freedom/800/800" className="relative rounded-3xl border border-slate-800 shadow-2xl" alt="Migration" />
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
