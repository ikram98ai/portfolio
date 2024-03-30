const About = () => {
  interface Info {
    text: string;
    count: string;
  }
  const info: Info[] = [
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
        Experienced Data Analyst with a focus on marketing analytics. Certified in Data Analytics by Google. Proficient
in Python, SQL, spreadsheet manipulation, conducting insightful analysis, Tableau visualization, and Meta Ads Manager. Skilled in streamlining
data retrieval and manipulation processes, creating visually compelling dashboards and reports, and optimizing
advertising campaigns on Meta platforms. Strong communicator able to translate complex insights into actionable
recommendations, fostering a data-driven culture for informed decision-making.
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
