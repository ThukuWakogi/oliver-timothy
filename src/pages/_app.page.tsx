import { CacheProvider, EmotionCache } from '@emotion/react';
import '@fontsource/jost/variable-italic.css';
import '@fontsource/jost/variable.css';
import { CssBaseline, GlobalStyles, StyledEngineProvider, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import createEmotionCache from '../createEmotionCache';
import theme from '../theme';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyles
            styles={{
              html: { height: '100%' },
              body: {
                height: '100%',
                backgroundColor: '#212121 !important',
              },
              '#__next': { height: '100%' },
            }}
          />
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default MyApp;
