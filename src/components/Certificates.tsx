import { Swiper, SwiperSlide } from "swiper/react";
import backend_meta from "../assets/images/backend_meta.jpeg";
import python_google from "../assets/images/python_google.jpeg";
import python_meta from "../assets/images/python_meta.jpeg";
import database_meta from "../assets/images/database_meta.jpeg";
import django_meta from "../assets/images/django_meta.jpeg";

import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Certificate = () => {
  const certificates = [
    {
      img: python_meta,
      name: "Programming in Python",
      course_link: "https://www.coursera.org/account/accomplishments/certificate/WFH8C72Q2KNF",
      
    },
    {
      img: python_google,
      name: "Crash Course on Python",
      course_link: "https://www.coursera.org/account/accomplishments/certificate/8KLJF35RTPDX",
        
      },
    {
      img: backend_meta,
      name: "Introduction to Back-End Development",
      course_link: "https://www.coursera.org/account/accomplishments/certificate/U2PTE3J3A4RV",
    
    },
    {
      img: django_meta,
      name: "Django Web Framework",
      course_link: "https://www.coursera.org/account/accomplishments/certificate/23PY22KUYY9G",
    
    },
    {
      img: database_meta,
      name: "Introduction to Databases for Back-End Development",
      course_link: "https://www.coursera.org/account/accomplishments/certificate/SS245XANSZD5",
    
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
                Verify
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
