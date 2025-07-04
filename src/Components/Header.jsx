import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/index.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/img/logo.png" alt="logo" className="header-logo" />
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu (collapse) */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-links d-flex flex-column flex-md-row">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalog">
                Catalogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/novelty">
                Novità
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="icon-link wishlist-icon" to="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="icon-link cart-icon" to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
