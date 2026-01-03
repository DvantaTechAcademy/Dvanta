'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { roadmapPhases } from '@/data/roadmap';
import Link from 'next/link';
import Button from '@mui/material/Button';

const RoadmapSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);
  const phases = roadmapPhases.slice(0, 6);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8fbff' }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: 'var(--font-poppins)',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Student Learning Roadmap
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              maxWidth: '900px',
              mx: 'auto',
              color: 'text.secondary',
              fontWeight: 400,
              fontFamily: 'var(--font-inter)',
              px: { xs: 2, md: 0 },
            }}
          >
            Our roadmap is designed to convert beginners into confident,
            industry-ready junior developers through structured phases.
          </Typography>
        </motion.div>

        {/* Horizontal Scrollable Roadmap */}
        <Box
          sx={{
            position: 'relative',
            mb: 6,
            overflowX: 'auto',
            overflowY: 'visible',
            pb: 4,
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#ff6b00',
              borderRadius: '10px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2, sm: 3, md: 4 },
              minWidth: 'max-content',
              px: { xs: 2, md: 0 },
              position: 'relative',
            }}
          >
            {/* Connecting Line */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '40px', md: '50px' },
                left: { xs: '60px', md: '80px' },
                right: { xs: '60px', md: '80px' },
                height: '3px',
                background: 'linear-gradient(to right, #ff6b00 0%, rgba(255, 107, 0, 0.3) 100%)',
                zIndex: 0,
                display: { xs: 'none', sm: 'block' },
              }}
            />

            {phases.map((phase, index) => {
              const isActive = activePhase === index;
              const isPast = index < activePhase;

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setActivePhase(index)}
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <Card
                    sx={{
                      minWidth: { xs: '280px', sm: '300px', md: '320px' },
                      maxWidth: { xs: '280px', sm: '300px', md: '320px' },
                      height: '100%',
                      border: isActive ? '2px solid #ff6b00' : '1px solid rgba(11, 45, 77, 0.1)',
                      borderRadius: 3,
                      backgroundColor: 'white',
                      boxShadow: isActive
                        ? '0 8px 24px rgba(255, 107, 0, 0.2)'
                        : '0 2px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                    }}
                  >
                    <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      {/* Icon and Duration */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box
                          sx={{
                            fontSize: { xs: '2.5rem', md: '3rem' },
                            lineHeight: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: { xs: '60px', md: '70px' },
                            height: { xs: '60px', md: '70px' },
                            borderRadius: '50%',
                            background: isActive
                              ? 'linear-gradient(135deg, #ff6b00 0%, #ff8c33 100%)'
                              : isPast
                              ? 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)'
                              : 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
                            color: 'white',
                            boxShadow: isActive ? '0 4px 12px rgba(255, 107, 0, 0.4)' : '0 2px 6px rgba(0, 0, 0, 0.2)',
                          }}
                        >
                          {phase.icon}
                        </Box>
                        <Chip
                          label={phase.duration}
                          size="small"
                          sx={{
                            backgroundColor: isActive ? '#ff6b00' : 'rgba(11, 45, 77, 0.1)',
                            color: isActive ? '#fff' : 'primary.main',
                            fontWeight: 600,
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '0.75rem',
                          }}
                        />
                      </Box>

                      {/* Phase Number */}
                      <Typography
                        variant="caption"
                        sx={{
                          color: isActive ? 'secondary.main' : isPast ? '#4caf50' : 'primary.main',
                          fontWeight: 700,
                          fontFamily: 'var(--font-poppins)',
                          mb: 1,
                          fontSize: '0.85rem',
                        }}
                      >
                        Phase {phase.id}
                      </Typography>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1.5,
                          color: 'primary.main',
                          fontFamily: 'var(--font-poppins)',
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {phase.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          fontFamily: 'var(--font-inter)',
                          fontSize: { xs: '0.875rem', md: '0.9rem' },
                          flexGrow: 1,
                        }}
                      >
                        {phase.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Box>

        {/* View Complete Roadmap Button */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Link href="/roadmap" passHref legacyBehavior>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component="a"
                sx={{
                  px: { xs: 4, md: 6 },
                  py: 1.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                View Complete Roadmap
              </Button>
            </motion.div>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default RoadmapSection;
