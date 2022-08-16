import Layout from "../Components/Layout";
import { NextUIProvider } from '@nextui-org/react';
import { appWithTranslation } from 'next-i18next';

import "../styles/globals.css";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
    const route = useRouter().route;
  return (
      <NextUIProvider>
          <Layout route={route}>
            <Component {...pageProps} />
          </Layout>
      </NextUIProvider>
  )
}

export default appWithTranslation(MyApp);
