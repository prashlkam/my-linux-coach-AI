
import React, { useState } from 'react';
import { Search, ExternalLink, Star, Filter } from 'lucide-react';
import { DISTROS } from '../constants';

const DistroCatalog: React.FC = () => {
  const [search, setSearch] = useState('');
  
  const filtered = DISTROS.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Distro Library</h1>
          <p className="text-slate-400">Discover the perfect OS for your needs.</p>
        </div>
        <div className="relative group w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search distros, bases, or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(distro => (
          <div key={distro.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden">
                  <img src={distro.logo} alt={distro.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded-lg">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold">{distro.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{distro.name}</h3>
              <p className="text-sm text-slate-400 mb-4 h-10 line-clamp-2">{distro.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Base</span>
                  <span className="font-medium text-slate-300">{distro.base}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Environment</span>
                  <span className="font-medium text-slate-300">{distro.de}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Resources</span>
                  <span className="font-medium text-slate-300">{distro.resources}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {distro.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase rounded-md border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={distro.wikiUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors"
              >
                Read Official Guide
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistroCatalog;
