'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import StatCard from '../StatCard/StatCard';

const WhySection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f0f4f8', position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 3,
                fontWeight: 700,
                color: 'primary.main',
                fontFamily: 'var(--font-poppins)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                position: 'relative',
                display: 'inline-block',
                width: '100%',
              }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ display: 'inline-block' }}
              >
                Why DVANTA IT Academy?
              </motion.span>
            </Typography>
          </motion.div>

          <motion.div variants={textVariants}>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 8,
                maxWidth: '900px',
                mx: 'auto',
                color: 'text.secondary',
                fontWeight: 400,
                fontFamily: 'var(--font-inter)',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.8,
              }}
            >
              We focus on skill-based learning, not just theory.
              <br />
              Our programs are designed to bridge the gap between
              college education and IT industry expectations.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <StatCard value="100+" label="Students Trained" index={0} />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <StatCard value="15+" label="Live Projects" index={1} />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <StatCard value="1:1" label="Mentorship" index={2} />
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Box
              sx={{
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
                    fontSize: { xs: '2rem', md: '2.5rem' },
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
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '800px',
                    mx: 'auto',
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
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhySection;


