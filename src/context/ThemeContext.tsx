import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextType, ThemeType } from '../types/theme';
import { themes } from '../themes/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage or default to theme1
  const getInitialTheme = (): ThemeType => {
    try {
      const savedTheme = localStorage.getItem('theme') as ThemeType;
      console.log('Loading theme from localStorage:', savedTheme);
      if (savedTheme && themes[savedTheme]) {
        console.log('Using saved theme:', savedTheme);
        return savedTheme;
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
    console.log('Using default theme: theme1');
    return 'theme1';
  };

  const [currentTheme, setCurrentTheme] = useState<ThemeType>(getInitialTheme);

  // Apply initial theme to document body
  useEffect(() => {
    const theme = themes[currentTheme];
    document.body.style.fontFamily = theme.typography.fontFamily;
    document.body.style.transition = theme.layout.transition;
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('theme', currentTheme);
      console.log('Saved theme to localStorage:', currentTheme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
    
    // Apply theme to document body for global styles
    const theme = themes[currentTheme];
    document.body.style.fontFamily = theme.typography.fontFamily;
    document.body.style.transition = theme.layout.transition;
  }, [currentTheme]);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  const value: ThemeContextType = {
    currentTheme,
    theme: themes[currentTheme],
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 