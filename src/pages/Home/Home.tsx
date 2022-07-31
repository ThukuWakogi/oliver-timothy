import { Box } from '@mui/material';
import { NextPage } from 'next';
import { Meta } from '../../components';
import Banner from './Banner';
import Links from './Links';

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
        <Links />
      </Box>
    </>
  );
};

export default Home;
