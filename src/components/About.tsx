const About = () => {
  interface Info {
    text: string;
    count: string;
  }
  const info: Info[] = [
    { text: "Projects completed", count: "5" },
    { text: "Porfessional certificates", count: "3" },
  ];

  return (
    <section id="about" className="pb-10 text-white">
      <div className="text-4xl font-semibold  flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
        Advance Data Analyst with experience in exploratory data analysis, data visualization, hypothesis testing, 
        logistic regression, and machine learning models like K-mean, Naive Bayes and decision trees. Excellent 
        understanding and proficiency of platforms for effective data analysis, cleaning, and visualization, 
        including spreadsheets, SQL, Python, and Tableau. Strong communication, organizational, and analytical 
        skills. Recently completed the Google Advanced Data Analytics Certificate—a rigorous, hands-on program 
        that covers the entire scope of the data analysis and data modeling process.
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
