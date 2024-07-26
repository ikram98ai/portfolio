import da_img from "../assets/images/data-analytics-certificate.png";
import ada_img from "../assets/images/advanced-data-analytics-certificate.png";

const Certificates = () => {
  const certificates = [
    {
      img: ada_img,
      name: "Google Advanced Data Analytics Specialization",
      link: "https://www.credly.com/badges/d3a2e2db-a562-4f86-9cc1-97367998a9fd/linked_in_profile",
    },
    {
      img: da_img,
      name: "Google Data Analytics Specialization",
      link: "https://www.credly.com/badges/c03b95a8-a96f-4b3c-99ae-4b0dd69bf120/linked_in_profile",
    },
  ];

  return (
    <section id="certificates">
      <div className="text-4xl mt-16  font-semibold  flex justify-center gap-2">
        <h3>Certified by</h3>
        <h3 className="text-cyan-600">Google</h3>
      </div>
      <br />
      <div className="flex gap-6 mb-8 px-5 mx-auto items-center justify-center lg:w-2/3 w-full  inline-block">
        {certificates?.map((certificate) => (
          <a
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-2 mb-4 py-1 w-96 justify-center inline-block"
          >
            <img
              src={certificate.img}
              alt={certificate.name}
              className="rounded-lg object-cover inline-block "
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
