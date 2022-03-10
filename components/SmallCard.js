import Image from 'next/image'

function SmallCard({ bill }) {
  return (
    <div
      className={`mt-5 border-2 p-5 px-24 ${
        bill.pay && 'bg-[#46AA2B] text-white py-3'
      }  py-10 m-auto transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105`}
    >
      <h2 className="semibold text-center text-2xl">{bill.month}</h2>
      {bill.pay && (
        <>
          <h3 >{bill.price} taka</h3>
          <h1>{bill.payData}</h1>
        </>
      )}
    </div>
  )
}

export default SmallCard
