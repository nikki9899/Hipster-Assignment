# Multi-Theme Switcher App

A React-based web application with a dynamic theme switcher that allows users to select from three distinct themes. Each theme changes not only colors but also layout, fonts, spacing, and overall structure.

## Features

### 🎨 Three Distinct Themes
- **Theme 1 (Minimalist)**: Clean, light design with simple sans-serif fonts
- **Theme 2 (Dark Sidebar)**: Dark mode with sidebar layout and bold serif fonts
- **Theme 3 (Colorful Playful)**: Vibrant colors with card-based grid layout and playful Google Fonts

### 🔧 Core Functionality
- **Theme Persistence**: Themes are saved in localStorage and persist across page reloads
- **Context API**: Uses React Context for efficient theme management
- **API Integration**: Fetches product data from [Fake Store API](https://fakestoreapi.com/products)
- **Responsive Design**: Fully responsive across all devices
- **React Router**: Multi-page navigation (Home, About, Contact)
- **TypeScript**: Full TypeScript support for type safety
- **Security**: Implements security headers and best practices
- **Animations**: Smooth transitions when switching themes

### 📱 Responsive Design
- Desktop, tablet, and mobile optimized
- Adaptive layouts for each theme
- Touch-friendly interface

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme-switcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx     # Header with theme switcher
│   └── ProductCard.tsx # Product display component
├── context/            # React Context
│   └── ThemeContext.tsx # Theme management
├── pages/              # Page components
│   ├── Home.tsx       # Home page with products
│   ├── About.tsx      # About page
│   └── Contact.tsx    # Contact page
├── services/           # API services
│   └── api.ts         # Fake Store API integration
├── themes/             # Theme definitions
│   └── themes.ts      # Theme configurations
├── types/              # TypeScript types
│   └── theme.ts       # Theme type definitions
├── App.tsx            # Main app component
├── index.tsx          # App entry point
└── index.css          # Global styles
```

## Theme System

### Theme 1: Minimalist
- **Colors**: Light background with subtle grays
- **Typography**: Clean sans-serif fonts
- **Layout**: Simple grid layout
- **Spacing**: Consistent, moderate spacing

### Theme 2: Dark Sidebar
- **Colors**: Dark background with purple accents
- **Typography**: Bold serif fonts
- **Layout**: Sidebar navigation layout
- **Spacing**: Generous spacing for readability

### Theme 3: Colorful Playful
- **Colors**: Vibrant, colorful palette
- **Typography**: Playful Google Font (Pacifico)
- **Layout**: Card-based grid with rounded corners
- **Spacing**: Dynamic, playful spacing

## Security Features

- Content Security Policy (CSP) headers
- XSS Protection headers
- X-Frame-Options for clickjacking protection
- Secure API calls with proper error handling
- Input validation and sanitization

## API Integration

The app integrates with the [Fake Store API](https://fakestoreapi.com/products) to display real product data:

- Fetches product listings
- Displays product images, prices, and descriptions
- Handles loading states and errors gracefully
- Implements proper error boundaries

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading of components
- Optimized images with fallbacks
- Efficient theme switching with CSS transitions
- Minimal bundle size
- Progressive Web App (PWA) ready

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: hr@hipster-inc.com
- Phone: +6582314107
- Address: #01-04, 75 Ayer Rajah Crescent, 139953, Singapore

---

**Hipster Pte. Ltd.** | UEN: 201621408D | www.hipster-inc.com 