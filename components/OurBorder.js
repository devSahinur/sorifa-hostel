import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"

const Reviews = [
  {
    name: 'Sahinur islam',
    address: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
    img: 'https://i.ibb.co/HDnC8XH/winson.png',
    star: '5',
  },
  {
    name: 'Sahinur islam',
    address: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
    img: 'https://i.ibb.co/HDnC8XH/winson.png',
    star: '5',
  },
  {
    name: 'Sahinur islam',
    address: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
    img: 'https://i.ibb.co/HDnC8XH/winson.png',
    star: '5',
  },
  {
    name: 'Sahinur islam',
    address: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
    img: 'https://i.ibb.co/HDnC8XH/winson.png',
    star: '5',
  },
]
function OurBorder() {
    SwiperCore.use([Pagination, Autoplay]);
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 max-w-xl text-center md:mb-12 lg:max-w-2xl">
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          আপনার পছন্দের প্যাকেজ নির্বাচন করুন
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          প্রথম মাসে জামানত ৭০০ টাকা, উন্নয়ন ফি ৫০০ টাকা এবং ওয়াইফাই সংযোগ ফি
          ২০০ টাকা দিতে হবে।
        </p>
      </div>
      <div className=" inline-blok">
        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
        >
          {Reviews.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial._id}>
                <img src={testimonial.img} alt="" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default OurBorder
