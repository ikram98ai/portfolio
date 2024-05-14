import { Swiper, SwiperSlide } from "swiper/react";
import da_img from "../assets/images/da_img.jpg";
import data_lab_img from "../assets/images/Data lab proj.png";
import cs_bike_share from '../assets/images/cs_bike_share.png';
import nyc_tlc_fare_pred from '../assets/images/nyc-tlc-fare-pred.png';
import nyc_tlc_customer_generocity from '../assets/images/nyc-tlc-custgen-pred.png';
import ml_specialization from '../assets/images/Machine Learning Specialization.jpg';
import adv_data_cert from '../assets/images/Google Advanced Data Analytics.jpg';
import emp_retention_pred from '../assets/images/Employee Retention Prediction executive summary.png';
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState } from "react";
import ImageModal from "./ImageModal";
const Accomplishments = () => {
  const accomplishments = [
   
  
    {
      img: emp_retention_pred,
      name: "Employee Retention Prediction executive summary",
      link: "https://github.com/ikram98ai/EmployeeRetentionPrediction/blob/main/Employee%20Retention%20Prediction.ipynb",
    },
    {
      img: nyc_tlc_customer_generocity,
      name: "New York City TLC Generous Customer Prediction executive summary",
      link: "https://github.com/ikram98ai/NYC-TLC-advance-analysis/blob/main/New%20York%20City%20TLC%20Generous%20customer%20prediction%20with%20tree%20ensembling.ipynb",
    },
    {
      img: nyc_tlc_fare_pred,
      name: "New York City TLC Fare Amount Prediction executive summary",
      link: "https://github.com/ikram98ai/NYC-TLC-advance-analysis/blob/main/New%20York%20City%20TLC%20fare%20amount%20prediction%20with%20linear%20regression.ipynb",
    },
    {
      img: data_lab_img,
      name: "Web App: Data Lab",
      link: "https://github.com/ikram98ai/datalab.git",
    },
    {
      img: cs_bike_share,
      name: "Case Study: Bike-Share",
      link: "https://docs.google.com/presentation/d/10XJFSffJlDVmQjNAPQAyTnOtQSbvLoaDqldelCS514g/edit?usp=sharing",
    },
    {
      img: adv_data_cert,
      name: "Google Advanced Data Analytics Specialization",
      link: "https://www.credly.com/badges/d3a2e2db-a562-4f86-9cc1-97367998a9fd/linked_in_profile",
    },
    {
      img: ml_specialization,
      name: "Machine Learning Specialization",
      link: "https://coursera.org/verify/specialization/DJ3DNR43P5ZG",
    },
    {
      img: da_img,
      name: "Google Data Analytics Specialization",
      link: "https://www.credly.com/badges/c03b95a8-a96f-4b3c-99ae-4b0dd69bf120/linked_in_profile",
    },
   
 
  ];

  const [imageUrl, setImageUrl] = useState("");
  return (
    <section id="accomplishments">
      <div className="flex justify-center mt-16 text-4xl font-semibold gap-2">
        <h3 className="text-cyan-600">Accomplishments</h3>
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
        {accomplishments?.map((certificate) => (
          <SwiperSlide
            key={certificate.link}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <div className=" ">
              <img
                onClick={() => setImageUrl(certificate.img)}
                src={certificate.img}
                alt={certificate.name}
                className="rounded-lg w-full h-full object-cover "
                
              />
            </div>
            <h3 className="text-md font-small my-4">{certificate.name}</h3>
            <div className="flex md:flex-row  flex-col items-center justify-center gap-3">
              <a
                href={certificate.link}
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

export default Accomplishments;
