const About = () => {
  interface Info {
    text: string;
    count: string;
  }
  const info: Info[] = [
    { text: "Years experience", count: "2" },
    { text: "Projects completed", count: "7" },
    { text: "Certificates", count: "3" },
  ];

  return (
    <section id="about" className="pb-10 text-white">
      <div className="text-4xl font-semibold  flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold">My Introduction</p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
          Highly skilled and motivated Full-stack developer with hands-on
          experience in developing scalable web applications. Committed to
          delivering efficient and robust code solutions, I strive to contribute
          effectively to a dynamic team environment. Seeking a challenging role
          to leverage my expertise and further enhance my skills in a
          growth-oriented organization.
        </p>
        <ul className="mt-10 mx-4 flex items-center justify-center md:gap-48 gap-6">
          {info.map((content, i) => (
            <li key={i}>
              <div className="flex-col">
                <div className="flex">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {" "}
                    {content.count}{" "}
                  </h3>
                  <h3 className="text-cyan-600 font-bold text-2xl">+</h3>
                </div>
                <h3 className="md:text-base text-xs">{content.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default About;
