import type { NextPage } from 'next'
import Head from 'next/head'
import Topnavbar from '../components/layout/Topnavbar'

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Youtube Clone layout</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      <link rel="shortcut icon" href="/icons/logo-youtube.png" type="image/x-icon" />
    </Head>
    
    <Topnavbar></Topnavbar>

  </>)
}

export default Home
