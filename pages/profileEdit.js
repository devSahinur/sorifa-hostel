import Head from 'next/head'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FadeLoader from 'react-spinners/FadeLoader'
import axios from 'axios'

function profileEdit() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [user, setUser] = useState()
  let [loading, setLoading] = useState(true)
  const [images, setImageURL] = useState('')
  const [isClick, setIsClick] = useState(true)

  console.log(images)

  useEffect(async () => {
    const res = await fetch('/api/user')
    const data = await res.json()
    setUser(data.Login[0])
    if (isClick) {
      setImageURL(data.Login[0].image)
    }
    setLoading(false)
  }, [])

  const handleImageUpload = (event) => {
    setIsClick(false)
    const imageData = new FormData()
    imageData.set('key', '701a71fc100ddc2599c9438b268fee30')
    imageData.append('image', event.target.files[0])

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then((response) => {
        setImageURL(response.data.data.display_url)
        console.log(imageURL)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onSubmit = async (data) => {
    console.log(data)
    const res = await fetch(`/api/user?userId=${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _id: user._id,
        image: images,
        email: user.email,
        verified: user.verified,
        payData: user.payData,
      }),
    })

    if (res.ok) {
      console.log('User Update done')
      router.push('/myinfo')
    }
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
          <div className="flex items-center justify-center">
            <img
              className=" mt-5 h-32 w-32 rounded-full "
              src={images}
              alt=""
            />
            <span
              onClick={() => document.querySelector('.input_file').click()}
              className="-ml-5 mb-10 cursor-pointer"
            >
              <input
                type="file"
                onChange={handleImageUpload}
                className="input_file hidden  cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
          </div>
          <div className="container col-span-9 mt-6 rounded px-6 pt-5 pb-7 shadow lg:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="mb-4 text-lg font-medium capitalize">
                Profile Information
              </h3>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      className="input-box"
                      placeholder="Enter your full name?"
                      defaultValue={user?.name}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">Username</label>
                    <input
                      type="text"
                      {...register('customName', { required: true })}
                      className="input-box"
                      placeholder="Enter your username like mrX123"
                      defaultValue={user?.customName}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-gray-600">Birthday</label>
                    <input
                      {...register('birthday', { required: true })}
                      type="date"
                      className="input-box"
                      defaultValue={user?.birthday}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">semester</label>
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
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">Shift</label>
                    <select
                      {...register('shift', { required: true })}
                      className="input-box"
                      defaultValue={user?.shift}
                    >
                      <option>1st</option>
                      <option>2nd</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">
                      Department
                    </label>
                    <select
                      {...register('department', { required: true })}
                      className="input-box"
                      defaultValue={user?.department}
                    >
                      <option>Architechture Technology</option>
                      <option>Computer Technology</option>
                      <option> Food Technology</option>
                      <option>RAC Technology</option>
                      <option>Mechatronics Technology</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="input-box"
                      placeholder="Enter your email?"
                      value={user?.email}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="input-box"
                      {...register('phoneNumber', { required: true })}
                      placeholder="+8801234567891"
                      defaultValue={user?.phoneNumber}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-gray-600">
                      Collage Name
                    </label>
                    <select
                      {...register('collageName', { required: true })}
                      className="input-box"
                      defaultValue={user?.collageName}
                    >
                      <option>Thakurgaon Polytechnic Institute</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">Address</label>
                    <input
                      type="text"
                      className="input-box"
                      {...register('address', { required: true })}
                      placeholder="Enter your full address ?"
                      defaultValue={user?.address}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">
                      Guardian Name
                    </label>
                    <input
                      {...register('guardianName', { required: true })}
                      type="text"
                      className="input-box"
                      placeholder="Enter your Guardian Name ?"
                      defaultValue={user?.guardianName}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">
                      Guardian Number
                    </label>
                    <input
                      {...register('guardianNumber', { required: true })}
                      type="text"
                      className="input-box"
                      placeholder="Enter your Guardian Phone Number ?"
                      defaultValue={user?.guardianNumber}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">Room No</label>
                    <select
                      {...register('room', { required: true })}
                      className="input-box"
                      defaultValue={user?.room}
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">
                      What Your Experience?
                    </label>
                    <input
                      {...register('experience')}
                      type="text"
                      className="input-box"
                      placeholder="Enter Your Experience?"
                      defaultValue={user?.experience}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-gray-600">
                      Enter Your Bio ?
                    </label>
                    <input
                      {...register('bio')}
                      type="text"
                      className="input-box"
                      placeholder="Enter your bio Data ?"
                      defaultValue={user?.bio}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <input
                  type="submit"
                  defaultValue="Save change"
                  className="cursor-pointer rounded border border-primary bg-primary px-6 py-2 text-center font-roboto font-medium uppercase text-white transition hover:bg-transparent hover:text-primary"
                />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default profileEdit
