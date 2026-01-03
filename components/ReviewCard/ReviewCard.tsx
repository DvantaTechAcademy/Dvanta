'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Rating,
  Chip,
} from '@mui/material';
import {
  Verified,
  LocationOn,
  Business,
  CalendarToday,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Review } from '@/data/reviews';

interface ReviewCardProps {
  review: Review;
  index?: number;
  showFullDetails?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  index = 0,
  showFullDetails = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{ height: '100%' }}
    >
      <Link href={`/reviews/${review.id}`} passHref legacyBehavior>
        <Card
          component="a"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
            border: '1px solid rgba(11, 45, 77, 0.1)',
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(11, 45, 77, 0.15)',
              borderColor: 'rgba(255, 107, 0, 0.3)',
              transform: 'translateY(-4px)',
            },
            '&::before': review.featured
              ? {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b00 0%, #ff8c33 100%)',
                  zIndex: 1,
                }
              : {},
          }}
        >
          <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    border: '3px solid #ff6b00',
                    boxShadow: '0 4px 12px rgba(255, 107, 0, 0.2)',
                    bgcolor: 'primary.main',
                    fontSize: '1.5rem',
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
                {review.verified && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -2,
                      right: -2,
                      backgroundColor: '#4caf50',
                      borderRadius: '50%',
                      p: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #fff',
                    }}
                  >
                    <Verified sx={{ fontSize: 16, color: '#fff' }} />
                  </Box>
                )}
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '1.1rem',
                    }}
                  >
                    {review.studentName}
                  </Typography>
                  {review.featured && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        backgroundColor: '#ff6b00',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        height: 20,
                      }}
                    />
                  )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1, flexWrap: 'wrap' }}>
                  <LocationOn sx={{ fontSize: 14, color: 'text.secondary' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'var(--font-inter)' }}>
                    {review.location}
                  </Typography>
                </Box>
                <Rating
                  value={review.rating}
                  readOnly
                  size="small"
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#ff6b00',
                    },
                  }}
                />
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 2,
                flexGrow: 1,
                lineHeight: 1.7,
                fontFamily: 'var(--font-inter)',
                display: '-webkit-box',
                WebkitLineClamp: showFullDetails ? 'none' : 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              &quot;{review.reviewText}&quot;
            </Typography>

            <Box
              sx={{
                pt: 2,
                borderTop: '1px solid rgba(11, 45, 77, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <Business sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                  {review.position} at {review.company}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'var(--font-inter)' }}>
                  Graduated: {review.graduationDate}
                </Typography>
              </Box>
              <Chip
                label={review.course}
                size="small"
                sx={{
                  backgroundColor: 'rgba(11, 45, 77, 0.08)',
                  color: 'primary.main',
                  fontWeight: 500,
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.75rem',
                  alignSelf: 'flex-start',
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ReviewCard;

