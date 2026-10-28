import { useCart } from "../Components/Context/CartContext";

function Products() {
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Apple",
      price: 120,
      image: "/images/marek-studzinski-3D6yReT06p0-unsplash.jpg"
    },

    {
      id: 2,
      name: "Banana",
      price: 60,
      image: "/images/rodrigo-dos-reis-DkTuGvgPotA-unsplash.jpg"
    },

    {
      id: 3,
      name: "Orange",
      price: 90,
      image: "/images/jen-gunter-A4BBdJQu2co-unsplash.jpg"
    },

    {
      id: 4,
      name: "Mango",
      price: 150,
      image: "/images/fatemeh-zakeri-lkflaFuiXII-unsplash.jpg"
    },

    {
      id: 5,
      name: "Grapes",
      price: 100,
      image: "/images/bernd-dittrich-l6sBLZr9mkQ-unsplash.jpg"
    },

    {
      id: 6,
      name: "Watermelon",
      price: 50,
      image: "/images/olga-finn-6EJJ1M4WECE-unsplash.jpg"
    },

    {
      id: 7,
      name: "Strawberry",
      price: 180,
      image: "/images/strawberry.jpg"
    },

    {
      id: 8,
      name: "Pineapple",
      price: 70,
      image: "/images/pineapple.jpg"
    },

    {
      id: 9,
      name: "Kiwi",
      price: 250,
      image: "/images/kiwi.jpg"
    }
  ];

  function handleAddToCart(product) {
    addToCart(product);
  }


  return (

    <main className="products-page">
      <header className="products-heading">
        <p>Picked for you</p>
        <h1>Our Fresh Fruits</h1>
        <span>Fresh favourites for every day, with clear prices per kilogram.</span>
      </header>

      <div className="products-container">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            {/* FRUIT IMAGE */}

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>


            {/* FRUIT NAME */}

            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="product-price">₹{product.price} <span>/ kg</span></p>
              <button
                className="cart-btn"
                type="button"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
            </div>

          </div>

        ))}

      </div>

    </main>

  );
}

export default Products;