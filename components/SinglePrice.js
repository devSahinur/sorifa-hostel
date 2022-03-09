import Features from './../components/Features'

function SinglePrice({ room }) {
  return (
    <div className="flex flex-col rounded bg-white shadow-sm transition duration-300 hover:shadow">
      <div className="relative h-48 w-full">
        <img
          src={room.img}
          className="h-full w-full rounded-t object-cover"
          alt="Plan"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between rounded-b border border-t-0 p-8">
        <div>
          <div>
            <p className="mb-2 font-bold tracking-wide">Features</p>
            <ul className="space-y-2">
                <Features/>
                <Features/>
                <Features/>
                <Features/>
                <Features/>
                <Features/>
                </ul>
          </div>
          <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
            {room.price} taka
          </div>
        </div>
        <a
          href="/"
          className="focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded bg-red-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-red-600 focus:outline-none"
        >
          Booking Now
        </a>
      </div>
    </div>
  )
}

export default SinglePrice
