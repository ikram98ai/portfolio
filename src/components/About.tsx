const About = () => {
  interface Info {
    text: string;
    count: string;
  }
  const info: Info[] = [
    { text: "Years experience", count: "2" },
    { text: "Projects completed", count: "5" },
    { text: "Porfessional certificates", count: "2" },
  ];

  return (
    <section id="about" className="pb-10 text-white">
      <div className="text-4xl font-semibold  flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
        Innovative and detail-oriented software engineer with a BS in Software Engineering and two years of 
        hands-on experience in full-stack development. Specializing in Python, Django, and React.js, I bring 
        expertise in crafting efficient and scalable solutions. My proficiency extends to PostgreSQL, AWS Cloud, 
        and Machine Learning, supported by certifications in Meta Full-Stack Engineering, and AWS Cloud Technical Essentials.
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
