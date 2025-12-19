
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import AuthPage from './components/AuthPage';
import TuxCoach from './components/TuxCoach';
import DistroCatalog from './components/DistroCatalog';
import SoftwareCenter from './components/SoftwareCenter';
import TerminalDojo from './components/TerminalDojo';
import ArtCorner from './components/ArtCorner';
import PitchDeck from './components/PitchDeck';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('coach');
  const [user, setUser] = useState<{ name: string } | null>(null);

  // Load user from local storage if needed, but for now just mock session
  const handleLogin = (username: string) => {
    setUser({ name: username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <AuthPage onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'coach': return <TuxCoach />;
      case 'distros': return <DistroCatalog />;
      case 'apps': return <SoftwareCenter />;
      case 'terminal': return <TerminalDojo />;
      case 'social': return <ArtCorner />;
      case 'pitch': return <PitchDeck />;
      default: return <TuxCoach />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      user={user}
      onLogout={handleLogout}
    >
      <div className="h-full">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
