import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Hero from '../components/sections/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next App for Accenture Carpet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Layout title="Homepage">
        <Hero />
      </Layout>
    </>
  )
}

export default Home
