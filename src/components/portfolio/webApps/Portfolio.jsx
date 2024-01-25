import "./portfolio.css";
import { webApps } from "./portfolioData";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Web Apps</h2>
      <div className="container portfolio__container">
        <Article items={webApps} />
      </div>
    </section>
  );
}

const Article = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, image, title, github, demo, category } = item;
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <br />
            <div className="portfolio__item-cta">
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};
