import banner1 from "../../../../public/assets/images/banner/1.jpg";
import banner2 from "../../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../../public/assets/images/banner/4.jpg";
import banner5 from "../../../../public/assets/images/banner/5.jpg";
import banner6 from "../../../../public/assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner5}
            className="w-full h-[230px] lg:h-[700px] rounded-[12px]"
          />
          <div className="absolute lg:top-[135px] top-[45px] left-[30px] lg:left-[80px] ">
            <div className="w-[460px] space-y-2 lg:space-y-[30px]">
              <h1 className="lg:text-[60px] font-bold text-white lg:leading-[70px]">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-white text-lg lg:font-medium">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="lg:px-6 lg:py-3 px-3 py-2 text-sm lg:text-base font-semibold text-white rounded-md bg-[#FF3811]">
                  Discover More
                </button>
                <button className="lg:px-6 lg:py-3 px-3 py-2 font-semibold text-white rounded-md bg-transparent border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 lg:top-[650px]  top-[200px] right-5 lg:bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FFFFFF33] text-white border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] text-white border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full h-[230px] lg:h-[700px] rounded-[12px]"
          />
          <div className="absolute lg:top-[135px] top-[45px] left-[30px] lg:left-[80px]">
            <div className="w-[460px] space-y-2 lg:space-y-[30px]">
              <h1 className="lg:text-[60px] font-bold text-white lg:leading-[70px]">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-white text-lg lg:font-medium">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="lg:px-6 lg:py-3 px-3 py-2 text-sm lg:text-base font-semibold text-white rounded-md bg-[#FF3811]">
                  Discover More
                </button>
                <button className="lg:px-6 lg:py-3 px-3 py-2 font-semibold text-white rounded-md bg-transparent border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 lg:top-[650px]  top-[200px] right-5 lg:bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FFFFFF33] text-white border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] text-white border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
