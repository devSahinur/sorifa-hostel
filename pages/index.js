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
        <meta name="description" content="Sorifa Hostel" />
        <meta property="og:title" content="Sorifa Hostel" />
        <meta property="og:type" content="https://sorifa-hostel.vercel.app/" />
        <meta property="og:url" content="https://sorifa-hostel.vercel.app/" />
        <meta
          property="og:image"
          content="https://i.ibb.co/rdZNqHc/room02.png"
        />
        <meta property="og:description" content="Home - Sorifa Hostel" />
        <meta property="og:site_name" content="Sorifa Hostel" />
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
