import { FaDocker, FaPython } from "react-icons/fa";
import { DiPostgresql} from "react-icons/di";
import { SiPytorch, SiDjango} from "react-icons/si";
import { BsGit} from "react-icons/bs";


const Skills = () => {
  const skills = [
    { icon: <FaPython />,name:"Python", skill:"Programming", level: "Expert" },
    { icon: <SiDjango />,name:"Django", skill:"Web Development",level: "Expert" },
    { icon: <DiPostgresql />,name:"PostgreSQL", skill:"Database Designing",level: "intermediate" },
    { icon: <BsGit />,name:"Git", skill:"Version Control",level: "beginner" },
    { icon: <FaDocker />,name:"Docker", skill:"Containerization",level: "beginner" },
    { icon: <SiPytorch />,name:"Pytorch", skill:"Machine Learning",level: "beginner" },
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
      <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
      <ul className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills?.map((skill, i) => (
          <li key={i}>
            <div className="text-5xl flex justify-center">{skill.icon}</div>
            <div className="text-sm font-bold">{skill.name}</div>
            <div className="text-xxs mt-2 font-bold text-gray-500">{skill.skill}</div>
            <div className="text-xxs font-bold text-gray-500">{skill.level}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
