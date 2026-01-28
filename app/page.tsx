'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import LanIcon from '@mui/icons-material/Lan';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
  {
    title: 'IT Consulting & Architecture',
    description: 'Design future-ready IT landscapes, from solution architecture to technology roadmaps.',
    icon: <LanIcon fontSize="large" />,
  },
  {
    title: 'Custom Software Development',
    description: 'Enterprise-grade web and mobile applications tailored to your business workflows.',
    icon: <CodeIcon fontSize="large" />,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud migration, CI/CD pipelines, and infrastructure automation on AWS, Azure, and GCP.',
    icon: <CloudIcon fontSize="large" />,
  },
  {
    title: 'Managed IT Services',
    description: 'End-to-end monitoring, management, and optimization of your IT operations.',
    icon: <SupportAgentIcon fontSize="large" />,
  },
  {
    title: 'Data, Analytics & Automation',
    description: 'Data engineering, dashboards, and workflow automation to power better decisions.',
    icon: <StorageIcon fontSize="large" />,
  },
  {
    title: 'UI/UX & Product Design',
    description: 'Human‑centered digital experiences that feel modern, fast, and intuitive.',
    icon: <DesignServicesIcon fontSize="large" />,
  },
  {
    title: 'Quality Engineering & Testing',
    description: 'Automation, performance, and security testing to keep your systems reliable.',
    icon: <SecurityIcon fontSize="large" />,
  },
  {
    title: 'Digital Transformation',
    description: 'Re‑imagine processes, platforms, and products with a technology‑first approach.',
    icon: <AutoFixHighIcon fontSize="large" />,
  },
];

export default function LaunchingSoonPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top left, rgba(76, 201, 240, 0.18), transparent 55%), radial-gradient(circle at top right, rgba(94, 92, 255, 0.2), transparent 55%), linear-gradient(135deg, #050816 0%, #020716 55%, #020617 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Stack spacing={{ xs: 2.5, md: 3 }}>
                <Chip
                  label="DVANTA INFOTECH"
                  color="secondary"
                  sx={{
                    alignSelf: 'flex-start',
                    fontWeight: 600,
                    letterSpacing: 1,
                    fontFamily: 'var(--font-inter)',
                  }}
                />

                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2rem', sm: '2.4rem', md: '3rem' },
                      lineHeight: 1.1,
                      mb: { xs: 1, md: 1.5 },
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    Enterprise IT Services
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1.9rem', sm: '2.2rem', md: '2.7rem' },
                      lineHeight: 1.1,
                      background:
                        'linear-gradient(90deg, #4cc9f0 0%, #00f5d4 25%, #f72585 60%, #7209b7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    Launching Soon.
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: 520,
                    opacity: 0.9,
                    fontSize: { xs: '0.95rem', md: '1.02rem' },
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  We&apos;re building a new-age IT services studio that partners with product companies,
                  startups, and enterprises to design, build, and run mission‑critical digital platforms.
                </Typography>

                <Stack direction="row" spacing={3} flexWrap="wrap" sx={{ mt: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{ opacity: 0.75, fontFamily: 'var(--font-inter)' }}
                  >
                    Architecture‑first approach
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ opacity: 0.75, fontFamily: 'var(--font-inter)' }}
                  >
                    Long‑term engineering partnerships
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ opacity: 0.75, fontFamily: 'var(--font-inter)' }}
                  >
                    India‑based, global delivery
                  </Typography>
                </Stack>
              </Stack>
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.15}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  p: { xs: 2.2, md: 3 },
                  background:
                    'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.8))',
                  boxShadow:
                    '0 24px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(148, 163, 184, 0.25)',
                  overflow: 'hidden',
                  height: { xs: 'auto', md: '100%' },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -80,
                    background:
                      'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 60%), radial-gradient(circle at bottom right, rgba(244,114,182,0.18), transparent 55%)',
                    opacity: 0.9,
                    pointerEvents: 'none',
                  }}
                />

                <Grid container spacing={2.2} sx={{ position: 'relative', zIndex: 1 }}>
                  {services.map((service) => (
                    <Grid key={service.title} item xs={12} sm={6}>
                      <Card
                        sx={{
                          height: '100%',
                          background:
                            'linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.8))',
                          borderRadius: 3,
                          border: '1px solid rgba(148,163,184,0.35)',
                          boxShadow: '0 14px 30px rgba(15,23,42,0.85)',
                          transition:
                            'transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out, background 0.25s ease-out',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 22px 45px rgba(15,23,42,0.95)',
                            borderColor: 'rgba(56,189,248,0.9)',
                            background:
                              'linear-gradient(145deg, rgba(15,23,42,1), rgba(30,64,175,0.9))',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 2.4 }}>
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: 999,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 1.5,
                              background:
                                'radial-gradient(circle at 30% 30%, #4cc9f0, #3b82f6)',
                              color: '#0b1220',
                            }}
                          >
                            {service.icon}
                          </Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 0.6,
                              fontFamily: 'var(--font-poppins)',
                            }}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              opacity: 0.85,
                              fontSize: '0.85rem',
                              fontFamily: 'var(--font-inter)',
                            }}
                          >
                            {service.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  sx={{
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1.2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.8,
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    Want to explore a partnership or project idea?
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: '#4cc9f0',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    Email us at <span style={{ fontWeight: 700 }}>info@dvanta.com</span>
                  </Typography>
                </Box>
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


