import "./about.css";
import ME from "../../assets/me.jpg";
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
            <img src="{ME}" alt="Me" />
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quo
            veniam quia possimus magnam harum eos itaque eligendi, voluptatibus
            voluptates, nesciunt ab rerum illum quidem, minima quam sed eaque
            quod.
          </p>
          <a href="#contact" className="btn btn-primary">Leat's Talk</a>
        </div>
      </div>
    </section>
  );
}
