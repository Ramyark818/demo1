# Ramya RK - Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations, dark/light mode, and optimized for Firebase Hosting deployment.

## 🌟 Features

### Design & User Experience
- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **Dark/Light Mode**: Seamless theme switching with user preference persistence
- **Purple & White Color Scheme**: Professional and visually appealing design
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern Typography**: Clean, readable Inter font family

### Sections & Functionality
- **Hero Section**: Animated introduction with call-to-action buttons
- **About Me**: Personal narrative with key milestones and achievements
- **Skills**: Interactive skill bars with categorized technical and soft skills
- **Projects**: Filterable project showcase with detailed modal views
- **Experience & Education**: Timeline-based presentation of professional journey
- **Contact**: Functional contact form with social media integration

### Technical Features
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Performance Optimized**: Efficient loading and smooth scrolling
- **Firebase Ready**: Configured for easy deployment on Firebase Hosting
- **Production Ready**: Optimized build process and error handling

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ramyark418/portfolio-website.git
   cd portfolio-website/portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Built With

- **Frontend Framework**: React.js
- **Animation Library**: Framer Motion
- **Icons**: React Icons
- **Styling**: CSS Custom Properties (CSS Variables)
- **Fonts**: Google Fonts (Inter)

## 📝 Customization

### Content Updates
Replace placeholder content with your actual information:

1. **Personal Information**: Update name, role, and contact details in components
2. **About Section**: Replace `[My Professional Summary from Resume]` with your story
3. **Skills**: Modify skill levels and add/remove technologies
4. **Projects**: Update project data with your actual projects
5. **Experience**: Add your work experience and education details

### Theme Customization
Modify CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #8B5CF6;    /* Main purple color */
  --secondary-color: #A78BFA;  /* Light purple */
  --accent-color: #7C3AED;     /* Dark purple */
  /* ... other colors */
}
```

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `src/App.js`
3. Add navigation link in `src/components/Navigation.js`

## 🚀 Deployment

### Firebase Hosting Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select existing project or create new one
   - Set public directory to `build`
   - Configure as single-page app: Yes
   - Don't overwrite build/index.html

4. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Alternative Deployment Options

**Netlify**
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

**Vercel**
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages**
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA attributes for screen readers
- Keyboard navigation support
- Color contrast compliance
- Focus indicators
- Reduced motion support

## 🔧 Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📊 Performance Optimization

- Lazy loading for sections
- Optimized images and assets
- Minimized bundle size
- Efficient re-rendering with React best practices

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Ramya RK**
- Email: ramyark418@gmail.com
- LinkedIn: [linkedin.com/in/ramyark418](https://linkedin.com/in/ramyark418)
- GitHub: [github.com/Ramyark418](https://github.com/Ramyark418)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- React community for excellent documentation
- Framer Motion for smooth animations
- Create React App for the initial setup

---

**Built with ❤️ using React.js and deployed on Firebase Hosting**
