'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { reviews } from '@/data/reviews';
import { motion } from 'framer-motion';

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [filterCompany, setFilterCompany] = useState('all');

  const courses = Array.from(new Set(reviews.map((r) => r.course)));
  const companies = Array.from(new Set(reviews.map((r) => r.company))).sort();

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.reviewText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = filterCourse === 'all' || review.course === filterCourse;
    const matchesCompany = filterCompany === 'all' || review.company === filterCompany;
    return matchesSearch && matchesCourse && matchesCompany;
  });

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
              Student Reviews & Success Stories
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
              Read authentic reviews from our students who have transformed their careers
              and are now working at top IT companies across India and globally.
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              mb: 6,
              p: 3,
              backgroundColor: '#f8fbff',
              borderRadius: 3,
              border: '1px solid rgba(11, 45, 77, 0.1)',
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search by name, company, or review..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#fff',
                      fontFamily: 'var(--font-inter)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontFamily: 'var(--font-inter)' }}>Filter by Course</InputLabel>
                  <Select
                    value={filterCourse}
                    onChange={(e) => setFilterCourse(e.target.value)}
                    label="Filter by Course"
                    sx={{
                      backgroundColor: '#fff',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    <MenuItem value="all">All Courses</MenuItem>
                    {courses.map((course) => (
                      <MenuItem key={course} value={course}>
                        {course}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontFamily: 'var(--font-inter)' }}>Filter by Company</InputLabel>
                  <Select
                    value={filterCompany}
                    onChange={(e) => setFilterCompany(e.target.value)}
                    label="Filter by Company"
                    sx={{
                      backgroundColor: '#fff',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    <MenuItem value="all">All Companies</MenuItem>
                    {companies.map((company) => (
                      <MenuItem key={company} value={company}>
                        {company}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: 'text.secondary',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Showing {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {filteredReviews.map((review, index) => (
              <Grid item xs={12} sm={6} md={4} key={review.id}>
                <ReviewCard review={review} index={index} />
              </Grid>
            ))}
          </Grid>

          {filteredReviews.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" sx={{ color: 'text.secondary', fontFamily: 'var(--font-poppins)' }}>
                No reviews found matching your criteria
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Footer />
    </>
  );
}


