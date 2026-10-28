import { useState } from "react";
import { ArrowLeft, Banknote, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/Context/CartContext";

function Checkout() {
  const { cart, cartTotal } = useCart();
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(
      "Your order has not been placed: this project does not have an order service connected yet. Your details were not sent or saved."
    );
  }

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <section className="checkout-empty">
          <ShoppingBasket size={36} aria-hidden="true" />
          <h1>Your basket is empty</h1>
          <p>Add some fruit before continuing to checkout.</p>
          <Link className="checkout-button" to="/products">
            Browse fruits
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <Link className="checkout-back" to="/cart">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to cart
      </Link>

      <div className="checkout-layout">
        <section className="checkout-form-card">
          <p className="checkout-eyebrow">
            <Banknote size={17} aria-hidden="true" />
            Cash on Delivery
          </p>
          <h1>Delivery details</h1>
          <p className="checkout-description">
            Enter where you would like your fruit delivered.
          </p>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-field">
              <label htmlFor="delivery-name">Full name *</label>
              <input
                id="delivery-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                onChange={() => setStatus("")}
              />
            </div>
            <div className="checkout-field">
              <label htmlFor="delivery-phone">Phone number *</label>
              <input
                id="delivery-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                onChange={() => setStatus("")}
              />
            </div>
            <div className="checkout-field">
              <label htmlFor="delivery-address">Delivery address *</label>
              <textarea
                id="delivery-address"
                name="address"
                autoComplete="street-address"
                required
                onChange={() => setStatus("")}
              />
            </div>

            <div className="checkout-payment">
              <Banknote size={20} aria-hidden="true" />
              <div>
                <strong>Cash on Delivery</strong>
                <p>Pay when your order arrives.</p>
              </div>
            </div>

            <button className="checkout-button checkout-submit" type="submit">
              Confirm COD order · ₹{cartTotal}
            </button>
            <p className="checkout-status" role="status" aria-live="polite">
              {status}
            </p>
            <p className="checkout-demo-note">
              Checkout is not connected to a store order service yet. Submitting
              this form will not place or send an order.
            </p>
          </form>
        </section>

        <aside className="checkout-summary">
          <h2>Order summary</h2>
          <div className="checkout-summary-items">
            {cart.map((item) => (
              <div className="checkout-summary-item" key={item.id}>
                <span>
                  {item.name} <small>× {item.quantity}</small>
                </span>
                <strong>₹{item.price * item.quantity}</strong>
              </div>
            ))}
          </div>
          <div className="checkout-summary-total">
            <span>Total to pay on delivery</span>
            <strong>₹{cartTotal}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
