import "./portfolio.css";
import { mobileApps } from "./portfolioData";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Mobile Apps</h2>
      <div className="container portfolio__container">
        <Article items={mobileApps} />
      </div>
    </section>
  );
}

const Article = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, image, title, github } = item;
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <br />
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};
