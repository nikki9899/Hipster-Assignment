import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { apiService, Product } from '../services/api';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { theme, currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await apiService.getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  const getTitleAnimation = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'animate-slide-up theme-1-text-animation';
      case 'theme2':
        return 'animate-slide-up theme-2-glow';
      case 'theme3':
        return 'animate-slide-up theme-3-bounce';
      default:
        return 'animate-slide-up';
    }
  };

  const getGridLayout = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3';
      case 'theme2':
        return 'grid-cols-1';
      case 'theme3':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getGridGap = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'gap-4';
      case 'theme2':
        return 'gap-6';
      case 'theme3':
        return 'gap-8';
      default:
        return 'gap-6';
    }
  };

  
  const getContainerClasses = () => {
    const baseClasses = `pt-20 min-h-screen ${theme.colors.background} ${theme.typography.fontFamily} ${theme.layout.transition} animate-fade-in`;
    
    if (currentTheme === 'theme2') {
      return `${baseClasses} theme-2-stars`;
    }
    
    return baseClasses;
  };

  return (
    <div className={getContainerClasses()}>
  
      {currentTheme === 'theme2' && (
        <>
          <div className="theme-2-stars-layer-1" />
          <div className="theme-2-stars-layer-2" />
          <div className="theme-2-stars-layer-3" />
        
          <div className="theme-2-meteor" />
          <div className="theme-2-meteor" />
          <div className="theme-2-meteor" />
          <div className="theme-2-meteor" />
          <div className="theme-2-meteor" />
        </>
      )}
      
      
      <div className={`${theme.layout.maxWidth} mx-auto ${theme.spacing.lg} ${
        currentTheme === 'theme2' ? 'theme-2-content' : ''
      }`}>
        <h1 className={`${theme.typography.fontSize.xlarge} ${theme.typography.fontWeight.bold} ${theme.colors.text} mb-6 text-center ${getTitleAnimation()}`}>
          {currentTheme === 'theme1' && 'Welcome to Our Store'}
          {currentTheme === 'theme2' && '✨ Stellar Product Catalog ✨'}
          {currentTheme === 'theme3' && '🎉 Amazing Products 🎉'}
        </h1>
        
        <p className={`${theme.typography.fontSize.medium} ${theme.colors.textSecondary} mb-8 text-center leading-relaxed animate-slide-up ${currentTheme === 'theme1' ? 'theme-1-text-animation' : ''}`} style={{ animationDelay: '0.2s' }}>
          {currentTheme === 'theme1' && 'Discover our collection of high-quality products with minimalist design and excellent value.'}
          {currentTheme === 'theme2' && 'Navigate through our cosmic collection of premium items under the starlit sky.'}
          {currentTheme === 'theme3' && 'Get ready to be amazed by our colorful collection of fantastic products! 🌈✨'}
        </p>

        <button className={`${theme.colors.accent} ${theme.colors.surface} border-none ${theme.layout.borderRadius} px-6 py-3 ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.bold} cursor-pointer ${theme.layout.transition} block mx-auto mb-8 hover:scale-105 hover:shadow-lg animate-bounce-in`} style={{ animationDelay: '0.4s' }}>
          {currentTheme === 'theme1' && 'Explore Products'}
          {currentTheme === 'theme2' && '🌟 Explore Cosmos'}
          {currentTheme === 'theme3' && '🎯 Start Shopping!'}
        </button>

        <div className={`${
          currentTheme === 'theme2' ? 'grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6' : 'block'
        }`}>
          {currentTheme === 'theme2' && (
            <aside className={`${theme.colors.surface} ${theme.spacing.lg} ${theme.colors.border} border-r animate-slide-up theme-2-backdrop`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.text} mb-4`}>
                🌌 Categories
              </h3>
              {categories.map((category, index) => (
                <div
                  key={category}
                  className={`${theme.spacing.sm} mb-2 ${theme.layout.borderRadius} ${theme.colors.background} ${theme.colors.text} cursor-pointer ${theme.layout.transition} hover:bg-slate-700 hover:bg-opacity-80 hover:translate-x-2 transform duration-300 theme-2-backdrop`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  ⭐ {category}
                </div>
              ))}
            </aside>
          )}

          <main className={currentTheme === 'theme2' ? 'theme-2-content' : ''}>
            {loading && (
              <div className={`text-center ${theme.typography.fontSize.large} ${theme.colors.textSecondary} ${theme.spacing.xl} animate-pulse-slow`}>
                <div className="inline-block w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full spinner"></div>
                <p className="mt-4">Loading cosmic products...</p>
              </div>
            )}
            
            {error && (
              <div className={`text-center ${theme.typography.fontSize.medium} text-red-400 ${theme.spacing.lg} bg-red-900 bg-opacity-20 ${theme.layout.borderRadius} border border-red-500 animate-bounce-in ${currentTheme === 'theme2' ? 'theme-2-backdrop' : ''}`}>
                {error}
              </div>
            )}
            
            {!loading && !error && (
              <div className={`grid ${getGridGap()} ${getGridLayout()}`}>
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;