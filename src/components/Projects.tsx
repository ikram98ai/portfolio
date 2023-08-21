import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/p1.png";
import project2 from "../assets/images/p2.png";
import project3 from "../assets/images/p3.png";
import project4 from "../assets/images/p4.png";
import project5 from "../assets/images/p5.png";
import project6 from "../assets/images/p6.png";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "DataScince App",
      github_link: "https://github.com/ikram9820/datalab.git",
    
    },
    {
      img: project2,
      name: "Online Utility Store App",
      github_link: "https://github.com/ikram9820/utstore.git",
      
    },
    {
      img: project3,
      name: "Book Sharing App (ai-powered)",
      github_link: "https://github.com/ikram9820/bookishpdf.git",
  
    },
    {
      img: project4,
      name: "Blog Social App",
      github_link: "https://github.com/ikram9820/EpicExplora.git",
    
    },
    {
      img: project5,
      name: "Online Medical Services",
      github_link: "https://github.com/ikram9820/medicalapi.git",
    
    },
    {
      img: project6,
      name: "Chat Api Services",
      github_link: "https://github.com/ikram9820/alphaapi.git",
  
    },
  ];

  const [imageUrl, setImageUrl] =useState("")
  return (
    <section id="projects">
      <div className="flex justify-center mt-16 text-4xl font-semibold gap-2">
        <h3 className="text-cyan-600">Projects</h3>
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
        {projects?.map((project, i) => (
          <SwiperSlide
            key={i}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <div className="w-62 h-52">
              <img onClick={()=> setImageUrl(project.img)} src={project.img} alt="" className="rounded-lg w-full h-full object-cover " />
            </div>
            <h3 className="text-xl my-4">{project.name}</h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 bg-gray-800 rounded-full px-2 mb-4 py-1 flex w-32 justify-center"
              >
                Github
              </a>
           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {imageUrl && <ImageModal imageUrl={imageUrl} setImageUrl={setImageUrl} />}

    </section>
  );
};

export default Project;
