'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        maxHeight: '900px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(11, 45, 77, 0.7) 0%, rgba(11, 45, 77, 0.5) 50%, rgba(11, 45, 77, 0.75) 100%)',
          zIndex: 1,
        },
      }}
    >
      {/* Glassy overlay effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(11, 45, 77, 0.15)',
          backdropFilter: 'blur(1px)',
          zIndex: 2,
        }}
      />

      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 3,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 3, md: 4 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          style={{ 
            width: '100%', 
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.25rem', lg: '3.75rem', xl: '4.25rem' },
              fontWeight: 700,
              lineHeight: 1.1,
              fontFamily: 'var(--font-poppins)',
              letterSpacing: { xs: '0.02em', md: '0.04em' },
              whiteSpace: 'nowrap',
              mb: { xs: 1, md: 2 },
              textShadow: '0 4px 40px rgba(0, 0, 0, 0.6), 0 2px 15px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              display: 'inline-block',
              '@media (max-width: 900px)': {
                whiteSpace: 'normal',
                fontSize: '1.75rem',
                lineHeight: 1.2,
              },
            }}
          >
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 25%, #4FC3F7 50%, #ffffff 75%, #4FC3F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '300% 300%',
                display: 'inline-block',
                animation: 'gradientShift 4s ease-in-out infinite',
                '@keyframes gradientShift': {
                  '0%, 100%': {
                    backgroundPosition: '0% 50%',
                  },
                  '50%': {
                    backgroundPosition: '100% 50%',
                  },
                },
              }}
            >
              Innovate . Transform . Succeed
            </Box>
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
