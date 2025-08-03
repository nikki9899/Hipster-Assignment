import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Product } from '../services/api';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { theme, currentTheme } = useTheme();

  return (
    <div 
      className={`${theme.colors.surface} ${theme.colors.border} border ${theme.layout.borderRadius} ${theme.spacing.md} ${theme.shadow} cursor-pointer ${theme.layout.transition} ${
        currentTheme === 'theme2' ? 'flex flex-row gap-4 min-h-[120px] hover-lift' : 
        currentTheme === 'theme3' ? 'flex flex-col gap-3 theme-3-card' : 
        'flex flex-col gap-3 hover-lift'
      } animate-slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img
        src={product.image}
        alt={product.title}
        className={`${
          currentTheme === 'theme2' ? 'w-20 h-20' : 'w-full h-48'
        } object-cover ${theme.layout.borderRadius} ${theme.colors.border} border ${theme.layout.transition} hover:scale-105 transform duration-500`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
        }}
      />
      
      <div className="flex-1 flex flex-col gap-2">
        <h3 className={`${theme.typography.fontSize.medium} ${theme.typography.fontWeight.bold} ${theme.colors.text} m-0 leading-tight ${theme.layout.transition} hover:${theme.colors.accent} transform duration-300`}>
          {product.title}
        </h3>
        
        <p className={`${theme.typography.fontSize.small} ${theme.colors.textSecondary} m-0 leading-relaxed ${
          currentTheme === 'theme2' ? 'hidden' : 'block'
        }`}>
          {product.description}
        </p>
        
        <div className={`${theme.typography.fontSize.small} ${theme.colors.textSecondary} flex items-center gap-2`}>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </div>
        
        <div className={`${theme.typography.fontSize.large} ${theme.typography.fontWeight.bold} ${theme.colors.accent} m-0 ${theme.layout.transition} hover:scale-105 transform duration-300`}>
          ${product.price}
        </div>
        
        <span className={`${theme.typography.fontSize.small} ${theme.colors.primary} ${theme.colors.background} px-3 py-1 ${theme.layout.borderRadius} inline-block mt-auto ${theme.layout.transition} hover:scale-105 transform duration-300`}>
          {product.category}
        </span>
      </div>
    </div>
  );
};

export default ProductCard; 