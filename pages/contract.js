import Header from './../components/Header'
import CopyRight from './../components/CopyRight'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

function contract() {
  const router = useRouter()

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_vhg3ehu',
        'template_nvukc4s',
        form.current,
        '_XJZ5spifhHZGjSkI'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    Swal.fire('Message sand success!', 'You clicked the button!', 'success')
    router.push('/')
  }

  return (
    <div>
      <Header />

      {/* <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium tracking-widest text-gray-900">
              Hostel owner
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 lg:w-1/2">
              <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  src="https://dummyimage.com/200x200"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Md Noyon Islam
                  </h2>
                  <h3 className="mb-3 text-gray-500">Hostel Owner</h3>
                  <p className="mb-4">
                    Mobile: <a href="tel:+8801717289297">01717289297</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  src="https://i.ibb.co/7yFsXcx/siam-1.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Masipul Islam Siam
                  </h2>
                  <h3 className="mb-3 text-gray-500">Hostel controller</h3>
                  <p className="mb-4">
                    Mobile: <a href="tel:+8801751379009">01751379009</a>
                  </p>
                  <span className="inline-flex">
                    <a
                      href="https://www.facebook.com/masipulislamsiam"
                      target="_blank"
                      className="text-gray-500"
                    >
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
                    <a
                      href="https://twitter.com/MI__Siam"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
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
        </div>
      </section> */}

      {/* Contact */}
      <div className="w-full">
        <div className="h-96 bg-gradient-to-b from-blue-800 to-blue-600"></div>
        <div className="mx-auto mb-12 max-w-5xl px-6 sm:px-6 lg:px-8">
          <div className="-mt-72 w-full rounded bg-white p-8 shadow sm:p-12">
            <p className="text-center text-3xl font-bold leading-7">
              Contact US
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mt-12 items-center md:flex">
                <div className="flex w-full flex-col md:w-1/2">
                  <label className="font-semibold leading-none">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                  />
                </div>
                <div className="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2">
                  <label className="font-semibold leading-none">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-8 items-center md:flex">
                <div className="flex w-full flex-col">
                  <label className="font-semibold leading-none">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-8 items-center md:flex">
                <div className="flex w-full flex-col">
                  <label className="font-semibold leading-none">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <div className="mt-8 flex w-full flex-col">
                  <label className="font-semibold leading-none">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    className="focus:oultine-none mt-4 h-40 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 focus:border-blue-700"
                  ></textarea>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <input
                  type="submit"
                  value="Message Sand"
                  className="mt-9 rounded bg-blue-700 py-4 px-10 font-semibold leading-none text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  )
}

export default contract
