'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Learn with an Architect.
            <br />
            Build Industry-Ready Confidence.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              maxWidth: '850px',
              mx: 'auto',
              mb: 2,
              fontWeight: 400,
              opacity: 0.95,
              lineHeight: 1.8,
            }}
          >
            Get trained directly by a software architect with
            <Box component="strong" sx={{ fontWeight: 600 }}>
              {' '}15+ years of real IT industry experience
            </Box>
            . Learn how enterprise applications are designed, built,
            reviewed, optimized, and delivered in production.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 4,
              opacity: 0.9,
            }}
          >
            Not just coding —{' '}
            <Box component="strong" sx={{ fontWeight: 600 }}>
              architecture, mindset, best practices & real projects
            </Box>
            .
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Link href="/courses" passHref legacyBehavior>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component="a"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  Start Your IT Journey
                </Button>
              </motion.div>
            </Link>
            <Link href="/roadmap" passHref legacyBehavior>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component="a"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  View Roadmap
                </Button>
              </motion.div>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;

