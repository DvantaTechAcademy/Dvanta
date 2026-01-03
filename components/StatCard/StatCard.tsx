'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
  index?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, suffix = '', index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && numericValue > 0) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    } else if (!numericValue) {
      setCount(value as any);
    }
  }, [isInView, numericValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card
        sx={{
          textAlign: 'center',
          p: 3,
          height: '100%',
          backgroundColor: 'background.paper',
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'secondary.main',
              mb: 1,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            {numericValue > 0 ? `${count}${suffix}` : value}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
            {label}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatCard;

