# DVANTA IT Academy - Setup Guide

## ✅ Project Setup Complete!

Your Next.js application has been successfully created with all the features you requested.

## 🚀 Quick Start

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
dvanta_frontend/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with theme
│   ├── page.tsx             # Homepage
│   ├── courses/             # Courses pages
│   │   ├── page.tsx         # All courses listing
│   │   └── [slug]/          # Dynamic course detail pages
│   ├── roadmap/             # Learning roadmap page
│   ├── internship/          # Internship program page
│   ├── about/               # About page
│   └── contact/             # Contact page with form
├── components/              # Reusable React components
│   ├── Header/              # Navigation header
│   ├── Footer/              # Site footer
│   ├── Hero/                # Hero section
│   ├── CourseCard/          # Course card component
│   ├── CourseCarousel/      # Swiper carousel for courses
│   ├── StatCard/            # Animated statistics card
│   ├── RoadmapSection/      # Roadmap preview section
│   ├── AnimatedSection/     # Animation wrapper
│   └── ClientThemeProvider/ # MUI theme provider
├── data/                    # Data files
│   ├── courses.ts           # Course data
│   ├── roadmap.ts           # Roadmap phases data
│   └── internship.ts        # Internship program data
├── theme/                   # Material-UI theme
│   └── theme.ts             # Theme configuration
└── public/                  # Static assets
    └── logo.svg             # Sample logo (update with your logo)
```

## 🎨 Features Implemented

✅ **Material-UI Design System**
- Complete theme customization
- Professional color scheme
- Responsive typography

✅ **Animations & Effects**
- Framer Motion animations throughout
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on cards
- Counter animations for statistics

✅ **Carousels**
- Swiper carousel for courses on homepage
- Auto-play functionality
- Navigation arrows and pagination

✅ **Routing**
- Next.js App Router
- Dynamic routes for course details
- Clean URL structure

✅ **Pages**
- Homepage with hero, courses, roadmap, stats
- Courses listing page
- Individual course detail pages
- Complete roadmap page
- Internship program page
- About page
- Contact page with form and map

✅ **Components**
- Reusable Header with navigation
- Comprehensive Footer
- Animated sections
- Course cards with hover effects
- Statistics cards with counter animation

✅ **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Responsive navigation with mobile menu

## 🎯 Next Steps

1. **Update Logo**: Replace `public/logo.svg` with your actual logo
2. **Update Contact Info**: Edit contact details in:
   - `components/Footer/Footer.tsx`
   - `app/contact/page.tsx`
3. **Add Real Images**: Update course images in `data/courses.ts`
4. **Connect Contact Form**: Implement backend API for contact form submission
5. **Add SEO**: Update meta tags in `app/layout.tsx` and individual pages
6. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting platform

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Carousels**: Swiper
- **Icons**: Material Icons
- **Fonts**: Google Fonts (Poppins, Inter)
- **Language**: TypeScript

## 📝 Customization

### Colors
Edit `theme/theme.ts` to change the color scheme.

### Course Data
Edit `data/courses.ts` to update course information.

### Roadmap Data
Edit `data/roadmap.ts` to update roadmap phases.

### Internship Data
Edit `data/internship.ts` to update internship program details.

## ✨ Enjoy Your Beautiful Website!

Your website is now ready with all the animations, effects, and features you requested. Everything is production-ready and optimized for performance.

