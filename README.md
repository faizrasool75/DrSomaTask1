# Tummy Tuck Malaysia - Dr. Soma Plastic Surgery Website

A pixel-perfect React JS recreation of a plastic surgery clinic website, built with modern web technologies.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Font Awesome 6** - Icon library
- **Google Fonts** - Inter & Playfair Display fonts

## 📁 Project Structure

```
tummy-tuck-website/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── HeroSection.jsx
│   │   ├── TrustSection.jsx
│   │   ├── IntroductionSection.jsx
│   │   ├── WhatIsSection.jsx
│   │   ├── WhyChangesSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── TypesSection.jsx
│   │   ├── CandidatesSection.jsx
│   │   ├── RecoveryTimelineSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── SafetyBannerSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── FinalCTASection.jsx
│   ├── App.jsx             # Main app component
│   ├── App.css            # App-specific styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── public/                # Static assets
├── index.html            # HTML template
└── package.json          # Dependencies

```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Install Dependencies

```bash
cd tummy-tuck-website
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or use the Vercel dashboard:
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## ✨ Features

- ✅ Pixel-perfect design recreation
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Interactive FAQ accordions
- ✅ Hover effects on cards and buttons
- ✅ Optimized images from Unsplash
- ✅ Font Awesome icons
- ✅ SEO-friendly structure
- ✅ Fast loading with Vite
- ✅ Clean, maintainable component structure

## 🎨 Design Specifications

- **Primary Color**: Orange Brand (#FF8C00)
- **Dark Color**: #1a1a1a
- **Typography**: 
  - Body: Inter (300, 400, 600, 700)
  - Headings: Playfair Display (700)
- **Responsive Breakpoints**: Tailwind CSS defaults (sm, md, lg, xl, 2xl)

## 📝 Component List

1. **HeroSection** - Full-screen hero with CTA buttons
2. **TrustSection** - Three trust badges with hover effects
3. **IntroductionSection** - Two-column intro with image
4. **WhatIsSection** - Three-card explanation section
5. **WhyChangesSection** - Split content with image background
6. **HowItWorksSection** - Surgical steps breakdown
7. **TypesSection** - Procedure types cards
8. **CandidatesSection** - Candidate criteria and comparison table
9. **RecoveryTimelineSection** - Timeline with dark background
10. **BenefitsSection** - Benefits list and recovery info
11. **SafetyBannerSection** - Safety certification banner
12. **FAQSection** - Interactive FAQ accordions
13. **FinalCTASection** - Final call-to-action with WhatsApp button

## 🔧 Customization

### Update Colors

Edit `src/index.css`:
```css
:root {
  --brand-orange: #FF8C00;
  --brand-dark: #1a1a1a;
}
```

### Update Content

Each component file contains its own content. Simply edit the JSX in the respective component file.

### Update Images

Replace Unsplash image URLs in component files with your own image URLs.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Fast initial load with Vite
- Optimized images via Unsplash CDN
- Minimal JavaScript bundle
- CSS delivered via Tailwind CDN

## 📄 License

This project is for portfolio/demonstration purposes.

## 🤝 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using React and Vite**
