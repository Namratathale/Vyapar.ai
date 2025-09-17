// FIX: Add full content for components/Sidebar.tsx
import React from 'react';
import { Page } from '../types';
import HomeIcon from './icons/HomeIcon';
import MagicWandIcon from './icons/MagicWandIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import UserCircleIcon from './icons/UserCircleIcon';
import HelpCircleIcon from './icons/HelpCircleIcon';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navItems = [
  { page: Page.Home, label: 'Home', icon: HomeIcon },
  { page: Page.CreateContent, label: 'Create Content', icon: MagicWandIcon },
  { page: Page.CommandCenter, label: 'Command Center', icon: ChartBarIcon },
  { page: Page.Onboarding, label: 'Onboarding', icon: UserCircleIcon },
  { page: Page.Help, label: 'Help & FAQ', icon: HelpCircleIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="bg-gray-900/80 backdrop-blur-sm text-white w-64 p-4 space-y-2 border-r border-gray-700/50 hidden md:block">
      <div className="text-2xl font-bold p-4 text-center">
        Vyapar.ai
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => setCurrentPage(item.page)}
                className={`w-full flex items-center p-3 my-1 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
