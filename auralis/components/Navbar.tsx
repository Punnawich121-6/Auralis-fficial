import React from 'react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.8)] group-hover:scale-110 transition duration-300">
              <span className="font-bold text-white text-lg">A</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wide uppercase drop-shadow-md">
              AI Hub <span className="text-red-500">X</span>
          </span>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-200 shadow-black drop-shadow-md">
          <a href="#features" className="hover:text-red-500 transition">Platform</a>
          <a href="#solutions" className="hover:text-red-500 transition">Integration</a>
          <a href="#pricing" className="hover:text-red-500 transition">Pricing</a>
      </div>
      
      {/* Action Button */}
      <button className="text-white text-sm font-medium bg-white/10 hover:bg-red-600 px-4 py-2 rounded transition border border-white/20 hover:border-red-600">
          sign up
      </button>
    </header>
  );
}