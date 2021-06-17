import Head from 'next/head'

import Header from '../components/header'
import Banner from '../components/banner'
import About from '../components/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <About />
    </div>
  )
}
