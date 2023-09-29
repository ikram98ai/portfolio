import { Swiper, SwiperSlide } from "swiper/react";
import ml from "../assets/images/ml.jpeg";
import meta_backend from "../assets/images/meta-backend.jpeg";

import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Certificate = () => {
  const certificates = [
    {
      img: ml,
      name: "Machine Learning Specialization",
      course_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/DJ3DNR43P5ZG",
      
    },
    {
      img: meta_backend,
      name: "Meta Back-End Developer Specialization",
      course_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/4AKWQ29RWJVY",
      
    },
  
  ];

  const [imageUrl, setImageUrl] =useState("")
  return (
    <section id="certificates">
      <div className="flex justify-center mt-16 text-4xl font-semibold gap-2">
        <h3 className="text-cyan-600">Certificates</h3>
      </div>
      <br />

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="flex max-w-3xl gap-6 mb-8 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
      >
        {certificates?.map((certificate, i) => (
          <SwiperSlide
            key={i}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <div className="w-62 h-52">
              <img onClick={()=> setImageUrl(certificate.img)} src={certificate.img} alt="" className="rounded-lg w-full h-full object-cover " />
            </div>
            <h3 className="text-lg truncate my-4">{certificate.name}</h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
              <a
                href={certificate.course_link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 bg-gray-800 rounded-full px-2 mb-4 py-1 flex w-32 justify-center"
              >
                Visit
              </a>
           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {imageUrl && <ImageModal imageUrl={imageUrl} setImageUrl={setImageUrl} />}

    </section>
  );
};

export default Certificate;
