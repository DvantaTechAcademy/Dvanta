'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function AboutPage() {
  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 60 }} />,
      title: 'Learn from an Architect',
      description: 'Get trained by a software architect with 15+ years of real IT industry experience. Learn enterprise-level thinking and best practices.',
    },
    {
      icon: <WorkIcon sx={{ fontSize: 60 }} />,
      title: 'Industry-First Approach',
      description: 'Our programs focus on production-oriented teaching. Learn how real enterprise applications are designed, built, and deployed.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 60 }} />,
      title: 'Live Projects & Internship',
      description: 'Work on real projects and gain internship experience. Build your portfolio with production-ready applications.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 60 }} />,
      title: 'Job Readiness & Support',
      description: 'Get interview preparation, mock interviews, resume building, and placement support. We guide you from beginner to job-ready.',
    },
  ];

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
              About DVANTA IT Academy
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
              An industry-driven training institute focused on architect-level thinking,
              real-world projects, and building confident, job-ready software professionals.
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                color: 'primary.main',
              }}
            >
              Why Choose DVANTA IT Academy?
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Box
              sx={{
                mt: 8,
                p: 6,
                backgroundColor: '#f8fbff',
                borderRadius: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Our Mission
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
                To bridge the gap between college education and IT industry expectations.
                We focus on skill-based learning, real-world projects, and architect-level mentorship
                to transform beginners into confident, industry-ready junior developers.
              </Typography>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Box
              sx={{
                mt: 6,
                p: 6,
                background: 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
                borderRadius: 4,
                textAlign: 'center',
                color: 'white',
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                Our Promise
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.95 }}>
                From beginner to confident junior developer in 9–12 months.
                <br />
                Learn from an Architect. Build real skills. Grow with confidence.
              </Typography>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

