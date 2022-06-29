import React, { useEffect, useState } from 'react'
import SingleStudentCard from './SingleStudentCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

function OurStudents() {
  const [students, setStudents] = useState([])

  useEffect(async () => {
    const res = await fetch(`/api/alluser`)
    const data = await res.json()
    setStudents(data?.data)
  }, [])

  // student filter if verified or not
  const verifiedStudents = students.filter(
    (student) => student.verified === true
  )

  return (
    <div
      id="team"
      className="section relative bg-white pt-20 pb-8 dark:bg-gray-800 md:pt-16"
    >
      <div className="container mx-auto px-4 xl:max-w-6xl">
        <header className="mx-auto mb-24 text-center">
          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            আমাদের হোস্টেলের যারা থাকে
          </h2>
        </header>

        <div className="-mx-4 flex flex-row flex-wrap justify-center">
          <Swiper
            // ref={sliderRef}
            loop={true}
            className="mySwiper"
            // pagination={pagination}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              414: {
                slidesPerView: 1,
                spaceBetween: 2,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
                slidesPerGroup: 4,
              },
            }}
          >
            {verifiedStudents.map((student, index) => (
              <SwiperSlide key={index}>
                <SingleStudentCard student={student} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* card */}
        </div>
      </div>
    </div>
  )
}

export default OurStudents
