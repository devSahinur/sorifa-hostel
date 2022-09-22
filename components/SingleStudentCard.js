import React from 'react'

function SingleStudentCard({ student }) {
  console.log(student)
  return (
    <div>
      {/* className="w-2/3 max-w-full flex-shrink px-4 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6" */}
      <div
        className="hover-grayscale-0 wow fadeInUp relative mb-12 overflow-hidden bg-white dark:bg-gray-800"
        data-wow-duration="1s"
        data-wow-delay=".5s"
        //   style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: fadeInUp;"
      >
        <div className="relative overflow-hidden px-6">
          <img
            src={student?.image}
            className="mx-auto h-[200px] w-[200px] max-w-full rounded-full object-fill "
            alt={student.name}
          />
        </div>
        <div className="pt-6 text-center">
          <p title={student.name} className="mb-1 text-lg font-bold leading-normal">
            {student.name}
          </p>
          <p className="font-light leading-relaxed text-gray-500">
            Department : {student.department}
          </p>
          <p className="font-light leading-relaxed text-gray-500">
            {student.semester} semester
          </p>
          <div className="mt-2 mb-5 space-x-2">
            <button className="rounded  bg-red-400 py-2    px-4  font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-red-600 focus:outline-none">
              Contract
            </button>
            <button className="rounded  bg-red-400 py-2    px-4  font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-red-600 focus:outline-none">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleStudentCard
