import React from "react";
import "./works.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Polaroid from "../../components/Polaroid";
import Otrabotella from "../../img/otrabotella-min.jpg";
import MiCv from "../../img/cv.jpg";
import Calculadora from "../../img/calculadora-min.jpg";
import Descuentos from "../../img/descuentos-min.jpg";
import Figuras from "../../img/figuras-min.jpg";
import Viajes from "../../img/viajes-min.jpg";
import Categories from "../../categories";

const Works = () => {
  return (
    <div style={{height:"70vh"}} className="d-flex justify-content-center align-items-center">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints = {{
          1200: {
            slidesPerView: 3.2,
            spaceBetweenSlides: 10
        },
    // when window width is <= 1024px
        1024: {
            slidesPerView: 2.5,
            spaceBetweenSlides: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        // when window width is <= 768px
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        }
    }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Polaroid
            src={Otrabotella}
            Categories={[Categories["HTML"],Categories["CSS"],Categories["BOOTSTRAP"], Categories["JS"]]}
            link1={"https://otrabotella.netlify.app/"}
            link2={"https://github.com/MaximilianoCoceres/otra-botella"}
          />
          
        </SwiperSlide>
        <SwiperSlide>
          <Polaroid
            src={MiCv}
            Categories={[Categories["HTML"],Categories["CSS"], Categories["JS"]]}
            link1={"https://maxicoceres.netlify.app/"}
            link2={"https://github.com/MaximilianoCoceres/CV-portfolio"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Polaroid
            src={Calculadora}
            Categories={[Categories["HTML"],Categories["CSS"], Categories["JS"]]}
            link1={"https://calculadoramaxi.netlify.app/"}
            link2={"https://github.com/MaximilianoCoceres/calculadora"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Polaroid
            src={Descuentos}
            Categories={[Categories["HTML"],Categories["CSS"], Categories["JS"]]}
            link1={"https://descuentosmaxi.netlify.app/"}
            link2={"https://github.com/MaximilianoCoceres/Curso-practivo-JS-2---Platzi"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Polaroid
            src={Figuras}
            Categories={[Categories["HTML"],Categories["CSS"], Categories["JS"]]}
            link1={"https://areasfiguramaxi.netlify.app/"}
            link2={"https://github.com/MaximilianoCoceres/curso-practico-javascript"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Polaroid
            src={Viajes}
            Categories={[Categories["HTML"],Categories["CSS"], Categories["JS"]]}
            link1={"http://viaje-feliz.netlify.app/"}
            link2={"https://github.com/MaximilianoCoceres/Viaje-Feliz"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Works;
