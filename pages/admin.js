import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'
import Header from './../components/Header'

function admin() {
  const router = useRouter()
  const [user, setUser] = useState([])
  const [userS, setUserS] = useState([])
  const [Headline, setHeadline] = useState([])
  const [HeadlineS, setHeadlineS] = useState([])

  let [loading, setLoading] = useState(true)

  console.log(user)
  const { data: session } = useSession()

  console.log(userS)

  if (userS?.admin == false) {
    router.push('/')
  }

  useEffect(() => {
    !session && router.push('/')
  }, [session])

  //   useEffect(() => {
  //  if(user.email != 'sayerkazipara@gmail.com'){
  // router.push('/')
  //  }
  //   }, [])

  useEffect(async () => {
    const res = await fetch(`/api/alluser`)
    const data = await res.json()
    setUser(data?.data)
    // setPay(data.Login[0].payData)
    setLoading(false)
  }, [])

  useEffect(async () => {
    const res = await fetch(`/api/user`)
    const data = await res.json()
    setUserS(data?.Login[0])
  }, [])
  useEffect(async () => {
    const res = await fetch(`/api/navheadline`)
    const data = await res.json()
    setHeadline(data?.data)
  }, [])

  const deleteHeadline = async (id) => {
    const res = await fetch(`/api/navheadline?postId=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.ok) {
      console.log('post Delete done')
      router.push('/')
    }
  }

  const headLinePost = async (e) => {
    e.preventDefault()
    const res = await fetch(`/api/navheadline?=`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: HeadlineS,
      }),
    })
    const data = await res.json()
    setHeadlineS(data?.data)
    // router.reload()
    router.push('/')
  }

  console.log(HeadlineS)
  return (
    <div>
      <Header />
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

        <section className="mx-auto mb-5 max-w-7xl pt-6">
          <h2 className="pb-5 text-4xl font-semibold">
            Total Headline {Headline?.length}
          </h2>
          <form>
            <input
              type="text"
              name="post"
              placeholder="Enter your post line"
              className="border-[2px] border-red-500 p-5"
              value={HeadlineS?.post}
              onChange={(e) => setHeadlineS(e.target.value)}
            />
            <button onClick={headLinePost} className="mx-5 bg-green-600 p-5">
              Post headLine
            </button>
          </form>
        </section>
        <div className="">
          {!loading && (
            <>
              {Headline?.map((headline, index) => (
                <div key={index} className='my-10 mx-5'>
                  <div className="flex ">
                    <h1 className="mx-10 text-green-600">{headline.post}</h1>
                    <div
                      onClick={() => deleteHeadline(headline._id)}
                      className="mx-10 cursor-pointer bg-red-500 text-white"
                    >
                      Delete Headline
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex items-center justify-center">
          <FadeLoader color={`#FD3D57`} loading={loading} size={300} />
        </div>
      </section>
    </div>
  )
}

export default admin
