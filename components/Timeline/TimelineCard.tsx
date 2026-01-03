'use client';

import React from 'react';
import { Box, Typography, Chip, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  id: string;
  title: string;
  duration: string;
  description: string;
  outcomes?: string[];
  icon?: string;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  duration,
  description,
  outcomes,
  icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card
        sx={{
          height: '100%',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
          border: '1px solid rgba(11, 45, 77, 0.1)',
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(11, 45, 77, 0.15)',
            borderColor: 'rgba(255, 107, 0, 0.3)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #ff6b00 0%, #ff8c33 100%)',
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {icon && (
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c33 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(255, 107, 0, 0.3)',
                  }}
                >
                  <Typography sx={{ fontSize: '2rem' }}>{icon}</Typography>
                </Box>
              )}
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
            </Box>
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
              mb: outcomes && outcomes.length > 0 ? 3 : 0,
              lineHeight: 1.7,
              fontFamily: 'var(--font-inter)',
            }}
          >
            {description}
          </Typography>
          {outcomes && outcomes.length > 0 && (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 2,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Outcomes:
              </Typography>
              <Grid container spacing={1.5}>
                {outcomes.map((outcome, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <Typography
                        sx={{
                          color: '#ff6b00',
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          lineHeight: 1.5,
                          mt: 0.2,
                        }}
                      >
                        ✓
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontFamily: 'var(--font-inter)',
                          lineHeight: 1.6,
                        }}
                      >
                        {outcome}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TimelineCard;

