const About = () => {
 
  
  return (
    <section id="about" className="pb-10 text-white">
      <div className="text-4xl font-semibold  flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
        I am an expert Data Scientist with extensive experience in exploratory data analysis, data visualization, statistical analysis, regression analysis, and training machine learning and deep learning models. Highly skilled in using tools like Excel, SQL, Tableau, Python, and PyTorch for effective data analysis, cleaning, and visualization, and training predictive models. Possess strong analytical abilities, attention to detail, and clear communication of complex data insights. Excellent organizational skills and proven success in managing and delivering projects efficiently.        </p>
        <ul className="mt-10 mx-4 flex items-center justify-center md:gap-48 gap-6">
        </ul>
      </div>
    </section>
  );
};
export default About;
