
export type Distro = {
  id: string;
  name: string;
  base: string;
  de: string;
  resources: string;
  tags: string[];
  rating: number;
  description: string;
  wikiUrl: string;
  logo: string;
};

export type AppMapping = {
  windows: string;
  linux: string;
  category: string;
  description: string;
};

export type Command = {
  cmd: string;
  description: string;
  category: 'File' | 'Network' | 'System' | 'Package';
  dangerLevel: 'Safe' | 'Warning' | 'Dangerous';
};

export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export type ConfigFile = {
  id: string;
  title: string;
  author: string;
  content: string;
  likes: number;
  category: string;
};
