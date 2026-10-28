import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Apple,
  Home,
  Info,
  LogIn,
  Mail,
  Menu,
  Package,
  ShoppingBasket,
  X,
} from "lucide-react";
import { useCart } from "./Context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink className="logo" to="/" onClick={closeMenu} aria-label="Fresh Fruits home">
          <span className="logo-mark">
            <Apple size={23} strokeWidth={2.2} />
          </span>
          <span className="logo-copy">
            <span className="logo-name">Fresh Fruits</span>
            <span className="logo-tagline">Freshness, delivered</span>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/products" onClick={closeMenu}>
            <Package size={18} />
            <span>Products</span>
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            <Info size={18} />
            <span>About</span>
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            <Mail size={18} />
            <span>Contact</span>
          </NavLink>
          <NavLink className="cart-link" to="/cart" onClick={closeMenu}>
            <ShoppingBasket size={19} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </NavLink>
          <NavLink className="login-link" to="/login" onClick={closeMenu}>
            <LogIn size={17} />
            <span>Login</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;