'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon?: string;
  index: number;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  duration,
  description,
  icon,
  index,
  isLast = false,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        gap: 3,
        pb: isLast ? 0 : 6,
        '&::before': !isLast
          ? {
              content: '""',
              position: 'absolute',
              left: 24,
              top: 80,
              bottom: -24,
              width: '3px',
              background: 'linear-gradient(180deg, #ff6b00 0%, rgba(255, 107, 0, 0.3) 100%)',
            }
          : {},
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5, type: 'spring' }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c33 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(255, 107, 0, 0.4)',
              border: '4px solid #fff',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {icon ? (
              <Typography sx={{ fontSize: '2rem' }}>{icon}</Typography>
            ) : (
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                }}
              />
            )}
          </Box>
        </motion.div>
      </Box>
      <Box sx={{ flex: 1, pt: 0.5 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                fontFamily: 'var(--font-poppins)',
              }}
            >
              {title}
            </Typography>
            <Chip
              label={duration}
              size="small"
              sx={{
                backgroundColor: '#ff6b00',
                color: '#fff',
                fontWeight: 600,
                fontFamily: 'var(--font-poppins)',
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              fontFamily: 'var(--font-inter)',
            }}
          >
            {description}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

interface TimelineProps {
  items: Array<{
    id: string;
    title: string;
    duration: string;
    description: string;
    icon?: string;
  }>;
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <Box sx={{ position: 'relative', py: 4 }}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          {...item}
          index={index}
          isLast={index === items.length - 1}
        />
      ))}
    </Box>
  );
};

export default Timeline;

