'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function AboutPage() {
  const features = [
    {
      icon: <CodeIcon sx={{ fontSize: 60 }} />,
      title: 'Technical Excellence',
      description: 'We combine deep technical expertise with business acumen to deliver solutions that drive real value for your organization.',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 60 }} />,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions that transform your digital landscape.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 60 }} />,
      title: 'Partnership Approach',
      description: 'We build long-lasting relationships with our clients based on trust, transparency, and collaborative problem-solving.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 60 }} />,
      title: 'Quality Delivery',
      description: 'We deliver high-quality solutions that exceed expectations and drive measurable results for your business.',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 60 }} />,
      title: 'Enterprise Experience',
      description: 'From startups to enterprise-level organizations, we help businesses transform operations and achieve sustainable growth.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 60 }} />,
      title: 'Scalable Solutions',
      description: 'Our solutions are designed to scale with your business, ensuring long-term success and adaptability.',
    },
  ];

  const stats = [
    { number: '120+', label: 'Projects Delivered' },
    { number: '85+', label: 'Active Clients' },
    { number: '6+', label: 'Years Experience' },
    { number: '25+', label: 'Specialists' },
  ];

  return (
    <>
      <Header />
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 200, 83, 0.1) 0%, rgba(33, 150, 243, 0.1) 50%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
            zIndex: 0,
          },
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontFamily: 'var(--font-poppins)',
              }}
            >
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                About DVANTA Infotech
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                fontWeight: 400,
                color: '#666',
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontFamily: 'var(--font-inter)',
                lineHeight: 1.7,
              }}
            >
              We are a leading IT solutions provider dedicated to helping businesses thrive in the digital age.
              Our team combines technical expertise with business acumen to deliver innovative solutions that drive growth and success.
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
                fontFamily: 'var(--font-poppins)',
              }}
            >
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Why Choose DVANTA Infotech?
              </Box>
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                      border: '1px solid rgba(79, 195, 247, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(79, 195, 247, 0.2)',
                        borderColor: 'rgba(79, 195, 247, 0.3)',
                      },
                      }}
                    >
                      <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Box
                          sx={{
                            color: '#4FC3F7',
                            mb: 2,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            color: '#1a1a1a',
                            fontFamily: 'var(--font-poppins)',
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#666',
                            fontFamily: 'var(--font-inter)',
                            lineHeight: 1.7,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>

          {/* Stats Section */}
          <AnimatedSection delay={0.3}>
            <Box sx={{ mt: 10, mb: 8 }}>
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Box
                        sx={{
                          background: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
                          borderRadius: '16px',
                          p: 4,
                          textAlign: 'center',
                          color: 'white',
                          boxShadow: '0 8px 24px rgba(0, 200, 83, 0.3)',
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontFamily: 'var(--font-poppins)',
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            opacity: 0.95,
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.95rem',
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Box
              sx={{
                mt: 8,
                p: { xs: 4, md: 6 },
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                textAlign: 'center',
                border: '1px solid rgba(0, 200, 83, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 200, 83, 0.1)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                  background: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  color: '#666',
                  maxWidth: '800px',
                  mx: 'auto',
                  fontFamily: 'var(--font-inter)',
                  lineHeight: 1.7,
                }}
              >
                To empower businesses through innovative technology solutions. We focus on understanding your unique challenges
                and crafting tailored solutions that align with your business goals, driving sustainable growth and digital transformation.
              </Typography>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <Box
              sx={{
                mt: 6,
                p: { xs: 4, md: 6 },
                background: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
                borderRadius: '24px',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 12px 32px rgba(79, 195, 247, 0.3)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Our Promise
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  opacity: 0.95,
                  fontFamily: 'var(--font-inter)',
                  lineHeight: 1.7,
                }}
              >
                From concept to deployment, we partner with you every step of the way.
                <br />
                Innovate. Transform. Succeed.
              </Typography>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
