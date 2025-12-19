
import React, { useState } from 'react';
import { Search, Monitor, ArrowRight, Package } from 'lucide-react';
import { APP_MAPPINGS } from '../constants';

const SoftwareCenter: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = APP_MAPPINGS.filter(a => 
    a.windows.toLowerCase().includes(search.toLowerCase()) ||
    a.linux.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Migration App Mapping</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Switching from Windows? Find your favorite apps on Linux. We've mapped out the best alternatives.
        </p>
      </div>

      <div className="relative group max-w-xl mx-auto">
        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-focus-within:bg-indigo-500/40 transition-all opacity-0 group-focus-within:opacity-100"></div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Type a Windows app (e.g., Photoshop, Office)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900/80 backdrop-blur border border-slate-700 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-lg shadow-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{item.category}</span>
              <Package size={20} className="text-slate-600" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs text-slate-500 font-medium">Windows</p>
                <p className="text-lg font-bold text-slate-300">{item.windows}</p>
              </div>
              <div className="text-slate-600">
                <ArrowRight size={24} />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-xs text-indigo-500 font-medium">Linux Alternative</p>
                <p className="text-lg font-bold text-white">{item.linux}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-2 bg-slate-950 p-3 rounded-lg border border-slate-800">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-indigo-950/20 border border-indigo-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">How to install?</h2>
          <p className="text-slate-300">
            Linux uses different package formats like <b>.deb</b>, <b>.rpm</b>, <b>Flatpak</b>, and <b>AppImage</b>. 
            Don't worry, modern distros have App Stores just like your phone!
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-colors">Format Guide</button>
            <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">Explore Flathub</button>
          </div>
        </div>
        <div className="w-full md:w-64 aspect-square bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center p-8">
          <Monitor size={80} className="text-indigo-400" />
        </div>
      </div>
    </div>
  );
};

export default SoftwareCenter;
