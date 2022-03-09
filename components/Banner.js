import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";




function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t to-transparent  z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/NpPDyMm/IMG-20210912-224730-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/z42sCGh/Snapchat-793691721-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/HBM4tff/IMG-20211127-224323.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/9sxYyFM/IMG-20211127-224329.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ibb.co/VS6gnZt/IMG-20220310-020046-1.jpg"
            alt=""
          />
        </div>
  

      </Carousel>
    </div>
  );
}

export default Banner;


