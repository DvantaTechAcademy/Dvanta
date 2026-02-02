'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0a0f14',
        color: '#ddd',
        pt: { xs: 6, md: 8 },
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #4FC3F7, transparent)',
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="DVANTA Infotech"
                sx={{
                  height: { xs: 50, md: 60 },
                  width: 'auto',
                  objectFit: 'contain',
                  maxWidth: { xs: 200, md: 250 },
                  mb: 2,
                }}
              />
              <Typography 
                variant="body2" 
                sx={{ 
                  lineHeight: 1.8, 
                  color: '#bbb',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.95rem',
                }}
              >
                DVANTA Infotech is your trusted IT partner delivering innovative solutions that drive growth and success. We combine technical expertise with business acumen to transform your digital landscape.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff', 
                  mb: 2.5, 
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {['Home', 'About', 'Services', 'Contact'].map((link) => (
                  <Link
                    key={link}
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    sx={{
                      color: '#bbb',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#4FC3F7',
                        transform: 'translateX(4px)',
                        '& .arrow-icon': {
                          opacity: 1,
                          transform: 'translateX(0)',
                        },
                      },
                    }}
                  >
                    <ArrowForward 
                      className="arrow-icon"
                      sx={{ 
                        fontSize: 14, 
                        opacity: 0,
                        transform: 'translateX(-8px)',
                        transition: 'all 0.3s ease',
                      }} 
                    />
                    {link}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff', 
                  mb: 2.5, 
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Our Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  'Custom Software Development',
                  'Cloud Solutions',
                  'Mobile App Development',
                  'IT Consulting & Architecture',
                  'Data Analytics & Automation',
                  'UI/UX & Product Design',
                ].map((service) => (
                  <Typography
                    key={service}
                    variant="body2"
                    sx={{
                      color: '#bbb',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#4FC3F7',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    • {service}
                  </Typography>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff', 
                  mb: 2.5, 
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <LocationOn 
                    sx={{ 
                      color: '#4FC3F7', 
                      fontSize: 22,
                      mt: 0.5,
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#bbb',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Indore, Madhya Pradesh
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Phone 
                    sx={{ 
                      color: '#4FC3F7', 
                      fontSize: 22,
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#bbb',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.95rem',
                    }}
                  >
                    +91 95605 33557
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Email 
                    sx={{ 
                      color: '#4FC3F7', 
                      fontSize: 22,
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#bbb',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.95rem',
                    }}
                  >
                    info@dvanta.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, mt: 1 }}>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/company/dvantatechacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#bbb',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      width: 40,
                      height: 40,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#fff',
                        backgroundColor: '#4FC3F7',
                        borderColor: '#4FC3F7',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(79, 195, 247, 0.3)',
                      },
                    }}
                  >
                    <LinkedIn fontSize="small" />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/dvantatech"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#bbb',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      width: 40,
                      height: 40,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#fff',
                        backgroundColor: '#4FC3F7',
                        borderColor: '#4FC3F7',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(79, 195, 247, 0.3)',
                      },
                    }}
                  >
                    <Instagram fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#888',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9rem',
            }}
          >
            © {new Date().getFullYear()} DVANTA Infotech. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
