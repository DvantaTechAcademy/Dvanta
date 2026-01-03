'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      style={{ height: '100%', display: 'flex' }}
    >
      <Link href={`/courses/${course.slug}`} passHref legacyBehavior>
        <Card
          component="a"
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          {course.image && (
            <CardMedia
              component="img"
              height="200"
              image={course.image}
              alt={course.title}
              sx={{ objectFit: 'cover' }}
            />
          )}
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'primary.main', flex: 1 }}>
                {course.title}
              </Typography>
              <Chip
                label={course.duration}
                size="small"
                color="secondary"
                sx={{ ml: 1, fontWeight: 600 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
              {course.description}
            </Typography>
            <Box
              sx={{
                mt: 'auto',
                pt: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
                Learn More →
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CourseCard;

