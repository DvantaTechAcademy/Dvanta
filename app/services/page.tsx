'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import LanIcon from '@mui/icons-material/Lan';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and requirements. We build scalable, maintainable applications using modern technologies.',
    icon: <CodeIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to modernize your business operations. AWS, Azure, and GCP expertise.',
    icon: <CloudIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #4FC3F7 0%, #81D4FA 100%)',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices. From concept to deployment, we deliver exceptional mobile experiences.',
    icon: <MobileScreenShareIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
  },
  {
    title: 'IT Consulting & Architecture',
    description: 'Strategic IT consulting and architecture design to help you make the right technology decisions. Architecture-first approach for long-term success.',
    icon: <LanIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #4FC3F7 0%, #0b2d4d 100%)',
  },
  {
    title: 'Data, Analytics & Automation',
    description: 'Data engineering, dashboards, and workflow automation to power better decisions. Transform raw data into actionable insights.',
    icon: <AnalyticsIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
  },
  {
    title: 'UI/UX & Product Design',
    description: 'Human‑centered digital experiences that feel modern, fast, and intuitive. We design products that users love and businesses trust.',
    icon: <DesignServicesIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)',
  },
  {
    title: 'Quality Engineering & Testing',
    description: 'Automation, performance, and security testing to keep your systems reliable. Comprehensive QA services for flawless delivery.',
    icon: <SecurityIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #4FC3F7 0%, #0b2d4d 100%)',
  },
  {
    title: 'Digital Transformation',
    description: 'Re‑imagine processes, platforms, and products with a technology‑first approach. Drive innovation and competitive advantage.',
    icon: <AutoFixHighIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #FF9800 0%, #F44336 100%)',
  },
  {
    title: 'Managed IT Services',
    description: 'End-to-end monitoring, management, and optimization of your IT operations. 24/7 support to keep your systems running smoothly.',
    icon: <SupportAgentIcon fontSize="large" />,
    color: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', md: '60vh' },
          minHeight: '400px',
          maxHeight: '600px',
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80")',
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
            background: 'linear-gradient(180deg, rgba(11, 45, 77, 0.75) 0%, rgba(11, 45, 77, 0.65) 50%, rgba(11, 45, 77, 0.8) 100%)',
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

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                mb: 2,
                color: '#ffffff',
                fontFamily: 'var(--font-poppins)',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Our Services
            </Typography>
            <Box
              sx={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(135deg, #ffffff 0%, #4FC3F7 100%)',
                mx: 'auto',
                mb: 3,
                borderRadius: '2px',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: '#ffffff',
                maxWidth: '700px',
                mx: 'auto',
                fontFamily: 'var(--font-inter)',
                opacity: 0.95,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Comprehensive IT solutions tailored to your business needs
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(245, 245, 245, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(11, 45, 77, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(79, 195, 247, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(79, 195, 247, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 32px rgba(79, 195, 247, 0.2)',
                        borderColor: 'rgba(79, 195, 247, 0.3)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '12px',
                          background: service.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          color: 'white',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1) rotate(5deg)',
                          },
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1.5,
                          color: '#1a1a1a',
                          fontFamily: 'var(--font-poppins)',
                          '&:hover': {
                            color: '#4FC3F7',
                          },
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          lineHeight: 1.7,
                          fontFamily: 'var(--font-inter)',
                          flexGrow: 1,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: '64px', textAlign: 'center' }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
                borderRadius: '24px',
                p: { xs: 4, md: 6 },
                color: 'white',
                boxShadow: '0 12px 32px rgba(79, 195, 247, 0.3)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  mb: 4,
                  opacity: 0.95,
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Let&apos;s discuss how we can help you achieve your goals
              </Typography>
              <Link href="/contact" passHref legacyBehavior>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    component="a"
                    variant="contained"
                    size="large"
                    startIcon={<RocketLaunchIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      background: 'white',
                      color: '#4FC3F7',
                      textTransform: 'none',
                      fontFamily: 'var(--font-poppins)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Start Your Project Today
                  </Button>
                </motion.div>
              </Link>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

