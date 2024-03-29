import Header from './../components/Header'
// import CopyRight from './../components/CopyRight'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import FadeLoader from 'react-spinners/FadeLoader'

function customName() {
  const { data: session } = useSession()
  const router = useRouter()
  const [info, setInfo] = useState([])
  let [loading, setLoading] = useState(true)

  const sortInfo = info?.find((p) => p?.customName === router.query.customName)

  useEffect(async () => {
    const res = await fetch(`/api/alluser`)
    const data = await res.json()
    setInfo(data?.data)
    // setPay(data.Login[0].payData)
    setLoading(false)
  }, [])

  console.log(sortInfo)
  return (
    <div>
      <Header />
      <Head>
        <title>{sortInfo?.name} - Sorifa Hostel</title>
        <meta name="description" content={sortInfo?.bio}></meta>
        <meta property="og:title" content={sortInfo?.name} />
        <meta property="og:description" content={sortInfo?.bio} />
        <meta property="og:image" content={sortInfo?.image} />
      </Head>
      {loading ? (
        <div className="mt-40 flex items-center justify-center">
          <FadeLoader color={`#FD3D57`} loading={loading} size={300} />
        </div>
      ) : (
        <div className="bg-gray-100">
          <div className="container mx-auto my-5 p-5">
            <div className="no-wrap md:-mx-2 md:flex ">
              <div className="w-full md:mx-2 md:w-3/12">
                <div className="border-t-4 border-green-400 bg-white p-3">
                  <div className="image overflow-hidden">
                    <img
                      className="mx-auto h-auto w-full"
                      src={sortInfo?.image}
                      alt={sortInfo?.name}
                    />
                  </div>
                  <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                    {sortInfo?.name}
                  </h1>
                  <h3 className="font-lg text-semibold leading-6 text-gray-600">
                    {sortInfo?.experience}
                  </h3>
                  <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
                    {sortInfo?.bio}
                  </p>
                  <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span
                          className={`rounded ${
                            sortInfo?.verified ? 'bg-green-500' : 'bg-red-500'
                          }  py-1 px-2 text-sm text-white`}
                        >
                          {sortInfo?.verified ? 'Active' : 'Deactivate'}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      {/* <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span> */}
                    </li>
                  </ul>
                </div>
                <div className="my-4"></div>
              </div>
              <div className="mx-2 h-64 w-full md:w-9/12">
                <div className="rounded-sm bg-white p-3 shadow-sm">
                  <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid text-sm md:grid-cols-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          First Name
                        </div>
                        <div className="px-4 py-2">{sortInfo?.name}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Department
                        </div>
                        <div className="px-4 py-2">{sortInfo?.department}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Semester</div>
                        <div className="px-4 py-2">{sortInfo?.semester}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Shift</div>
                        <div className="px-4 py-2">{sortInfo?.shift}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Room No.</div>
                        <div className="px-4 py-2">{sortInfo?.room}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Contact No.
                        </div>
                        <a
                          href={`tel:${sortInfo?.phoneNumber}`}
                          className="px-4 py-2"
                        >
                          {sortInfo?.phoneNumber}
                        </a>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Guardian Number
                        </div>
                        <div className="px-4 py-2">
                          {sortInfo?.guardianNumber}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <div className="px-4 py-2">{sortInfo?.address}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                          <div className="cursor-pointer text-blue-800">
                            {sortInfo?.email}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">{sortInfo?.birthday}</div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    onClick={() => router.push('/profileEdit')}
                    className="focus:shadow-outline hover:shadow-xs my-4 block w-full cursor-pointer rounded-lg p-3 text-center text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  >
                    Edit Profile
                  </div> */}
                </div>

                <div className="my-4"></div>

                <div className="rounded-sm bg-white p-3 shadow-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                        <span clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Experience</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            {sortInfo?.experience}
                          </div>
                          {/* <div className="text-xs text-gray-500">
                        March 2020 - Now
                      </div> */}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                        <span clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Education</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            {sortInfo?.collageName}
                          </div>
                          {/* <div className="text-xs text-gray-500">
                        March 2020 - Now
                      </div> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default customName
