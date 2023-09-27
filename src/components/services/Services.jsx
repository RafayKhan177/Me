import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  // Define an array of service objects
  const servicesData = [
    {
      title: "UI/UX Design",
      items: [
        "Conducting user research to understand the needs and goals of my clients' target audience",
        "Creating wireframes and prototypes to conceptualize the layout and functionality of a website or application.",
        "Designing user interfaces that are visually appealing and intuitive to use.",
        "Developing user flows and journey maps to illustrate how users will navigate through the website or application.",
      ],
    },
    {
      title: "Web and Mobile App Development",
      items: [
        "Designing and building websites and mobile apps from scratch using modern technologies and frameworks.",
        "Creating responsive and user-friendly apps and websites that look and function well on a variety of devices including desktop computers, tablets, and smartphones.",
        "Integrating apps and websites with databases and APIs to enable dynamic and interactive features.",
        "Developing custom apps and websites to meet specific business needs.",
        "Optimizing apps and websites for search engines to improve visibility and traffic.",
      ],
    },
    {
      title: "Content Creation",
      items: [
        "Writing website copy, including homepage content, product descriptions, and blog posts.",
        "Creating and curating social media posts and marketing materials.",
        "Developing content strategies to align with clients' business goals and target audience.",
        "Creating visual content such as infographics, videos, and graphics.",
        "Conducting keyword research and optimizing content for search engines.",
        "Editing and proofreading content to ensure accuracy and clarity.",
      ],
    },
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        {servicesData.map((service, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service__list">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
