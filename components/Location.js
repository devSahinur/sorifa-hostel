import React from 'react'

function Location() {
  return (
    <section className="body-font relative text-gray-600">
      <div className=" mx-auto max-w-xl text-center lg:max-w-2xl">
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          হোস্টেলের অবস্থান
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          দুরামারির পাশে,সেলুনের দোকান এর সাথে !
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
        <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4067.03790127315!2d88.44560235086094!3d26.03756206824732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1646888819824!5m2!1sen!2sbd"
          ></iframe>
          <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
            <div className="px-6 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                ADDRESS
              </h2>
              <p className="mt-1">
                Duramari, Gobinda Nagar, Thakurgaon Sadar,Thakurgaon
              </p>
            </div>
            <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                EMAIL
              </h2>
              <a
                href="mailto: masipulislam@email.com"
                className="leading-relaxed text-indigo-500"
              >
                mehedi.hasan500422@gmail.com
              </a>
              <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                PHONE
              </h2>
              <p className="leading-relaxed">+8801319118362</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
          <div className="inline-flex">
            <img
              alt="team"
              className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
              src="https://i.ibb.co/BLfNJb4/jslkfj-n.jpg"
            />
            <div className="ml-3 flex-grow  sm:pl-8 md:ml-0  lg:ml-0">
              <h2 className="title-font text-lg font-medium text-gray-900">
                Md Noyon Islam
              </h2>
              <h3 className="mb-3 text-gray-500">Hostel Owner</h3>
              <p className="mb-4">
                Mobile: <a href="tel:+8801717289297">01717289297</a>
              </p>
            </div>
          </div>
          <div className="inline-flex pt-5">
            <img
              alt="team"
              className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
              src="https://i.ibb.co/tzr72Ms/image.png"
            />
            <div className="ml-3 flex-grow sm:pl-8 md:ml-0 lg:ml-0">
              <h2 className="title-font text-lg font-medium text-gray-900">
                Md Mehedi Hasan Murad
              </h2>
              <h3 className="mb-3 text-gray-500">Hostel controller</h3>
              <p className="mb-4">
                Mobile: <a href="tel:+8801751379009">01319118362</a>
              </p>
              <span className="inline-flex">
            
                <a  href="https://www.facebook.com/" target="_blank" className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>

              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
