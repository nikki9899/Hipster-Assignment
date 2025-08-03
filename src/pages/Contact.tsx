import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme, currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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

  const getContactItemAnimation = () => {
    switch (currentTheme) {
      case 'theme1':
        return ''; // No animation for Theme 1 contact items
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
          {currentTheme === 'theme1' && 'Contact Us'}
          {currentTheme === 'theme2' && 'Get in Touch'}
          {currentTheme === 'theme3' && '📞 Let\'s Connect! 📞'}
        </h1>

        <div className={`grid gap-6 ${
          currentTheme === 'theme2' 
            ? 'grid-cols-1 lg:grid-cols-2' 
            : currentTheme === 'theme3' 
              ? 'grid-cols-1 md:grid-cols-2' 
              : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          <div className={`${theme.colors.surface} ${theme.spacing.lg} ${theme.layout.borderRadius} ${theme.shadow} ${theme.colors.border} border ${getSectionAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.2s' }}>
            <h2 className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.primary} mb-4 ${getTextAnimation()}`}>
              {currentTheme === 'theme1' && 'Send us a Message'}
              {currentTheme === 'theme2' && 'Contact Form'}
              {currentTheme === 'theme3' && '💌 Send Message'}
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${theme.spacing.sm} ${theme.colors.border} border ${theme.layout.borderRadius} ${theme.typography.fontSize.medium} ${theme.typography.fontFamily} ${theme.colors.surface} ${theme.colors.text} ${theme.layout.transition} focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105 transform duration-300`}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${theme.spacing.sm} ${theme.colors.border} border ${theme.layout.borderRadius} ${theme.typography.fontSize.medium} ${theme.typography.fontFamily} ${theme.colors.surface} ${theme.colors.text} ${theme.layout.transition} focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105 transform duration-300`}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className={`${theme.spacing.sm} ${theme.colors.border} border ${theme.layout.borderRadius} ${theme.typography.fontSize.medium} ${theme.typography.fontFamily} ${theme.colors.surface} ${theme.colors.text} ${theme.layout.transition} focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105 transform duration-300 min-h-[120px] resize-vertical`}
                required
              />
              <button 
                type="submit" 
                className={`${theme.colors.accent} ${theme.colors.surface} border-none ${theme.layout.borderRadius} px-6 py-3 ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.bold} cursor-pointer ${theme.layout.transition} self-start hover:scale-105 hover:shadow-lg ${currentTheme === 'theme1' ? '' : 'animate-bounce-in'}`}
                style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.4s' }}
              >
                {currentTheme === 'theme1' && 'Send Message'}
                {currentTheme === 'theme2' && 'Submit'}
                {currentTheme === 'theme3' && '🚀 Send!'}
              </button>
            </form>
          </div>

          <div className={`${theme.colors.surface} ${theme.spacing.lg} ${theme.layout.borderRadius} ${theme.shadow} ${theme.colors.border} border ${getSectionAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.4s' }}>
            <h2 className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.primary} mb-4 ${getTextAnimation()}`}>
              {currentTheme === 'theme1' && 'Contact Information'}
              {currentTheme === 'theme2' && 'Office Details'}
              {currentTheme === 'theme3' && '📍 Contact Info'}
            </h2>
            <div className={`flex items-center gap-3 mb-4 ${theme.spacing.sm} ${theme.colors.background} ${theme.layout.borderRadius} ${getContactItemAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.6s' }}>
              <span>📍</span>
              <div className={getTextAnimation()}>
                <strong>Address:</strong><br />
                123 Business Street<br />
                City, State 12345
              </div>
            </div>
            <div className={`flex items-center gap-3 mb-4 ${theme.spacing.sm} ${theme.colors.background} ${theme.layout.borderRadius} ${getContactItemAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '0.8s' }}>
              <span>📧</span>
              <div className={getTextAnimation()}>
                <strong>Email:</strong><br />
                contact@example.com
              </div>
            </div>
            <div className={`flex items-center gap-3 mb-4 ${theme.spacing.sm} ${theme.colors.background} ${theme.layout.borderRadius} ${getContactItemAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '1.0s' }}>
              <span>📞</span>
              <div className={getTextAnimation()}>
                <strong>Phone:</strong><br />
                +1 (555) 123-4567
              </div>
            </div>
            <div className={`flex items-center gap-3 mb-4 ${theme.spacing.sm} ${theme.colors.background} ${theme.layout.borderRadius} ${getContactItemAnimation()}`} style={{ animationDelay: currentTheme === 'theme1' ? '0s' : '1.2s' }}>
              <span>⏰</span>
              <div className={getTextAnimation()}>
                <strong>Hours:</strong><br />
                Mon-Fri: 9AM-6PM<br />
                Sat: 10AM-4PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 