import { GitHub, Instagram, Twitter } from '@mui/icons-material';
import { Box, Grid, SvgIconTypeMap } from '@mui/material';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

const DIMENSION = 60;

const iconProps: SvgIconTypeMap['props'] = { sx: { fontSize: DIMENSION * 0.8, color: '#ababab' } };

const Links: FC = () => {
  return (
    <Grid
      container
      sx={{ maxWidth: 'sm', pt: 12, justifyContent: 'space-evenly', direction: 'row', alignItems: 'center' }}
      component={motion.div}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { type: 'tween', duration: 0.8, delay: 1, ease: 'easeOut' },
        },
      }}
      initial="initial"
      animate="animate"
    >
      <SocialLink href="https://www.github.com/ThukuWakogi">
        <GitHub {...iconProps} />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/thukuwakogi">
        <Instagram {...iconProps} />
      </SocialLink>
      <SocialLink href="https://www.twitter.com/thukuwakogi">
        <Twitter {...iconProps} />
      </SocialLink>
    </Grid>
  );
};

export default Links;

const SocialLink: FC<{ children?: ReactNode; href?: string }> = ({ children, href }) => (
  <Grid item xs={4}>
    <Box
      sx={{
        width: DIMENSION,
        height: DIMENSION,
        borderRadius: 5,
        background: 'linear-gradient(145deg, #232323, #1e1e1e);',
        boxShadow: '7px 7px 14px #1b1b1b, -7px -7px 14px #272727',
        mx: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
      component={motion.a}
      whileHover={{ scale: 1.2, boxShadow: '7px 7px 14px #141414, -7px -7px 14px #2e2e2e' }}
      whileTap={{ scale: 1.2, boxShadow: '7px 7px 14px #141414, -7px -7px 14px #2e2e2e' }}
    >
      {children}
    </Box>
  </Grid>
);
