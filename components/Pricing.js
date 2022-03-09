import SinglePrice from './../components/SinglePrice'


const packegeData = [
    {
      id: 1,
      price: 700,
      img:'https://i.ibb.co/z42sCGh/Snapchat-793691721-1.jpg'
    },
    {
      id: 2,
      price: 1000,
      img:'https://i.ibb.co/NpPDyMm/IMG-20210912-224730-1.jpg'
    },
    {
      id: 3,
      price: 1200,
      img:'https://i.ibb.co/z42sCGh/Snapchat-793691721-1.jpg'
    },
  ]

function Pricing() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            Brand new
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Choose</span>
          </span>{' '}
          your way. Advance everyday.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="row-gap-8 sm:row-gap-10 grid max-w-md gap-10 sm:mx-auto lg:max-w-screen-lg lg:grid-cols-3 xl:max-w-screen-lg">
          {packegeData.map(room => <SinglePrice key={room.id} room={room} />)}
        

      </div>
    </div>
  )
}

export default Pricing
