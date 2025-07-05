import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearch } from "../Contexts/SearchContext";
import { faHeart, faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/index.css";
import SearchBar from "./SearchBar";

export default function Header() {
  const {setSearch} = useSearch();
  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between w-100 flex-nowrap">
        {/* Colonna sinistra: logo */}
        <div className="navbar-brand d-flex align-items-center">
          <Link to="/" className="brand-link">
            <img src="/img/logo.png" alt="logo" className="header-logo" />
            <h1 className="gradient-text">ZneakDrop</h1>
          </Link>
        </div>

        {/* Colonna centrale: searchbar */}
        <div className="searchbar-container">
          <div className="searchbar-wrapper">
            <SearchBar />
          </div>
        </div>

        {/* Colonna destra: link/menu */}
        <div className="d-flex align-items-center justify-content-end">
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-links d-flex flex-column flex-md-row justify-content-end">
              <li className="nav-item">
                <NavLink className="nav-link" to="/"
                onClick={() => setSearch('')}
                end>
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

            {/* Bottone chiusura mobile */}
            <button
              className="close-btn d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-label="Chiudi menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
