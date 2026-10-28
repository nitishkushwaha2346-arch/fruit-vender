import { Link } from "react-router-dom";
import { useCart } from "../Components/Context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="cart-page">

      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>Your Cart is Empty 🛒</h2>

          <p>
            Please add some fresh fruits.
          </p>

          <Link className="checkout-back-link" to="/products">
            Browse fruits
          </Link>

        </div>

      ) : (

        <div className="cart-container">

          {cart.map((product) => (

            <div
              className="cart-item"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="cart-info">

                <h2>{product.name}</h2>

                <p>
                  ₹{product.price} / kg
                </p>

              </div>

              <div className="cart-quantity">
                <button
                  type="button"
                  aria-label={`Decrease ${product.name} quantity`}
                  onClick={() => decreaseQuantity(product.id)}
                >
                  −
                </button>
                <span aria-label={`Quantity: ${product.quantity}`}>
                  {product.quantity}
                </span>
                <button
                  type="button"
                  aria-label={`Increase ${product.name} quantity`}
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>

              <p className="cart-item-subtotal">
                ₹{product.price * product.quantity}
              </p>

              <button
                type="button"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <div className="cart-total-amount">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>
          <Link className="checkout-button" to="/checkout">
            Proceed to checkout
          </Link>
        </div>
      )}

    </div>
  );
}

export default Cart;