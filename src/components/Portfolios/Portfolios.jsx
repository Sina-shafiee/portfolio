// importing ref for setting custom arrows
import { useRef } from "react";

//  importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

// importing styles
import "./Portfolios.css";

import { Slide } from "react-awesome-reveal";

// importing images
import Line from "../../assets/images/line.svg";
import LinkIcon from "../../assets/images/Link.svg";

import SiteOne from "../../assets/images/site-1.jpg";
import SiteTow from "../../assets/images/site-2.jpg";
import SiteThree from "../../assets/images/site-3.jpg";

import ArrowLeft from "../../assets/images/arrow-left.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";

// portfolio cards data
const cardData = [
  {
    img: SiteOne,
    title: "Agency Website.",
    technologies: ["wordpress"],
    link: "https://www.somewhere.com"
  },
  {
    img: SiteTow,
    title: "Dashboard Website.",
    technologies: ["react"],
    link: "https://www.somewhere.com"
  },
  {
    img: SiteThree,
    title: "Support Center Website.",
    technologies: ["php"],
    link: "https://www.somewhere.com"
  }
];

// checking how much card should be visbile on slider based on screen size
const checkScreenForCard = () => {
  if (window.innerWidth > 640 && window.innerWidth < 900) {
    return 2;
  } else if (window.innerWidth > 900) {
    return 3;
  } else {
    return 1;
  }
};

const Portfolios = () => {
  const swiperNavNextRef = useRef(null);
  const swiperNavPrevRef = useRef(null);

  return (
    <section id="portfolios" className=" py-24 container mx-auto px-4">
      <section className="flex justify-between items-center">
        <div>
          <div className="flex gap-2">
            <img src={Line} alt="line" />
            <p className="font-['Inter'] tracking-[7.5px] font-medium text-[12px] dark:text-slate-200 text-[#656D72]">
              MY WORKS
            </p>
          </div>
          <h4 className="font-semibold mt-2 text-2xl">Featured Portfolios</h4>
        </div>
        <div>
          <div className="flex gap-2">
            <div
              ref={swiperNavPrevRef}
              className=" p-1 cursor-pointer rounded-full bg-[#f0edff] hover:bg-[#EAE6FE] transition-all active:scale-[1.1] duration-500"
            >
              <img
                className="w-8 h-8"
                src={ArrowLeft}
                alt="to left arrow icon"
              />
            </div>
            <div
              ref={swiperNavNextRef}
              className=" p-1 cursor-pointer rounded-full bg-[#f0edff] hover:bg-[#EAE6FE] transition-all active:scale-[1.1] duration-500"
            >
              <img
                className="w-8 h-8"
                src={ArrowRight}
                alt="to rigth arrow icon"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 ">
        <Slide direction="up" triggerOnce>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current
            }}
            effect
            speed={200}
            spaceBetween={50}
            slidesPerView={checkScreenForCard()}
            loop
            className="cardSwiper"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;

              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {cardData.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <section
                    className="cursor-grab  rounded-lg border-l border-r border-b dark:border-none relative min-h-[439px]"
                    style={{
                      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${card.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  >
                    <div className="absolute p-6 bg-white backdrop-brightness-0 dark:bg-[#303030] bottom-0 left-0 right-0 w-full">
                      <h4>{card.title}</h4>
                      <div className="flex items-center gap-2 font-thin text-sm">
                        {card.technologies.map((tech, index) => {
                          return (
                            <p
                              key={index}
                              className="border py-1 px-4 mt-4 rounded-md "
                            >
                              {tech.toLocaleLowerCase()}
                            </p>
                          );
                        })}

                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="w-8 h-7 mt-4"
                            src={LinkIcon}
                            alt="link icon"
                          />
                        </a>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Slide>
      </section>
    </section>
  );
};

export default Portfolios;
