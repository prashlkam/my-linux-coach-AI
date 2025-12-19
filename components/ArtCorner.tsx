
import React from 'react';
import { Heart, MessageSquare, Share2, Plus, Terminal } from 'lucide-react';
import { CONFIGS } from '../constants';

const ArtCorner: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Tavern</h1>
          <p className="text-slate-400">Share your desktop art (Rice) and config files.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-bold text-white transition-all shadow-xl shadow-indigo-600/20">
          <Plus size={20} />
          Upload Work
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Desktop Rices */}
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group hover:border-slate-700 transition-all shadow-xl">
            <div className="aspect-video bg-slate-800 relative">
              <img src={`https://picsum.photos/seed/linux${i}/800/450`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Rice" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-slate-900"></div>
                <span className="text-sm font-bold text-white">RiceMaster_{i}</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">Neon Cyberpunk Arch</h3>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">Hyprland</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                    <Heart size={18} />
                    <span className="text-sm">2.4k</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                    <MessageSquare size={18} />
                    <span className="text-sm">48</span>
                  </button>
                </div>
                <Share2 size={18} className="hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Terminal className="text-indigo-400" />
          Config Vault
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONFIGS.map(cfg => (
            <div key={cfg.id} className="bg-slate-900/50 backdrop-blur border border-slate-800 p-6 rounded-2xl hover:bg-slate-900 transition-all">
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="font-bold text-white">{cfg.title}</h4>
                  <p className="text-xs text-slate-500">by {cfg.author} • {cfg.category}</p>
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <Heart size={14} />
                  {cfg.likes}
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
                <pre className="text-xs font-mono text-slate-400 overflow-hidden line-clamp-3">
                  {cfg.content}
                </pre>
              </div>
              <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold rounded-lg transition-colors">
                View Full Config
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtCorner;
