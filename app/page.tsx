'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import CourseCarousel from '@/components/CourseCarousel/CourseCarousel';
import RoadmapSection from '@/components/RoadmapSection/RoadmapSection';
import WhySection from '@/components/WhySection/WhySection';
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CourseCarousel />
      <RoadmapSection />
      <WhySection />
      <ReviewsSection />

      <Footer />
    </>
  );
}

