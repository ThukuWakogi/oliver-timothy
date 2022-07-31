import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const DIMENSION = 200;

const Banner: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          mt: 10,
          borderRadius: '100%',
          boxShadow: '15.32px 15.32px 15px #1E1E1E, -15.32px -15.32px 15px #242424',
          width: DIMENSION,
          height: DIMENSION,
        }}
        component={motion.div}
        variants={{
          initial: { y: 20, opacity: 0 },
          animate: {
            y: 0,
            opacity: 1,
            transition: { type: 'tween', duration: 0.8, delay: 0.3, ease: 'easeOut' },
          },
        }}
        initial="initial"
        animate="animate"
      >
        <Box sx={{ borderRadius: '100%', m: 1, overflow: 'hidden' }}>
          <Image src="/avant.jpg" layout="responsive" width={100} height="100" priority alt="avant" />
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            pt: 1,
            background: 'linear-gradient(90deg, #e6e6e6, #979797)',
            backgroundSize: '100%',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            backgroundColor: '#e6e6e6',
          }}
          component={motion.h3}
          variants={{
            initial: { y: 20, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: { type: 'tween', duration: 0.8, delay: 0.6, ease: 'easeOut' },
            },
          }}
          initial="initial"
          animate="animate"
        >
          Oliver Timothy
        </Typography>
        <Typography
          variant="h5"
          sx={{
            pt: 1,
            background: 'linear-gradient(90deg, #e6e6e6, #bcbcbc)',
            backgroundSize: '100%',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            backgroundColor: '#e6e6e6',
          }}
          component={motion.h5}
          variants={{
            initial: { y: 20, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: { type: 'tween', duration: 0.8, delay: 0.8, ease: 'easeOut' },
            },
          }}
          initial="initial"
          animate="animate"
        >
          Tech Expert
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
