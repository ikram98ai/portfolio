import { FaPython,FaAws } from "react-icons/fa";
import { SiPytorch, SiDjango, SiReact } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaPython />,
      name: "Python",
      skill: "Programming",
      level: "Expert",
    },
    {
      icon: <SiReact />,
      name: "React",
      skill: "Front-end",
      level: "Expert",
    },

    {
      icon: <SiDjango />,
      name: "Django",
      skill: "Back-end",
      level: "Expert",
    },

    {
      icon: <FaAws />,
      name: "Amazon Web Services",
      skill: "Cloud Computing",
      level: "Intermediate",
    },
    {
      icon: <SiPytorch />,
      name: "Pytorch",
      skill: "Machine Learning",
      level: "Beginner",
    },
  ];
  return (
    <section
      id="skills"
      className="py-10 bg-gray-800 mt-8 text-gray-100 text-center"
    >
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">Skills</h3>
      </div>
      <ul className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills?.map((skill, i) => (
          <li key={i}>
            <div className="text-5xl flex justify-center">{skill.icon}</div>
            <div className="text-sm font-bold">{skill.name}</div>
            <div className="text-xxs mt-2 font-bold text-gray-500">
              {skill.skill}
            </div>
            <div className="text-xxs font-bold text-gray-500">
              {skill.level}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
