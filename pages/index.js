import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/Header'
import Banner from './../components/Banner'
import Pricing from './../components/Pricing'
import CopyRight from './../components/CopyRight'
import Marquee from 'react-fast-marquee'

const Index = () => {
  return (
    <>
      <Head>
        <title>Sorifa Hostel</title>
      </Head>
      <Header />
      <Marquee
        speed={80}
        gradient={false}
        className={'h-8 bg-gray-400 text-white'}
      >
        **** বর্তমানে হোস্টেলে চারটা সিট ফাঁকা আছে **** 
      </Marquee>
      <Banner />
      <Pricing />
      <CopyRight/>
    </>
  )
}

export default Index
