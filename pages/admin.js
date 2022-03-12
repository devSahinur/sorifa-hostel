import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'

function admin() {
  const [user, setUser] = useState([])
  let [loading, setLoading] = useState(true)

  console.log(user)

  useEffect(async () => {
    const res = await fetch(`/api/alluser`)
    const data = await res.json()
    setUser(data?.data)
    // setPay(data.Login[0].payData)
    setLoading(false)
  }, [])
  return (
    <div>
      <section className="mx-auto mb-5 max-w-7xl pt-6">
        <h2 className="pb-5 text-4xl font-semibold">
         Total User {user.length}
        </h2>

        {/* Pull some data from a server - API endPoints */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 md:gap-6 p-2 md:p-6">
        {user?.map((guy) => (
          <Link key={guy?._id} href={`/post/${guy?._id}`}>
            <div className="cursor-pointer group border rounded-lg overflow-hidden">
              <img
                className="w-full  group-hover:scale-105 transition-transform duration-200 ease-out"
                src={guy.image}
                alt=""
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{guy.name}</p>
                  <p className="text-xs">
                    Number: {guy.phoneNumber}
                  </p>
                  <p className="text-xs">
                  Guardian Number: {guy.guardianNumber}
                  </p>
                </div>

                {/* <img
                  className="w-12 h-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                /> */}
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
