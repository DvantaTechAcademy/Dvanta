# DVANTA IT Academy - Next.js Website

A beautiful, modern, and fully animated Next.js website for DVANTA IT Academy built with Material-UI, Framer Motion, and Swiper.

## Features

- 🎨 Modern Material-UI design system
- 🎭 Smooth animations with Framer Motion
- 🎠 Beautiful carousels with Swiper
- 📱 Fully responsive design
- 🚀 Next.js 14 with App Router
- ⚡ Optimized for performance
- 🎯 SEO-friendly structure
- 🔄 Smooth page transitions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** Material-UI (MUI) v5
- **Animations:** Framer Motion
- **Carousels:** Swiper
- **Icons:** Material Icons & React Icons
- **Typography:** Google Fonts (Poppins, Inter)
- **Language:** TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
dvanta_frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── courses/           # Courses pages
│   ├── roadmap/           # Roadmap page
│   ├── internship/        # Internship page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── CourseCard/
│   ├── CourseCarousel/
│   ├── StatCard/
│   ├── RoadmapSection/
│   └── AnimatedSection/
├── data/                  # Data files
│   ├── courses.ts
│   ├── roadmap.ts
│   └── internship.ts
├── theme/                 # MUI theme
│   └── theme.ts
└── public/                # Static assets
```

## Pages

- **Home** (`/`) - Hero section, courses carousel, roadmap preview, statistics
- **Courses** (`/courses`) - All courses listing
- **Course Detail** (`/courses/[slug]`) - Individual course details
- **Roadmap** (`/roadmap`) - Complete learning roadmap with phases
- **Internship** (`/internship`) - 6-month internship program details
- **About** (`/about`) - About the academy
- **Contact** (`/contact`) - Contact form and location map

## Customization

### Theme Colors

Edit `theme/theme.ts` to customize colors:

```typescript
primary: {
  main: '#0b2d4d',
  dark: '#0a2540',
  light: '#144d75',
}
secondary: {
  main: '#ff6b00',
}
```

### Course Data

Edit `data/courses.ts` to update course information.

### Roadmap Data

Edit `data/roadmap.ts` to update roadmap phases.

## License

© 2025 DVANTA IT Academy. All Rights Reserved.

