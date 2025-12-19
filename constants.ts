
import { Distro, AppMapping, Command, ConfigFile } from './types';

export const DISTROS: Distro[] = [
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    base: 'Debian',
    de: 'GNOME',
    resources: 'Medium',
    tags: ['Beginner Friendly', 'Standard', 'Server'],
    rating: 4.8,
    description: 'The most popular Linux distribution for beginners and professionals alike.',
    wikiUrl: 'https://help.ubuntu.com/',
    logo: 'https://picsum.photos/seed/ubuntu/100/100'
  },
  {
    id: 'arch',
    name: 'Arch Linux',
    base: 'Independent',
    de: 'Any',
    resources: 'Low',
    tags: ['Advanced', 'DIY', 'Rolling Release'],
    rating: 4.5,
    description: 'A lightweight and flexible distribution that keeps it simple.',
    wikiUrl: 'https://wiki.archlinux.org/',
    logo: 'https://picsum.photos/seed/arch/100/100'
  },
  {
    id: 'fedora',
    name: 'Fedora',
    base: 'Independent',
    de: 'GNOME',
    resources: 'Medium',
    tags: ['Bleeding Edge', 'Workstation', 'Stable'],
    rating: 4.7,
    description: 'An innovative platform for hardware, clouds, and containers.',
    wikiUrl: 'https://docs.fedoraproject.org/',
    logo: 'https://picsum.photos/seed/fedora/100/100'
  },
  {
    id: 'linux-mint',
    name: 'Linux Mint',
    base: 'Ubuntu',
    de: 'Cinnamon',
    resources: 'Low-Medium',
    tags: ['Beginner Friendly', 'Windows-like', 'Multimedia'],
    rating: 4.9,
    description: 'Classic desktop feel with modern stability.',
    wikiUrl: 'https://linuxmint-help.org/',
    logo: 'https://picsum.photos/seed/mint/100/100'
  }
];

export const APP_MAPPINGS: AppMapping[] = [
  { windows: 'Adobe Premiere', linux: 'DaVinci Resolve / Kdenlive', category: 'Video Editing', description: 'Professional grade video editors.' },
  { windows: 'Microsoft Office', linux: 'LibreOffice / OnlyOffice', category: 'Productivity', description: 'Complete office suites.' },
  { windows: 'Photoshop', linux: 'GIMP / Krita', category: 'Graphics', description: 'Raster graphics editors.' },
  { windows: 'Notepad++', linux: 'VS Code / Sublime Text / Notepadqq', category: 'Development', description: 'Code and text editors.' },
  { windows: 'Outlook', linux: 'Thunderbird / Evolution', category: 'Email', description: 'Desktop email clients.' }
];

export const COMMANDS: Command[] = [
  { cmd: 'ls', description: 'List directory contents', category: 'File', dangerLevel: 'Safe' },
  { cmd: 'sudo rm -rf /', description: 'Delete EVERYTHING (Don\'t do this!)', category: 'System', dangerLevel: 'Dangerous' },
  { cmd: 'ip addr', description: 'Display network interfaces and addresses', category: 'Network', dangerLevel: 'Safe' },
  { cmd: 'htop', description: 'Interactive process viewer', category: 'System', dangerLevel: 'Safe' },
  { cmd: 'apt update', description: 'Update package lists', category: 'Package', dangerLevel: 'Warning' }
];

export const CONFIGS: ConfigFile[] = [
  { id: '1', title: 'My Minimal i3 Config', author: 'tux_fan', category: 'Window Manager', content: '# i3 config file\nset $mod Mod4\nfont pango:monospace 8\n...', likes: 42 },
  { id: '2', title: 'Oh My Zsh - Pure Theme', author: 'bash_master', category: 'Shell', content: 'ZSH_THEME="pure"\nplugins=(git docker python)', likes: 28 }
];
