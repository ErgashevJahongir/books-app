import Layout from "../Components/Layout";
import { NextUIProvider } from '@nextui-org/react';
import { appWithTranslation } from 'next-i18next';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </NextUIProvider>
  )
}

export default appWithTranslation(MyApp);
