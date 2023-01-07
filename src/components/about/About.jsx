import "./about.css";
import ME from "../../assets/me.jpeg";
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
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Client</h5>
              <small>200+ Client Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            As a front-end web developer, my focus is on creating clean code and pixel-perfect designs that are both visually appealing and easy to use. I specialize in creating interactive websites with web animations, and I prioritize responsive design to ensure that all users can access the site regardless of their device. My goal is to create a dynamic and engaging user experience that feels alive and reactive to user input. With my skills and expertise, I am confident in my ability to deliver high-quality websites that meet your needs and exceed your expectations. Please don't hesitate to contact me to discuss your project in further detail and see how I can be of value to you.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
