import { Box } from '@mui/material';
import { NextPage } from 'next';
import Banner from './Banner';

const Home: NextPage = () => {
  return (
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
    </Box>
  );
};

export default Home;
