import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FadeLoader } from 'react-spinners'
import Header from '../../components/Header'

function id({ data }) {
  console.log(data)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const [user, setUser] = useState()
  let [loading, setLoading] = useState(true)

  useEffect(async () => {
    const res = await fetch('/api/user')
    const data = await res.json()
    setUser(data.Login[0])
    setLoading(false)
  }, [])

  const onSubmit = async (data) => {
    console.log(data)
    // const res = await fetch(`/api/user?userId=${user._id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...data,
    //     _id: user._id,
    //     email: user.email,
    //     image: user.image,
    //     verified: user.verified,
    //     payData: user.payData,
    //   }),
    // })

    // if (res.ok) {
    //   console.log('User Update done')
    //   router.push('/admin')
    // }
  }

  return (
    <div>
      <Header />
      <Head>
        <title>Edit Profile - Sorifa Hostel</title>
      </Head>
      {loading ? (
        <div className="mt-40 flex items-center justify-center">
          <FadeLoader color={`#FD3D57`} loading={loading} size={300} />
        </div>
      ) : (
        <>
          <div className="container col-span-9 mt-6 rounded px-6 pt-5 pb-7 shadow lg:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="mb-4 text-lg font-medium capitalize">
                Admin Control Panel
              </h3>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex">
                    <label className=" mr-10 text-xl text-gray-600">
                      Verified
                    </label>
                    <input
                      {...register('verified')}
                      type="checkbox"
                      className="mt-2"
                      defaultChecked={data?.verified}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">Month Name</label>
                    <input
                      type="text"
                      {...register('customName', { required: true })}
                      className="input-box"
                      placeholder="Enter your username like mrX123"
                      defaultValue={user?.customName}
                    />
                  </div>
                  <div>
                    {/* <label className="mb-2 block text-gray-600">semester</label>
                    <select
                      {...register('semester', { required: true })}
                      className="input-box"
                      defaultValue={user?.semester}
                    >
                      <option>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                      <option>4th</option>
                      <option>5th</option>
                      <option>6th</option>
                      <option>7th</option>
                      <option>8th</option>
                    </select> */}
                  </div>

                  <div className="mt-6">
                    <input
                      type="submit"
                      value="Save change"
                      className="cursor-pointer rounded border border-primary bg-primary px-6 py-2 text-center font-roboto font-medium uppercase text-white transition hover:bg-transparent hover:text-primary"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default id

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.HOST}/api/user/${id}`)
  const data = await res.json()

  // const resAll = await fetch(`${process.env.HOST}/api/product`);
  // const allData = await resAll.json();

  return {
    props: {
      data: data.data,
    },
  }
}
