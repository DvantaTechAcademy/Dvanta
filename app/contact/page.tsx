'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    try {
      // Web3Forms - Simple frontend email service
      // Get your free access key from: https://web3forms.com (takes 30 seconds)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'bfe85f65-1453-4353-9064-8603f2562ea7',
          subject: formData.subject || `Contact Form: ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          to: 'ankitpandey90095@gmail.com',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setAlert({ type: 'success', message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setAlert({ type: 'error', message: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setAlert({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0b2d4d 0%, #144d75 100%)',
          color: 'white',
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
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
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                opacity: 0.95,
                fontFamily: 'var(--font-inter)',
              }}
            >
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <AnimatedSection delay={0.2}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 4,
                      fontWeight: 700,
                      color: 'primary.main',
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    Get in Touch
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <Box
                      sx={{
                        backgroundColor: 'secondary.main',
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmailIcon sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontFamily: 'var(--font-poppins)' }}>
                        Email
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'var(--font-inter)' }}>
                        ankitpandey90095@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <Box
                      sx={{
                        backgroundColor: 'secondary.main',
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PhoneIcon sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontFamily: 'var(--font-poppins)' }}>
                        Phone
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'var(--font-inter)' }}>
                        +91 98765 43210
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        backgroundColor: 'secondary.main',
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LocationOnIcon sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontFamily: 'var(--font-poppins)' }}>
                        Location
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'var(--font-inter)' }}>
                        Indore, Madhya Pradesh, India
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </AnimatedSection>
            </Grid>

            <Grid item xs={12} md={8}>
              <AnimatedSection delay={0.3}>
                <Card sx={{ boxShadow: 4 }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        fontWeight: 700,
                        color: 'primary.main',
                        fontFamily: 'var(--font-poppins)',
                      }}
                    >
                      Send us a Message
                    </Typography>

                    {alert && (
                      <Alert
                        severity={alert.type}
                        onClose={() => setAlert(null)}
                        sx={{ mb: 3 }}
                      >
                        {alert.message}
                      </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-inter)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-inter)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Phone (Optional)"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-inter)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Subject (Optional)"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-inter)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={6}
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-inter)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="large"
                            disabled={loading}
                            sx={{
                              px: 4,
                              py: 1.5,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              fontFamily: 'var(--font-poppins)',
                            }}
                          >
                            {loading ? (
                              <>
                                <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                                Sending...
                              </>
                            ) : (
                              'Send Message'
                            )}
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
