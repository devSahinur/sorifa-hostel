import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'
import Header from './../components/Header'

function admin() {
  const router = useRouter()
  const [user, setUser] = useState([])
  let [loading, setLoading] = useState(true)

  console.log(user)
  const { data: session } = useSession()
console.log(session?.user?.email)



  useEffect(async () => {
    const res = await fetch(`/api/alluser`)
    const data = await res.json()
    setUser(data?.data)
    // setPay(data.Login[0].payData)
    setLoading(false)
  }, [])
  return (
    <div>
      <Header/>
      <section className="mx-auto mb-5 max-w-7xl pt-6">
        <h2 className="pb-5 text-4xl font-semibold">
          Total User {user?.length}
        </h2>

        {/* Pull some data from a server - API endPoints */}
        <div className="grid grid-cols-1 p-2 sm:grid-cols-3 md:gap-6 md:p-6 lg:grid-cols-4">
          {user?.map((guy) => (
            <Link key={guy?._id} href={`/user/${guy?._id}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border">
                <img
                  className="w-full  transition-transform duration-200 ease-out group-hover:scale-105"
                  src={guy?.image}
                  alt=""
                />
                <div className="flex justify-between bg-white p-5">
                  <div>
                    <p className="text-lg font-bold">{guy?.name}</p>
                    <p className="text-xs">Number: {guy?.phoneNumber}</p>
                    <p className="text-xs">
                      Guardian Number: {guy?.guardianNumber}
                    </p>
                    <br />
                    {guy?.verified ? (
                      <button className="m-0 bg-green-500 px-2 text-center text-white">
                        Verified
                      </button>
                    ) : (
                      <button className="m-0 bg-red-500 px-2 text-center text-white">
                        Not Verified
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <FadeLoader color={`#FD3D57`} loading={loading} size={300} />
        </div>
      </section>
    </div>
  )
}

export default admin
