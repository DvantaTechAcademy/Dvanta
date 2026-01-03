'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
          }}
        >
          Courses We Offer
        </Typography>
        <Box sx={{ 
          '& .swiper-slide': {
            height: 'auto',
            display: 'flex',
          },
          '& .swiper-wrapper': {
            display: 'flex',
            alignItems: 'stretch',
          },
        }}>
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
              1280: {
                slidesPerView: 4,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            style={{ paddingBottom: '50px' }}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={course.id} style={{ height: 'auto' }}>
                <CourseCard course={course} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default CourseCarousel;

