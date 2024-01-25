import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const fSkills = [
  { name: "JavaScript", level: "Experience" },
  { name: "React.Js", level: "Experience" },
  { name: "Next.Js", level: "Experience" },
  { name: "React Native", level: "Experience" },
  { name: "Many more...", level: "Intermediate" },
];

const bSkills = [
  { name: "Firebase", level: "Experience" },
  { name: "Node.Js", level: "Experience" },
  { name: "Python", level: "Intermediate" },
  { name: "JavaScript", level: "Experience" },
  { name: "TypeScript", level: "Experience" },
  { name: "Many more...", level: "Experience" },
];

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {fSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {bSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
