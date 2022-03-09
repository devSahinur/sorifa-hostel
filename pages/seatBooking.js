import Header from './../components/Header'
import Marquee from 'react-fast-marquee'

function SeatBooking() {
  return (
    <div>
        <Header/>
        <Marquee
        speed={80}
        gradient={false}
        className={'h-8 bg-gray-400 text-white'}
      >
        **** বর্তমানে হোস্টেলে চারটা সিট ফাঁকা আছে **** 
      </Marquee>
        <h1>i am SeatBooking page</h1>
    </div>
  )
}

export default SeatBooking