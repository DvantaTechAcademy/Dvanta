'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CourseCard from '../CourseCard/CourseCard';
import { courses } from '@/data/courses';

const CourseCarousel: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            color: 'primary.main',
            fontFamily: 'var(--font-poppins)',
          }}
        >
          Courses We Offer
        </Typography>
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <CourseCard course={course} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseCarousel;
