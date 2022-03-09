import SinglePrice from './../components/SinglePrice'

const packegeData = [
  {
    id: 1,
    price: 700,
    img: 'https://i.ibb.co/z42sCGh/Snapchat-793691721-1.jpg',
    features:['দুই সিটের রুম','একটা চেয়ার','একটা টেবিল','একটা বেড','একটা সিলিং ফ্যান']
  },
  {
    id: 2,
    price: 1000,
    img: 'https://i.ibb.co/NpPDyMm/IMG-20210912-224730-1.jpg',
    features:['এক সিটের রুম','একটা চেয়ার','একটা টেবিল','একটা বেড','একটা সিলিং ফ্যান']
  },
  {
    id: 3,
    price: 1200,
    img: 'https://i.ibb.co/z42sCGh/Snapchat-793691721-1.jpg',
    features:['এক সিটের রুম', 'কমন বাথরুম','একটা চেয়ার','একটা টেবিল','একটা বেড','একটা সিলিং ফ্যান']
  },
]

function Pricing() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          আপনার পছন্দের প্যাকেজ নির্বাচন করুন
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        প্রথম মাসে জামানত ৭০০ টাকা, উন্নয়ন ফি ৫০০ টাকা
         এবং ওয়াইফাই সংযোগ ফি ২০০ টাকা দিতে হবে।
        </p>
      </div>
      <div className="row-gap-8 sm:row-gap-10 grid max-w-md gap-10 sm:mx-auto lg:max-w-screen-lg lg:grid-cols-3 xl:max-w-screen-lg">
        {packegeData.map((room) => (
          <SinglePrice key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}

export default Pricing
