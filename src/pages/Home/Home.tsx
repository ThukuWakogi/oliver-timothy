import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { Meta } from '../../components';
import Banner from './Banner';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Banner />
        <Typography
          sx={{ pt: 12 }}
          component={motion.p}
          variants={{
            initial: { opacity: [0] },
            animate: {
              opacity: [0, 0.8, 0],
              transition: { repeat: Infinity, delay: 2, type: 'tween', duration: 4 },
            },
          }}
          initial="initial"
          animate="animate"
        >
          Coming soon...
        </Typography>
      </Box>
    </>
  );
};

export default Home;
