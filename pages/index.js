import Head from 'next/head'
import Header from './../components/Header'
import Banner from './../components/Banner'
import Pricing from './../components/Pricing'
import Location from './../components/Location'
import CopyRight from './../components/CopyRight'
import OurStudents from './../components/OurStudents'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home - Sorifa Hostel</title>
      </Head>
      <Header />

      <Banner />
      <Pricing />
      <OurStudents />
      <Location />
      <CopyRight />
    </>
  )
}

export default Index
