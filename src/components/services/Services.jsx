import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  // Define an array of service objects
  const servicesData = [
    {
      title: "UI/UX Design",
      items: [
        "Customized User Interface Design tailored to your brand's identity and target audience.",
        "Intuitive User Experience Design focused on enhancing user satisfaction and engagement.",
        "Responsive Design ensuring seamless interaction across all devices and screen sizes.",
        "Wireframing and Prototyping to visualize and iterate on design concepts before implementation.",
      ],
    },
    {
      title: "Cross-Platform Development & Responsive Web Design",
      items: [
        "Expertise in developing versatile apps for Android, iOS, and web platforms.",
        "Utilization of technologies like React Native for efficient code sharing.",
        "Optimized performance and consistent user experience.",
        "Continuous integration and deployment for rapid updates.",
        "Fluid layouts adapting to different screens.",
        "Mobile-first approach for optimal user experience.",
        "Optimized performance for improved SEO.",
        "Accessibility features for broader audience reach.",
      ],
    },
    {
      title: "API Integration",
      items: [
        "Seamless integration of various APIs, including Google APIs like Google Places, Maps, and others.",
        "Enhanced functionality and data access through third-party services and platforms.",
        "Custom API development to meet specific project requirements and business needs.",
        "Secure authentication and authorization protocols to protect sensitive data.",
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
