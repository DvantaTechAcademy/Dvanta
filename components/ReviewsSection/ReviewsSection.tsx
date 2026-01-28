'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReviewCard from '../ReviewCard/ReviewCard';
import { reviews } from '@/data/reviews';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ReviewsSection: React.FC = () => {
  const featuredReviews = reviews.filter((r) => r.featured).slice(0, 6);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fbff', position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: 'var(--font-poppins)',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Student Success Stories
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
            }}
          >
            Hear from our students who transformed their careers and are now working at top IT companies
          </Typography>
        </motion.div>

        <Box
          sx={{
            '& .swiper-slide': {
              height: 'auto',
              display: 'flex',
            },
            '& .swiper-wrapper': {
              display: 'flex',
              alignItems: 'stretch',
            },
            mb: 6,
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            style={{ paddingBottom: '50px' }}
          >
            {featuredReviews.map((review, index) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Link href="/reviews" passHref legacyBehavior>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component="a"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                View All Reviews
              </Button>
            </motion.div>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection;


