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
            <h1 className="gradient-text d-none">ZneakDrop</h1>
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
            <ul className="navbar-links d-flex flex-column flex-md-row justify-content-end px-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  onClick={() => setSearch('')}
                  end
                  className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/catalog"
                  onClick={() => setSearch('')}
                  className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}
                >
                  Catalogo
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/novelty"
                  className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}
                >
                  Novità
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    "icon-link wishlist-icon" + (isActive ? " active-link" : "")
                  }
                >
                  <FontAwesomeIcon icon={faHeart} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    "icon-link cart-icon" + (isActive ? " active-link" : "")
                  }
                >
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
