'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import TimelineCard from '@/components/Timeline/TimelineCard';
import { roadmapPhases } from '@/data/roadmap';
import { motion } from 'framer-motion';

export default function RoadmapPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255, 107, 0, 0.1) 0%, transparent 50%)',
          }}
        />
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
              Roadmap to Get a Job in IT
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                fontWeight: 400,
                opacity: 0.95,
                fontFamily: 'var(--font-inter)',
              }}
            >
              From beginner to job-ready junior developer through structured phases.
              Learn from an Architect. Build real skills. Grow with confidence.
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fbff', position: 'relative' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                color: 'primary.main',
                fontFamily: 'var(--font-poppins)',
              }}
            >
              Your Journey to Success
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {roadmapPhases.map((phase, index) => (
              <Grid item xs={12} md={6} key={phase.id}>
                <TimelineCard
                  id={phase.id}
                  title={`Phase ${phase.id}: ${phase.title}`}
                  duration={phase.duration}
                  description={phase.description}
                  outcomes={phase.outcomes}
                  icon={phase.icon}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>

          <AnimatedSection delay={0.8}>
            <Box
              sx={{
                mt: 8,
                p: { xs: 4, md: 6 },
                background: 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
                borderRadius: 4,
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(11, 45, 77, 0.3)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at 30% 50%, rgba(255, 107, 0, 0.2) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    fontFamily: 'var(--font-poppins)',
                    position: 'relative',
                    zIndex: 1,
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
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  From beginner to confident junior developer in 9–12 months.
                  <br />
                  <Box component="span" sx={{ fontWeight: 600, color: '#ff6b00' }}>
                    Learn from an Architect. Build real skills. Grow with confidence.
                  </Box>
                </Typography>
              </motion.div>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
