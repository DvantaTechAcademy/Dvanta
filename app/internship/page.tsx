'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import TimelineCard from '@/components/Timeline/TimelineCard';
import { internshipPhases, dailyActivities, internshipCompletion } from '@/data/internship';
import { motion } from 'framer-motion';

export default function InternshipPage() {
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
              Industry Internship & IT Training Program
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 600,
                fontFamily: 'var(--font-poppins)',
              }}
            >
              Duration: 6 Months | Mode: Hands-on, Project Driven
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
              This internship program is designed to transform a student into an industry-ready junior software developer by
              providing real-world project exposure, professional practices, and mentor-led guidance.
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper', position: 'relative' }}>
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
              Program Phases
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {internshipPhases.map((phase, index) => (
              <Grid item xs={12} key={phase.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card
                    sx={{
                      mb: 4,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
                      border: '1px solid rgba(11, 45, 77, 0.1)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(11, 45, 77, 0.15)',
                        borderColor: 'rgba(255, 107, 0, 0.3)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #ff6b00 0%, #ff8c33 100%)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                        <Box>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 600,
                              color: 'primary.main',
                              mb: 1,
                              fontFamily: 'var(--font-poppins)',
                            }}
                          >
                            Phase {phase.id}: {phase.title}
                          </Typography>
                          <Chip
                            label={phase.duration}
                            sx={{
                              backgroundColor: '#ff6b00',
                              color: '#fff',
                              fontWeight: 600,
                              fontFamily: 'var(--font-poppins)',
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          fontWeight: 400,
                          color: 'text.secondary',
                          fontFamily: 'var(--font-inter)',
                          lineHeight: 1.7,
                        }}
                      >
                        {phase.description}
                      </Typography>

                      {phase.activities && phase.activities.length > 0 && (
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 2,
                              fontWeight: 600,
                              color: 'primary.main',
                              fontFamily: 'var(--font-poppins)',
                            }}
                          >
                            Activities:
                          </Typography>
                          <Grid container spacing={2}>
                            {phase.activities.map((activity, idx) => (
                              <Grid item xs={12} sm={6} key={idx}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                  <CheckCircleIcon
                                    sx={{
                                      color: '#ff6b00',
                                      fontSize: 22,
                                      mt: 0.2,
                                      flexShrink: 0,
                                    }}
                                  />
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      fontFamily: 'var(--font-inter)',
                                      lineHeight: 1.7,
                                    }}
                                  >
                                    {activity}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      )}

                      <Box
                        sx={{
                          p: 3,
                          background: 'linear-gradient(135deg, #eef4fa 0%, #f8fbff 100%)',
                          borderRadius: 2,
                          borderLeft: '4px solid #ff6b00',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            color: 'primary.main',
                            fontFamily: 'var(--font-poppins)',
                          }}
                        >
                          Deliverables:
                        </Typography>
                        <Grid container spacing={1.5}>
                          {phase.deliverables.map((deliverable, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                <Typography
                                  sx={{
                                    color: '#ff6b00',
                                    fontWeight: 700,
                                    fontSize: '1.2rem',
                                    lineHeight: 1.5,
                                  }}
                                >
                                  •
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontFamily: 'var(--font-inter)',
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {deliverable}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <AnimatedSection delay={0.6}>
            <Card
              sx={{
                mb: 4,
                background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)',
                border: '1px solid rgba(11, 45, 77, 0.1)',
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'primary.main',
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  Daily Internship Activities
                </Typography>
                <Grid container spacing={2.5}>
                  {dailyActivities.map((activity, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 2,
                          borderRadius: 2,
                          background: '#fff',
                          border: '1px solid rgba(11, 45, 77, 0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: 'rgba(255, 107, 0, 0.3)',
                            transform: 'translateX(4px)',
                            boxShadow: '0 4px 12px rgba(11, 45, 77, 0.08)',
                          },
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: '#ff6b00',
                            fontSize: 22,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 500,
                          }}
                        >
                          {activity}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                background: 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
                borderRadius: 4,
                color: 'white',
                textAlign: 'center',
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
                  Internship Completion
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    opacity: 0.95,
                    fontFamily: 'var(--font-inter)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Upon successful completion, interns receive:
                </Typography>
                <Grid container spacing={3} sx={{ mb: 3 }}>
                  {internshipCompletion.certificates.map((cert, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Box
                          sx={{
                            p: 3,
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 2,
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.15)',
                              borderColor: 'rgba(255, 107, 0, 0.5)',
                            },
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              fontFamily: 'var(--font-poppins)',
                            }}
                          >
                            {cert}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    opacity: 0.95,
                    fontFamily: 'var(--font-inter)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Plus: {internshipCompletion.support}
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
