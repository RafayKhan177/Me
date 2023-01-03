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
            Hello everyone! My name is Rafay and I am a front-end web developer.
            I specialize in creating clean code and pixel perfect designs. My
            goal is to always make the website more interactive with web
            animations. A responsive design makes your website accessible to all
            users, regardless of their device. This is important because it
            ensures that everyone can access your site no matter what type of
            device they are using. As a web developer, I am always looking for
            ways to make my websites more interactive and engaging for users. We
            can create a more fluid and dynamic experience that feels alive and
            reacting to the user’s input. This makes more enjoyable experience
            for your users.
          </p>
          <a href="#contact" className="btn btn-primary">
            Leat's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
