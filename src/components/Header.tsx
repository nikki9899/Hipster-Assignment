import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, currentTheme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as any);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${theme.colors.surface} ${theme.colors.border} border-b ${theme.shadow} ${theme.spacing.sm} ${theme.layout.transition} animate-fade-in`}>
      <div className={`${theme.layout.maxWidth} mx-auto flex justify-between items-center ${theme.typography.fontFamily}`}>
        <Link 
          to="/" 
          className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.primary} no-underline ${theme.layout.transition} hover:scale-105 transform duration-300`}
        >
          🎨 ThemeSwitcher
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link 
            to="/" 
            className={`${theme.colors.text} no-underline ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.normal} px-3 py-2 ${theme.layout.borderRadius} ${theme.layout.transition} hover:bg-gray-100 dark:hover:bg-gray-700 hover:translate-y-[-2px] transform duration-300`}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className={`${theme.colors.text} no-underline ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.normal} px-3 py-2 ${theme.layout.borderRadius} ${theme.layout.transition} hover:bg-gray-100 dark:hover:bg-gray-700 hover:translate-y-[-2px] transform duration-300`}
          >
            About
          </Link>
          
          <Link 
            to="/contact" 
            className={`${theme.colors.text} no-underline ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.normal} px-3 py-2 ${theme.layout.borderRadius} ${theme.layout.transition} hover:bg-gray-100 dark:hover:bg-gray-700 hover:translate-y-[-2px] transform duration-300`}
          >
            Contact
          </Link>
          
          <select
            value={currentTheme}
            onChange={handleThemeChange}
            className={`${theme.colors.surface} ${theme.colors.text} ${theme.colors.border} border ${theme.layout.borderRadius} px-3 py-2 ${theme.typography.fontSize.small} ${theme.typography.fontFamily} cursor-pointer ${theme.layout.transition} focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105 transform duration-300`}
            aria-label="Select theme"
          >
            <option value="theme1">Theme 1 - Minimalist</option>
            <option value="theme2">Theme 2 - Dark Sidebar</option>
            <option value="theme3">Theme 3 - Colorful Playful</option>
          </select>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} animate-slide-down`}>
        <div className={`${theme.colors.surface} border-t ${theme.colors.border} py-4 px-4`}>
          <div className="flex flex-col gap-3">
            <Link 
              to="/" 
              className={`${theme.colors.text} no-underline ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.normal} px-3 py-2 ${theme.layout.borderRadius} ${theme.layout.transition} hover:bg-gray-100 dark:hover:bg-gray-700`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`${theme.colors.text} no-underline ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.normal} px-3 py-2 ${theme.layout.borderRadius} ${theme.layout.transition} hover:bg-gray-100 dark:hover:bg-gray-700`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`${theme.colors.text} no-underline ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.normal} px-3 py-2 ${theme.layout.borderRadius} ${theme.layout.transition} hover:bg-gray-100 dark:hover:bg-gray-700`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <select
              value={currentTheme}
              onChange={handleThemeChange}
              className={`${theme.colors.surface} ${theme.colors.text} ${theme.colors.border} border ${theme.layout.borderRadius} px-3 py-2 ${theme.typography.fontSize.small} ${theme.typography.fontFamily} cursor-pointer ${theme.layout.transition} focus:outline-none focus:ring-2 focus:ring-blue-500 w-full`}
              aria-label="Select theme"
            >
              <option value="theme1">Theme 1 - Minimalist</option>
              <option value="theme2">Theme 2 - Dark Sidebar</option>
              <option value="theme3">Theme 3 - Colorful Playful</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 