import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/Header'
import Banner from './../components/Banner'
import Pricing from './../components/Pricing'


const Index = () => {
  return (
    <>
      <Head>
        <title>Sorifa Hostel</title>
      </Head>
      <Header />
      <Banner/>
      <Pricing/>
    </>
  )
}

export default Index
