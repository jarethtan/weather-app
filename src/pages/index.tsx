import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout></Layout>
      </main>
    </>
  );
}
