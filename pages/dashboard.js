import Header from '../components/Header'
import CopyRight from '../components/CopyRight'
import SmallCard from '../components/SmallCard'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import FadeLoader from 'react-spinners/FadeLoader'

// const takaPay = [
//   {
//     id: '1',
//     month: 'January',
//     pay: true,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '2',
//     month: 'February ',
//     pay: true,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '3',
//     month: 'March',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '4',
//     month: 'April',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '5',
//     month: 'May ',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '6',
//     month: 'June ',
//     pay: true,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '7',
//     month: 'July ',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '8',
//     month: 'August',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '9',
//     month: 'September',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '10',
//     month: 'October',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '11',
//     month: 'November ',
//     pay: false,
//     payData: '22-03-2020',
//     price: '700',
//   },
//   {
//     id: '12',
//     month: 'December ',
//     pay: true,
//     payData: '22-03-2020',
//     price: '700',
//   },
// ]

function SeatBooking() {
  const router = useRouter()
  const { data: session } = useSession()
  const [pay, setPay] = useState([])
  let [loading, setLoading] = useState(true)

  const sortData = pay?.find((p) => p?.email === session?.user?.email)

  useEffect(async () => {
    const res = await fetch(`/api/alluser`)
    const data = await res.json()
    setPay(data?.data)
    // setPay(data.Login[0].payData)
    setLoading(false)
  }, [])

  if (sortData?.verified == false) {
    router.push('/')
  }

  // useEffect(() => {
  
  // }, [session])
  return (
    <div>
      <Header />
      <Head>
        <title>My Dashboard - Sorifa Hostel</title>
      </Head>
      <section className="mx-auto mb-5 max-w-7xl pt-6">
        <h2 className="pb-5 text-4xl font-semibold">
          Your bill payment activity
        </h2>

        {/* Pull some data from a server - API endPoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortData?.payData?.map((bill) => (
            <SmallCard key={bill.id} bill={bill} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <FadeLoader color={`#FD3D57`} loading={loading} size={300} />
        </div>
      </section>
      <CopyRight />
    </div>
  )
}

export default SeatBooking
