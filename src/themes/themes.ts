import { Theme } from '../types/theme';

export const themes: Record<string, Theme> = {
  theme1: {
    name: 'Minimalist',
    colors: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      background: 'bg-gray-50',
      surface: 'bg-white',
      text: 'text-gray-800',
      textSecondary: 'text-gray-500',
      accent: 'text-blue-700',
      border: 'border-gray-200',
      shadow: 'shadow-md',
    },
    typography: {
      fontFamily: 'font-sans',
      fontSize: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        xlarge: 'text-xl',
      },
      fontWeight: {
        normal: 'font-normal',
        bold: 'font-semibold',
      },
    },
    spacing: {
      xs: 'p-2',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
    layout: {
      maxWidth: 'max-w-6xl',
      borderRadius: 'rounded-lg',
      transition: 'transition-all duration-300 ease-in-out',
    },
    shadow: 'shadow-md',
  },
  theme2: {
    name: 'Dark Sidebar',
    colors: {
      primary: 'text-emerald-400',
      secondary: 'text-emerald-300',
      background: 'bg-slate-900',
      surface: 'bg-slate-800',
      text: 'text-emerald-100',
      textSecondary: 'text-emerald-200',
      accent: 'text-cyan-400',
      border: 'border-slate-700',
      shadow: 'shadow-2xl',
    },
    typography: {
      fontFamily: 'font-serif',
      fontSize: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        xlarge: 'text-2xl',
      },
      fontWeight: {
        normal: 'font-normal',
        bold: 'font-bold',
      },
    },
    spacing: {
      xs: 'p-3',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    },
    layout: {
      maxWidth: 'max-w-7xl',
      borderRadius: 'rounded-xl',
      transition: 'transition-all duration-400 ease-out',
    },
    shadow: 'shadow-2xl',
  },
  theme3: {
    name: 'Colorful Playful',
    colors: {
      primary: 'text-purple-800',
      secondary: 'text-pink-600',
      background: 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50',
      surface: 'bg-white',
      text: 'text-purple-900',
      textSecondary: 'text-pink-700',
      accent: 'text-indigo-600',
      border: 'border-pink-200',
      shadow: 'shadow-lg',
    },
    typography: {
      fontFamily: 'font-pacifico',
      fontSize: {
        small: 'text-base',
        medium: 'text-lg',
        large: 'text-xl',
        xlarge: 'text-2xl',
      },
      fontWeight: {
        normal: 'font-normal',
        bold: 'font-semibold',
      },
    },
    spacing: {
      xs: 'p-3',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    },
    layout: {
      maxWidth: 'max-w-5xl',
      borderRadius: 'rounded-3xl',
      transition: 'transition-all duration-500 ease-bounce',
    },
    shadow: 'shadow-lg',
  },
}; 