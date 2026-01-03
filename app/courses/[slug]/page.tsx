'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { courses } from '@/data/courses';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'next/navigation';

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <>
        <Header />
        <Container sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4">Course not found</Typography>
          <Link href="/courses" passHref legacyBehavior>
            <Button component="a" variant="contained" sx={{ mt: 2 }}>
              Back to Courses
            </Button>
          </Link>
        </Container>
        <Footer />
      </>
    );
  }

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
            <Link href="/courses" passHref legacyBehavior>
              <Button
                component="a"
                startIcon={<ArrowBackIcon />}
                sx={{ color: 'white', mb: 2 }}
              >
                Back to Courses
              </Button>
            </Link>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              {course.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
              <Chip label={course.duration} color="secondary" sx={{ fontWeight: 600 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.95, maxWidth: '800px' }}>
              {course.description}
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          {course.modules && course.modules.length > 0 && (
            <AnimatedSection>
              <Typography variant="h3" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                Course Modules
              </Typography>
              <Grid container spacing={3}>
                {course.modules.map((module, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                          {module}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.2}>
            <Box
              sx={{
                mt: 6,
                p: 4,
                backgroundColor: '#eef4fa',
                borderRadius: 3,
                borderLeft: '5px solid',
                borderColor: 'secondary.main',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Outcome
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400, color: 'text.primary' }}>
                {course.outcome}
              </Typography>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  component="a"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ px: 6, py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
                >
                  Enroll Now
                </Button>
              </Link>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

