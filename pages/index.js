import Head from 'next/head'
import Header from './../components/Header'
import Banner from './../components/Banner'
import Pricing from './../components/Pricing'
import Location from './../components/Location'
import CopyRight from './../components/CopyRight'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home - Sorifa Hostel</title>
      </Head>
      <Header />

      <Banner />
      <Pricing />
      <Location />
      <CopyRight />
    </>
  )
}

export default Index
