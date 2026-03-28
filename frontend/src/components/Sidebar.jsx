import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col py-6 px-4 bg-[#111415]/80 backdrop-blur-xl h-screen w-64 border-r border-[#323536]/10 z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded flex items-center justify-center">
          <img src="/logo.png" alt="UrMail Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary font-manrope">UrMail</h1>
          <p className="text-[0.625rem] font-label uppercase tracking-widest text-outline">Autonomous Ops</p>
        </div>
      </div>
      
      <button className="mb-8 w-full py-3 px-4 rounded-md bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-headline font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]">
        <span className="material-symbols-outlined text-[18px]">edit_note</span>
        Compose Agent
      </button>

      <nav className="flex-1 space-y-2">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            isActive 
              ? "flex items-center gap-3 px-4 py-2.5 rounded text-[#adc6ff] font-bold border-r-2 border-[#adc6ff] bg-[#adc6ff]/5 transition-all duration-300"
              : "flex items-center gap-3 px-4 py-2.5 rounded text-[#d1d3d4] hover:text-[#adc6ff] hover:bg-[#323536]/50 transition-all duration-300"
          }
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-sm font-medium">Executive Dashboard</span>
        </NavLink>
        
        <NavLink 
          to="/inbox" 
          className={({ isActive }) => 
            isActive 
              ? "flex items-center gap-3 px-4 py-2.5 rounded text-[#adc6ff] font-bold border-r-2 border-[#adc6ff] bg-[#adc6ff]/5 transition-all duration-300"
              : "flex items-center gap-3 px-4 py-2.5 rounded text-[#d1d3d4] hover:text-[#adc6ff] hover:bg-[#323536]/50 transition-all duration-300"
          }
        >
          <span className="material-symbols-outlined">inbox</span>
          <span className="text-sm font-medium">Smart Inbox</span>
        </NavLink>

        <NavLink 
          to="/email/1" 
          className={({ isActive }) => 
            isActive || window.location.pathname.startsWith('/email/')
              ? "flex items-center gap-3 px-4 py-2.5 rounded text-[#adc6ff] font-bold border-r-2 border-[#adc6ff] bg-[#adc6ff]/5 transition-all duration-300"
              : "flex items-center gap-3 px-4 py-2.5 rounded text-[#d1d3d4] hover:text-[#adc6ff] hover:bg-[#323536]/50 transition-all duration-300"
          }
        >
          <span className="material-symbols-outlined">psychology</span>
          <span className="text-sm font-medium">Email Intelligence</span>
        </NavLink>
        
        <NavLink 
          to="/kb" 
          className={({ isActive }) => 
            isActive 
              ? "flex items-center gap-3 px-4 py-2.5 rounded text-[#adc6ff] font-bold border-r-2 border-[#adc6ff] bg-[#adc6ff]/5 transition-all duration-300"
              : "flex items-center gap-3 px-4 py-2.5 rounded text-[#d1d3d4] hover:text-[#adc6ff] hover:bg-[#323536]/50 transition-all duration-300"
          }
        >
          <span className="material-symbols-outlined">database</span>
          <span className="text-sm font-medium">Knowledge Base</span>
        </NavLink>
      </nav>

      <div className="mt-auto pt-6 space-y-2 border-t border-[#323536]/10">
        <a className="flex items-center gap-3 px-4 py-2 rounded text-[#d1d3d4] hover:text-[#adc6ff] transition-colors hover:bg-[#323536]/50" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[0.6875rem] font-label uppercase tracking-wider">Settings</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-2 rounded text-[#d1d3d4] hover:text-[#adc6ff] transition-colors hover:bg-[#323536]/50" href="#">
          <span className="material-symbols-outlined">help_outline</span>
          <span className="text-[0.6875rem] font-label uppercase tracking-wider">Support</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
