import { Box, Typography } from '@mui/material';
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
      >
        <Box sx={{ borderRadius: '100%', m: 1, overflow: 'hidden' }}>
          <Image src="/avant.jpg" layout="responsive" width={100} height="100" priority />
        </Box>
      </Box>
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
      >
        Tech Expert
      </Typography>
    </Box>
  );
};

export default Banner;
