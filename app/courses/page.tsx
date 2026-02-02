'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CourseCard from '@/components/CourseCard/CourseCard';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Industry-Focused IT Programs
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                fontWeight: 400,
                opacity: 0.95,
              }}
            >
              Learn directly from an architect with 15+ years of experience.
              Our courses are designed to build confidence, thinking ability,
              and real production-level skills.
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Our Professional Courses
          </Typography>
          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <CourseCard course={course} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}



