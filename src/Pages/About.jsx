import { ArrowRight, Heart, Leaf, ShoppingBasket, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "Fresh by choice",
    description:
      "We focus on the fruits people love, with freshness at the heart of every order.",
  },
  {
    icon: ShoppingBasket,
    title: "Simple shopping",
    description:
      "Find your favourites, see clear prices, and add what you need to your basket.",
  },
  {
    icon: Truck,
    title: "Made for convenience",
    description:
      "Shop from home and enjoy a straightforward way to get fruit to your door.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <p className="about-eyebrow">
            <Leaf size={16} aria-hidden="true" />
            A little more about us
          </p>
          <h1>Good fruit makes every day a little brighter.</h1>
          <p className="about-description">
            Fresh Fruits is here to make buying fruit feel easy. Browse a
            thoughtfully selected range, find something you love, and shop at
            your own pace.
          </p>
          <Link className="about-cta" to="/products">
            Explore our fruits <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="about-image">
          <img
            src="/images/jen-gunter-A4BBdJQu2co-unsplash.jpg"
            alt="Fresh oranges ready to enjoy"
          />
          <div className="about-image-note">
            <Heart size={17} aria-hidden="true" />
            <span>Fresh choices, made simple</span>
          </div>
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="about-section-heading">
          <p>What matters to us</p>
          <h2 id="about-values-title">A better way to shop for fruit</h2>
        </div>
        <div className="features">
          {values.map(({ icon: Icon, title, description }) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
