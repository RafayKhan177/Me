import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Conducting user research to understand the needs and goals of my clients' target audience</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Creating wireframes and prototypes to conceptualize the layout and functionality of a website or application.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Designing user interfaces that are visually appealing and intuitive to use.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Developing user flows and journey maps to illustrate how users will navigate through the website or application.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Designing and building websites from scratch using languages such as HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Creating responsive websites that look and function well on a variety of devices including desktop computers, tablets, and smartphones.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Integrating websites with databases and APIs to enable dynamic and interactive features.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Developing custom web applications to meet specific business needs.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Optimizing websites for search engines to improve visibility and traffic.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Writing website copy, including homepage content, product descriptions, and blog posts.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Creating and curating social media posts and marketing materials.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Developing content strategies to align with clients' business goals and target audience.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Creating visual content such as infographics, videos, and graphics.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Conducting keyword research and optimizing content for search engines.</p>
            </li>
            <li>
              <BiCheck className=" service__list-icon" />
              <p>Editing and proofreading content to ensure accuracy and clarity.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
