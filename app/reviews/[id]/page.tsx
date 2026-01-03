'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Rating,
  Chip,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  Verified,
  LocationOn,
  Business,
  CalendarToday,
  School,
  ArrowBack,
} from '@mui/icons-material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { reviews } from '@/data/reviews';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

export default function ReviewDetailPage() {
  const params = useParams();
  const reviewId = params?.id as string;
  const review = reviews.find((r) => r.id === reviewId);

  if (!review) {
    return (
      <>
        <Header />
        <Container sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4">Review not found</Typography>
          <Link href="/reviews" passHref legacyBehavior>
            <Button component="a" variant="contained" sx={{ mt: 2 }}>
              Back to Reviews
            </Button>
          </Link>
        </Container>
        <Footer />
      </>
    );
  }

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
            <Link href="/reviews" passHref legacyBehavior>
              <Button
                component="a"
                startIcon={<ArrowBack />}
                sx={{ color: 'white', mb: 3 }}
              >
                Back to Reviews
              </Button>
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, flexWrap: 'wrap' }}>
              <Avatar
                sx={{
                  width: { xs: 100, md: 120 },
                  height: { xs: 100, md: 120 },
                  border: '4px solid #ff6b00',
                  boxShadow: '0 8px 24px rgba(255, 107, 0, 0.3)',
                  bgcolor: 'primary.main',
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                {review.studentName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontFamily: 'var(--font-poppins)',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {review.studentName}
                  </Typography>
                  {review.verified && (
                    <Chip
                      icon={<Verified />}
                      label="Verified Student"
                      sx={{
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        fontWeight: 600,
                      }}
                    />
                  )}
                  {review.featured && (
                    <Chip
                      label="Featured"
                      sx={{
                        backgroundColor: '#ff6b00',
                        color: '#fff',
                        fontWeight: 600,
                      }}
                    />
                  )}
                </Box>
                <Rating
                  value={review.rating}
                  readOnly
                  size="large"
                  sx={{
                    mb: 2,
                    '& .MuiRating-iconFilled': {
                      color: '#ff6b00',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn sx={{ fontSize: 20 }} />
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      {review.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Business sx={{ fontSize: 20 }} />
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      {review.position} at {review.company}, {review.companyLocation}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <School sx={{ fontSize: 20 }} />
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      {review.course}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarToday sx={{ fontSize: 20 }} />
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      Graduated: {review.graduationDate}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <AnimatedSection delay={0.2}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
                border: '1px solid rgba(11, 45, 77, 0.1)',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(11, 45, 77, 0.1)',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'primary.main',
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  Student Review
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontFamily: 'var(--font-inter)',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    position: 'relative',
                    pl: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: 'linear-gradient(180deg, #ff6b00 0%, #ff8c33 100%)',
                      borderRadius: '2px',
                    },
                  }}
                >
                  {review.reviewText}
                </Typography>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Box sx={{ mt: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                  color: 'primary.main',
                  fontFamily: 'var(--font-poppins)',
                  textAlign: 'center',
                }}
              >
                Career Journey
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, #eef4fa 0%, #f8fbff 100%)',
                      border: '1px solid rgba(11, 45, 77, 0.1)',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: 'primary.main',
                          fontFamily: 'var(--font-poppins)',
                        }}
                      >
                        Course Completed
                      </Typography>
                      <Chip
                        label={review.course}
                        sx={{
                          backgroundColor: '#ff6b00',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '1rem',
                          py: 2.5,
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, #eef4fa 0%, #f8fbff 100%)',
                      border: '1px solid rgba(11, 45, 77, 0.1)',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: 'primary.main',
                          fontFamily: 'var(--font-poppins)',
                        }}
                      >
                        Current Position
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontFamily: 'var(--font-poppins)',
                          mb: 1,
                        }}
                      >
                        {review.position}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontFamily: 'var(--font-inter)',
                        }}
                      >
                        {review.company}, {review.companyLocation}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

