import CommonDashboardButton from "@/common/CommonDashBoardButton";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../assets/Dashboard/board1.jpg";
import img2 from "../../../../assets/Dashboard/board2.jpg";
import img3 from "../../../../assets/Dashboard/board3.jpg";
import img4 from "../../../../assets/Dashboard/board4.jpg";
import img5 from "../../../../assets/Dashboard/board5.jpg";
import logo from "../../../../assets/logo.png";

const slidesData = [
  { img: img1, alt: "Billboard 1" },
  { img: img2, alt: "Billboard 2" },
  { img: img3, alt: "Billboard 3" },
  { img: img4, alt: "Billboard 4" },
  { img: img5, alt: "Billboard 5" },
];

const DashboardBanner = () => {
  return (
    <div className="mt-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper h-[300px] xl:max-w-[1800px] lg:max-w-7xl md:max-w-2xl mx-auto m-0 p-0 w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={slide.alt}
                className="object-cover w-full h-full"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-black/30  flex flex-col justify-center items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-24 h-24 mb-4 object-contain"
                />
                <Link to="/new-campaign">
                  <CommonDashboardButton title="New Campaign " Icon={Plus} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardBanner;
