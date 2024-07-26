import { Swiper, SwiperSlide } from "swiper/react";
import data_lab_img from "../assets/images/Data lab proj.png";
import bike_share from '../assets/images/cs_bike_share.png';
import fare_pred from '../assets/images/nyc-tlc-fare-pred.png';
import customer_generousity from '../assets/images/nyc-tlc-custgen-pred.png';
import cust_churn from '../assets/images/User Churn Analysis Project.png';
import video_claim from '../assets/images/TikTok video claim model report.png'
import emp_retention_pred from '../assets/images/Employee Retention Prediction executive summary.png';
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState } from "react";
import ImageModal from "./ImageModal";
const Projects = () => {
  const projects = [
    {
      img: video_claim,
      name: "TikTok video claim model's report",
      link: "https://www.kaggle.com/code/ikram98ai/taxi-fare-amount-and-generous-customer-prediction",
    },
  
    {
      img: cust_churn,
      name: "User Churn Analysis Project executive summary",
      link: "https://www.kaggle.com/code/ikram98ai/user-churn-prediction",
    },
    {
      img: emp_retention_pred,
      name: "Employee Retention Prediction executive summary",
      link: "https://www.kaggle.com/code/ikram98ai/google-capstone-employee-retention-prediction",
    },
    {
      img: customer_generousity,
      name: "New York City TLC Generous Customer Prediction",
      link: "https://www.kaggle.com/code/ikram98ai/taxi-fare-amount-and-generous-customer-prediction",
    },
    {
      img: fare_pred,
      name: "New York City TLC Fare Amount Prediction",
      link: "https://www.kaggle.com/code/ikram98ai/taxi-fare-amount-and-generous-customer-prediction",
    },
    {
      img: data_lab_img,
      name: "Web App: Data Lab",
      link: "https://github.com/ikram98ai/datalab",
    },
    {
      img: bike_share,
      name: "Case Study: Bike-Share",
      link: "https://github.com/ikram98ai/BikeShare",
    },
   
 
  ];

  const [imageUrl, setImageUrl] = useState("");
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
        className="flex  gap-6 mb-8 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
      >
        {projects?.map((projects) => (
          <SwiperSlide
            key={projects.link}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <div className=" ">
              <img
                onClick={() => setImageUrl(projects.img)}
                src={projects.img}
                alt={projects.name}
                className="rounded-lg w-full h-full object-cover "
                
              />
            </div>
            <h3 className="font-small my-4 font-semibold truncate">{projects.name}</h3>
            <div className="flex md:flex-row  flex-col items-center justify-center gap-3">
              <a
                href={projects.link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 font bg-gray-800 rounded-full px-2 mb-4 py-1 flex w-32 justify-center"
              >
                Learn more
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {imageUrl && <ImageModal imageUrl={imageUrl} setImageUrl={setImageUrl} />}
    </section>
  );
};

export default Projects;
