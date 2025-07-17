# CopMap

A modern, responsive multi-page website built with React and Vite, featuring smooth animations, comprehensive SEO optimization, and production-ready deployment configuration.

## 🚀 Features

- **Multi-page Architecture**: Clean separation of concerns with dedicated pages
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Complete SEO implementation with meta tags, structured data, and sitemaps
- **Component-based**: Modular and maintainable code structure
- **Production Ready**: Optimized build configuration and deployment files

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components
│   │   ├── Layout.jsx    # Main layout wrapper
│   │   ├── Navigation.jsx # Navigation bar
│   │   └── Footer.jsx    # Footer component
│   ├── sections/         # Page section components
│   │   ├── Hero.jsx      # Homepage hero section
│   │   ├── Product.jsx   # Product information
│   │   ├── Features.jsx  # Features showcase
│   │   ├── About.jsx     # About section
│   │   ├── Contact.jsx   # Contact form
│   │   └── Legal.jsx     # Legal information
│   └── common/           # Reusable components
│       └── PageHeader.jsx # Consistent page headers
├── pages/                # Page components
│   ├── HomePage.jsx      # Home page (/)
│   ├── ProductPage.jsx   # Product page (/product)
│   ├── FeaturesPage.jsx  # Features page (/features)
│   ├── AboutPage.jsx     # About page (/about)
│   ├── ContactPage.jsx   # Contact page (/contact)
│   └── LegalPage.jsx     # Legal page (/legal)
├── assets/               # Static assets
├── App.jsx              # Main app with routing
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **React Helmet Async** - SEO and meta tag management
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Contact form functionality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd copmap-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:analyze` - Build with bundle analysis
- `npm run preview` - Preview production build
- `npm run serve` - Serve production build locally
- `npm run lint` - Run ESLint (if configured)

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with call-to-action
- Introduction to CopMap
- Key value propositions

### 📱 Product Page (`/product`)
- Detailed product information
- Feature highlights
- Product demonstrations

### ⚡ Features Page (`/features`)
- Comprehensive feature list
- Solutions overview
- Technical capabilities

### 👥 About Page (`/about`)
- Company information
- Mission and vision
- Team details

### 📞 Contact Page (`/contact`)
- Contact form
- Company contact information
- Location details

### ⚖️ Legal Page (`/legal`)
- Terms of Service
- Privacy Policy
- Security information

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`from-blue-600 to-purple-600`)
- **Secondary**: Purple gradient (`from-purple-600 to-pink-600`)
- **Background**: Dark theme with gradient overlays
- **Text**: White and gray variations

### Typography
- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Clean, readable font sizes
- **Code**: Monospace font for technical content

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Semi-transparent backgrounds with blur effects
- **Forms**: Clean input styling with focus states
- **Navigation**: Sticky header with active state indicators

## 🔧 Customization

### Adding New Pages

1. **Create page component** in `src/pages/`
2. **Add route** in `src/App.jsx`
3. **Update navigation** in `src/components/layout/Navigation.jsx`

### Modifying Existing Sections

1. **Locate component** in `src/components/sections/`
2. **Edit content and styling**
3. **Test responsiveness**

### Styling Changes

- **Global styles**: Edit `src/index.css`
- **Component styles**: Use Tailwind classes
- **Custom animations**: Modify Framer Motion configurations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimization

- **Code Splitting**: Components are organized for optimal bundling
- **Lazy Loading**: Images and components load as needed
- **Optimized Assets**: Compressed images and efficient CSS
- **Fast Routing**: Client-side navigation with React Router
- **Bundle Optimization**: Vendor chunks and tree shaking
- **Minification**: Terser optimization for production builds

## 🔍 SEO Optimization

### Meta Tags & Open Graph
- Comprehensive meta tags for all pages
- Open Graph and Twitter Card support
- Dynamic SEO component for easy management

### Structured Data
- Organization schema markup
- Software application schema
- FAQ schema for better search results
- Local business information

### Technical SEO
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs for all pages
- Web manifest for PWA features
- Proper heading hierarchy

### Performance SEO
- Optimized images and assets
- Minified CSS and JavaScript
- Gzip compression support
- Browser caching headers
## 🔒 Security Features

- **Input Validation**: Form inputs are properly validated
- **XSS Protection**: React's built-in XSS protection
- **Secure Headers**: Proper HTTP headers configuration
- **HTTPS Ready**: Prepared for secure deployment

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify (Recommended)
1. **Connect Repository**: Link your GitHub/GitLab repository to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables**: Set any required environment variables
4. **Deploy**: Automatic deployment on push to main branch
5. **Custom Domain**: Configure your custom domain (copmap.in)

### Deploy to Vercel
1. **Install Vercel CLI**: `npm i -g vercel`
2. **Deploy**: Run `vercel` in project directory
3. **Configure**: Follow prompts for domain and settings
4. **Environment**: Set environment variables in Vercel dashboard

### Deploy to Apache/Nginx
1. **Build**: Run `npm run build`
2. **Upload**: Upload `dist` folder contents to web server
3. **Configure**: Use provided `.htaccess` for Apache or configure Nginx
4. **SSL**: Ensure HTTPS is configured for production

### Production Checklist
- [ ] Update all URLs from localhost to production domain
- [ ] Configure environment variables
- [ ] Set up SSL certificate
- [ ] Configure CDN (optional)
- [ ] Set up monitoring and analytics
- [ ] Test all forms and functionality
- [ ] Verify SEO meta tags and structured data
- [ ] Submit sitemap to Google Search Console


## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Commit changes**: `git commit -am 'Add new feature'`
4. **Push to branch**: `git push origin feature/new-feature`
5. **Submit pull request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: support@copmap.com
- **Website**: [copmap.com](https://copmap.com)
- **Documentation**: Check the `/docs` folder for detailed guides

## 🔄 Changelog

### Version 2.0.0
- ✅ Converted to multi-page architecture
- ✅ Added proper folder structure
- ✅ Implemented React Router
- ✅ Enhanced component organization
- ✅ Improved maintainability

### Version 1.0.0
- ✅ Initial single-page website
- ✅ Basic React setup
- ✅ Responsive design
- ✅ Animation integration

---

**Built with ❤️ by the CopMap Team**
