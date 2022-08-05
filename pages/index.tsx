import type { NextPage } from 'next'
import Head from 'next/head'
import HomeScreen from '../src/screens/HomeScreen'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Private Code Challenge</title>
        <meta name="description" content="Aplicação desenvolvida para o Desafio Front-End da Private Code" />
      </Head>

      <HomeScreen />
    </>
  )
}

export default Home
