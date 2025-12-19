
import React, { useState } from 'react';
import { Zap, Github, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthPageProps {
  onLogin: (username: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    onLogin(isLogin ? (email.split('@')[0] || 'TuxLearner') : username);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-md z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-indigo-600 p-4 rounded-2xl shadow-2xl shadow-indigo-600/40 mb-4">
            <Zap size={40} className="text-white fill-white" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Linux Coach AI</h1>
          <p className="text-slate-400 mt-2">Join the open source revolution.</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-[2rem] shadow-2xl">
          <div className="flex p-1 bg-slate-950 rounded-xl mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="text" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="tux_master"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
              <span className="relative bg-slate-900 px-4 text-xs font-bold text-slate-500 uppercase">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 hover:border-slate-600 py-3 rounded-xl transition-all font-medium text-slate-300">
                <Github size={18} />
                GitHub
              </button>
              <button className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 hover:border-slate-600 py-3 rounded-xl transition-all font-medium text-slate-300">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <div className="w-full h-1/4 bg-red-500"></div>
                </div>
                Google
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          By continuing, you agree to our <span className="text-slate-400 hover:text-indigo-400 cursor-pointer underline">Terms of Service</span>.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
