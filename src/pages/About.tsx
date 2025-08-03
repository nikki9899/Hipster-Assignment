import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme, currentTheme } = useTheme();

  const getTitleAnimation = () => {
    switch (currentTheme) {
      case 'theme1':
        return ''; // No animation for Theme 1
      case 'theme2':
        return 'theme-2-slide theme-2-glow';
      case 'theme3':
        return 'theme-3-rotate theme-3-rainbow';
      default:
        return 'animate-slide-up';
    }
  };

  const getSectionAnimation = () => {
    switch (currentTheme) {
      case 'theme1':
        return ''; // No animation for Theme 1
      case 'theme2':
        return 'theme-2-slide hover-glow';
      case 'theme3':
        return 'theme-3-rotate theme-3-card';
      default:
        return 'animate-slide-up';
    }
  };

  const getTextAnimation = () => {
    switch (currentTheme) {
      case 'theme1':
        return ''; // No text animation for Theme 1
      case 'theme2':
        return 'theme-2-glow';
      case 'theme3':
        return 'theme-3-rainbow';
      default:
        return '';
    }
  };

  const getCardAnimation = () => {
    switch (currentTheme) {
      case 'theme1':
        return ''; // No animation for Theme 1 cards
      case 'theme2':
        return 'animate-scale-in hover-glow';
      case 'theme3':
        return 'animate-scale-in theme-3-card';
      default:
        return 'animate-scale-in hover-lift';
    }
  };

  return (
    <div className={`pt-20 min-h-screen ${theme.colors.background} ${theme.typography.fontFamily} ${theme.layout.transition} ${currentTheme === 'theme1' ? '' : 'animate-fade-in'}`}>
      <div className={`${theme.layout.maxWidth} mx-auto ${theme.spacing.lg}`}>
        <h1 className={`${theme.typography.fontSize.xlarge} ${theme.typography.fontWeight.bold} ${theme.colors.text} mb-6 text-center ${getTitleAnimation()}`}>
          {currentTheme === 'theme1' && 'About Us'}
          {currentTheme === 'theme2' && 'Our Story'}
          {currentTheme === 'theme3' && '🌟 About Our Amazing Team 🌟'}
        </h1>

        <div className={`${theme.colors.surface} ${theme.spacing.lg} ${theme.layout.borderRadius} mb-6 ${theme.shadow} ${theme.colors.border} border ${getSectionAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.2s' }}>
          <h2 className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.primary} mb-4 ${getTextAnimation()}`}>
            {currentTheme === 'theme1' && 'Our Mission'}
            {currentTheme === 'theme2' && 'Company Vision'}
            {currentTheme === 'theme3' && '🎯 Our Mission'}
          </h2>
          <p className={`${theme.typography.fontSize.medium} ${theme.colors.textSecondary} mb-4 leading-relaxed ${getTextAnimation()}`}>
            We are dedicated to providing exceptional products and experiences to our customers. 
            Our commitment to quality, innovation, and customer satisfaction drives everything we do.
          </p>
        </div>

        <div className={`${theme.colors.surface} ${theme.spacing.lg} ${theme.layout.borderRadius} mb-6 ${theme.shadow} ${theme.colors.border} border ${getSectionAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.4s' }}>
          <h2 className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.primary} mb-4 ${getTextAnimation()}`}>
            {currentTheme === 'theme1' && 'Our Values'}
            {currentTheme === 'theme2' && 'Core Principles'}
            {currentTheme === 'theme3' && '💎 Our Values'}
          </h2>
          <div className={`grid gap-6 ${
            currentTheme === 'theme3' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'
          }`}>
            <div className={`${theme.spacing.md} ${theme.colors.background} ${theme.layout.borderRadius} ${theme.colors.border} border text-center ${getCardAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.6s' }}>
              <h3 className={`${theme.typography.fontSize.medium} ${theme.typography.fontWeight.bold} ${theme.colors.accent} mb-2`}>Quality</h3>
              <p className={`${theme.typography.fontSize.medium} ${theme.colors.textSecondary} leading-relaxed`}>We never compromise on quality in any aspect of our business.</p>
            </div>
            <div className={`${theme.spacing.md} ${theme.colors.background} ${theme.layout.borderRadius} ${theme.colors.border} border text-center ${getCardAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.8s' }}>
              <h3 className={`${theme.typography.fontSize.medium} ${theme.typography.fontWeight.bold} ${theme.colors.accent} mb-2`}>Innovation</h3>
              <p className={`${theme.typography.fontSize.medium} ${theme.colors.textSecondary} leading-relaxed`}>Constantly pushing boundaries to deliver cutting-edge solutions.</p>
            </div>
            <div className={`${theme.spacing.md} ${theme.colors.background} ${theme.layout.borderRadius} ${theme.colors.border} border text-center ${getCardAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '1.0s' }}>
              <h3 className={`${theme.typography.fontSize.medium} ${theme.typography.fontWeight.bold} ${theme.colors.accent} mb-2`}>Customer First</h3>
              <p className={`${theme.typography.fontSize.medium} ${theme.colors.textSecondary} leading-relaxed`}>Our customers are at the heart of every decision we make.</p>
            </div>
          </div>
        </div>

        <div className={`${theme.colors.surface} ${theme.spacing.lg} ${theme.layout.borderRadius} mb-6 ${theme.shadow} ${theme.colors.border} border ${getSectionAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '1.2s' }}>
          <h2 className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.primary} mb-4 ${getTextAnimation()}`}>
            {currentTheme === 'theme1' && 'Our Team'}
            {currentTheme === 'theme2' && 'Leadership'}
            {currentTheme === 'theme3' && '👥 Our Amazing Team'}
          </h2>
          <p className={`${theme.typography.fontSize.medium} ${theme.colors.textSecondary} mb-4 leading-relaxed ${getTextAnimation()}`}>
            Our diverse team of professionals brings together expertise from various fields, 
            creating a dynamic environment where creativity and innovation thrive. We believe 
            in fostering a culture of collaboration and continuous learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 