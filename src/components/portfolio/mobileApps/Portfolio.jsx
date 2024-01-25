import "./portfolio.css";
import { webApps, mobileApps } from "./portfolioData";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Mobile Apps</h2>
      <div className="container portfolio__container">
        <Article items={webApps} />
        <Article items={mobileApps} />
      </div>
    </section>
  );
}

const Article = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, image, title, github, category } = item;
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <h5 style={{ marginBottom: 5 }}>{category}</h5>
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
