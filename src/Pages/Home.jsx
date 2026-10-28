import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero-section">

        <div className="hero-content">
          <p className="small-title">🍃 100% Fresh Fruits</p>

          <h1>
            Fresh Fruits
            <br />
            Delivered To Your Door
          </h1>

          <p>
            Fresh, healthy and delicious fruits directly
            from our store to your home.
          </p>

          <Link to="/products">
            <button className="shop-btn">
              Shop Now <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b"
            alt="img not loaded fruits"
          />
        </div>

      </section>


      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-container">

          <div className="category-card">
            <img
              className="category-image"
              src="/images/marek-studzinski-3D6yReT06p0-unsplash.jpg"
              alt="Apples"
            />
            <h3>Apples</h3>
            <p>Fresh & Juicy</p>
          </div>

          <div className="category-card">
            <img
              className="category-image"
              src="/images/jen-gunter-A4BBdJQu2co-unsplash.jpg"
              alt="Oranges"
            />
            <h3>Oranges</h3>
            <p>Fresh & Sweet</p>
          </div>

          <div className="category-card">
            <img
              className="category-image"
              src="/images/fatemeh-zakeri-lkflaFuiXII-unsplash.jpg"
              alt="Mangoes"
            />
            <h3>Mangoes</h3>
            <p>King of Fruits</p>
          </div>

          <div className="category-card">
            <img
              className="category-image"
              src="/images/bernd-dittrich-l6sBLZr9mkQ-unsplash.jpg"
              alt="Grapes"
            />
            <h3>Grapes</h3>
            <p>Fresh & Healthy</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;