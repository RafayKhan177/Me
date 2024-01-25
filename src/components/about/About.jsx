import "./about.css";
import ME from "../../assets/meP.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__contant">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Client</h5>
              <small>47+ Client Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>62+ Completed</small>
            </article>
          </div>
          <p>
            Hi 👋! I'm Rafay, highly motivated and self-taught cross-platform
            developer with 2+ year of experience building web, Android, and iOS
            applications. Skilled in design systems and APIs, I have a proven
            track record of successfully collaborating with clients on freelance
            projects and delivering high-quality solutions. Currently pursuing a
            Bachelor's degree in Computer Science.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
