import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from 'next/image'
import { Container} from '@nextui-org/react';

import styles from '../styles/Home.module.css'

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"]))
        }
    };
}

export default function Home() {
    const { t } = useTranslation();

  return (
      <Container>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
              <h1 className={styles.title}>{t("home:title")}</h1>
          </main>
      </Container>
  )
}

