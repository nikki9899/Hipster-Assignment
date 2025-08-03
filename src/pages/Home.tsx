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
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3'; // Compact grid for Theme 1
      case 'theme2':
        return 'grid-cols-1'; // Single column for Theme 2 (sidebar layout)
      case 'theme3':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'; // Spacious grid for Theme 3
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getGridGap = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'gap-4'; // Compact gap for Theme 1
      case 'theme2':
        return 'gap-6'; // Standard gap for Theme 2
      case 'theme3':
        return 'gap-8'; // Larger gap for Theme 3
      default:
        return 'gap-6';
    }
  };

  return (
    <div className={`pt-20 min-h-screen ${theme.colors.background} ${theme.typography.fontFamily} ${theme.layout.transition} animate-fade-in`}>
      <div className={`${theme.layout.maxWidth} mx-auto ${theme.spacing.lg}`}>
        <h1 className={`${theme.typography.fontSize.xlarge} ${theme.typography.fontWeight.bold} ${theme.colors.text} mb-6 text-center ${getTitleAnimation()}`}>
          {currentTheme === 'theme1' && 'Welcome to Our Store'}
          {currentTheme === 'theme2' && 'Product Catalog'}
          {currentTheme === 'theme3' && '🎉 Amazing Products 🎉'}
        </h1>
        
        <p className={`${theme.typography.fontSize.medium} ${theme.colors.textSecondary} mb-8 text-center leading-relaxed animate-slide-up ${currentTheme === 'theme1' ? 'theme-1-text-animation' : ''}`} style={{ animationDelay: '0.2s' }}>
          {currentTheme === 'theme1' && 'Discover our collection of high-quality products with minimalist design and excellent value.'}
          {currentTheme === 'theme2' && 'Explore our comprehensive catalog featuring premium items across various categories.'}
          {currentTheme === 'theme3' && 'Get ready to be amazed by our colorful collection of fantastic products! 🌈✨'}
        </p>

        <button className={`${theme.colors.accent} ${theme.colors.surface} border-none ${theme.layout.borderRadius} px-6 py-3 ${theme.typography.fontSize.medium} ${theme.typography.fontWeight.bold} cursor-pointer ${theme.layout.transition} block mx-auto mb-8 hover:scale-105 hover:shadow-lg animate-bounce-in`} style={{ animationDelay: '0.4s' }}>
          {currentTheme === 'theme1' && 'Explore Products'}
          {currentTheme === 'theme2' && 'Browse Catalog'}
          {currentTheme === 'theme3' && '🎯 Start Shopping!'}
        </button>

        <div className={`${
          currentTheme === 'theme2' ? 'grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6' : 'block'
        }`}>
          {currentTheme === 'theme2' && (
            <aside className={`${theme.colors.surface} ${theme.spacing.lg} ${theme.colors.border} border-r animate-slide-up`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.text} mb-4`}>
                Categories
              </h3>
              {categories.map((category, index) => (
                <div
                  key={category}
                  className={`${theme.spacing.sm} mb-2 ${theme.layout.borderRadius} ${theme.colors.background} ${theme.colors.text} cursor-pointer ${theme.layout.transition} hover:bg-gray-200 dark:hover:bg-gray-600 hover:translate-x-2 transform duration-300`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {category}
                </div>
              ))}
            </aside>
          )}

          <main>
            {loading && (
              <div className={`text-center ${theme.typography.fontSize.large} ${theme.colors.textSecondary} ${theme.spacing.xl} animate-pulse-slow`}>
                <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full spinner"></div>
                <p className="mt-4">Loading products...</p>
              </div>
            )}
            
            {error && (
              <div className={`text-center ${theme.typography.fontSize.medium} text-red-500 ${theme.spacing.lg} bg-red-50 ${theme.layout.borderRadius} border border-red-200 animate-bounce-in`}>
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