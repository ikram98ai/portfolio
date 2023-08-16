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

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "DataScince App",
      github_link: "https://github.com/ikram9820/datalab.git",
      live_link: "www.google.com",
    },
    {
      img: project2,
      name: "Online Utility Store App",
      github_link: "https://github.com/ikram9820/utstore.git",
      live_link: "www.google.com",
    },
    {
      img: project3,
      name: "Book Sharing  App",
      github_link: "https://github.com/ikram9820/bookishpdf.git",
      live_link: "www.google.com",
    },
    {
      img: project4,
      name: "Blog App",
      github_link: "https://github.com/ikram9820/EpicExplora.git",
      live_link: "www.google.com",
    },
    {
      img: project5,
      name: "Online Medical Services  App",
      github_link: "https://github.com/ikram9820/medicalapi.git",
      live_link: "www.google.com",
    },
    {
      img: project6,
      name: "Chat app",
      github_link: "https://github.com/ikram9820/alphaapi.git",
      live_link: "www.google.com",
    },
  ];
  return (
    <section id="projects">
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">Projects</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg flex justify-center">
        My awesome work
      </p>
      <br />

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="flex max-w-3xl gap-6 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
      >
        {projects?.map((projects, i) => (
          <SwiperSlide
            key={i}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <img src={projects.img} alt="" className="rounded-lg" />
            <h3 className="text-xl my-4">{projects.name}</h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
              <a
                href={projects.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 bg-gray-800 rounded-full px-2 py-1 flex w-32 justify-center"
              >
                Github
              </a>
              {/* <a
                href={projects.live_link}
                rel="noreferrer"
                target="_blank"
                className="text-cyan-600 flex rounded-full bg-gray-800 px-2 py-1 w-32 justify-center"
              >
                Live Demo
              </a> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
