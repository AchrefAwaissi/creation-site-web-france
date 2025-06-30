import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navigationItems = [
    { title: 'ACCUEIL', href: '/' },
    { title: 'SERVICES', href: '/services' },
    { title: 'A PROPOS', href: '/agence' },
    { title: 'RÉALISATIONS', href: '/realisations' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm' : 'bg-white/90 backdrop-blur-md border-b border-gray-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Minimaliste & Tech */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <button onClick={() => window.location.href = '/'} className="flex items-center space-x-3">
              {/* Logo cube 3D */}
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                {/* Cube principal */}
                <div className="absolute inset-0">
                  {/* Face avant */}
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 transform rotate-12 shadow-lg"></div>
                  {/* Face droite */}
                  <div className="absolute top-0 left-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 transform rotate-12 skew-y-12 origin-bottom shadow-md"></div>
                  {/* Face dessus */}
                  <div className="absolute -top-2 left-1 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 transform rotate-12 skew-x-12 origin-left shadow-sm"></div>
                </div>
                {/* Point lumineux */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-lg animate-ping"></div>
              </div>
              
              <span className="text-2xl font-bold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                MakStarweb
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(({ title, href }) => (
              <button 
                key={href} 
                onClick={() => window.location.href = href}
                className="text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 tracking-wide"
              >
                {title}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              Contacter moi
            </button>
          </div>

          {/* Burger Button */}
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle menu" 
            className="lg:hidden text-gray-700 hover:text-purple-600 hover:bg-purple-50 p-2 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {navigationItems.map(({ title, href }) => (
                <button
                  key={href}
                  onClick={() => {
                    window.location.href = href;
                    closeMenu();
                  }}
                  className="block w-full text-left text-sm font-medium tracking-wide text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300"
                >
                  {title}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    window.location.href = '/contact';
                    closeMenu();
                  }}
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Contacter moi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}