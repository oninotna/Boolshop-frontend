import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearch } from "../Contexts/SearchContext";
import { useCart } from "../Contexts/CartContext";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faHeart, faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

import "../assets/css/index.css";
import "../assets/css/off-canvas-btn.css";
import "../assets/css/LatestList.css";

export default function Header() {
  const navigate = useNavigate();
  const [canBeOpen, setCanBeOpen] = useState(false);
  const { cart, removeFromCart } = useCart();
  const { setSearch } = useSearch();

  useEffect(() => {
    if (cart.length) {
      setCanBeOpen(true);
    } else {
      setCanBeOpen(false);
    }
  }, [cart]);

  return (
    <>
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
                    onClick={() => setSearch("")}
                    end
                    className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/catalog"
                    onClick={() => setSearch("")}
                    className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}
                  >
                    Catalogo
                  </NavLink>
                </li>

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
                    className={({ isActive }) =>
                      "icon-link cart-icon" + (isActive ? " active-link" : "")
                    }
                    to={"/cart"}
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

      {/* 🔁 BOTTONE PREVIEW */}
      {canBeOpen ? (
        <Link
          className="fixed-canvas-button cart-icon-button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasPreviewCart"
          onClick={(e) => {
            if (!canBeOpen) {
              e.preventDefault();
              toast.error("Il tuo carrello è vuoto");
            }
          }}
          aria-controls="offcanvasPreviewCart"
        >
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          <span className="cart-count">{cart.length}</span>
        </Link>
      ) : (
        ""
      )}

      {/* 🔁 OFFCANVAS */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasPreviewCart"
        aria-labelledby="offcanvasCanvasTitle"
      >
        <section className="offcanvas-header">
          <div className="container-fluid p-0">
            <h2 className="latest-title fs-5 fw-bold mt-3 mb-3 mx-2" id="offcanvasCanvasTitle">
              Preview carrello
            </h2>
          </div>
          <button
            type="button"
            className="offcanvas-close-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            &times;
          </button>
        </section>

        <div className="offcanvas-body">
          <div className="row">
            {canBeOpen ? (
              cart.map((item, index) => (
                <div className="col-12 d-flex align-items-center border-bottom pb-3" key={index}>
                  <img src={item.images[0]} alt={item.model} width="100" className="me-3 rounded" />
                  <div className="flex-grow-1">
                    <p>
                      <strong>
                        {item.brand} - {item.model}
                      </strong>
                    </p>
                    <p className="mt-2">Taglia: {item.size}</p>
                    <p>Prezzo: €{item.price * item.quantity},00</p>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm ms-3"
                    onClick={() => removeFromCart(item.id_sneaker, item.size)}
                  >
                    Rimuovi
                  </button>
                </div>
              ))
            ) : (
              <h3>Il tuo carrello è vuoto</h3>
            )}
          </div>
          {canBeOpen ? (
            <Link
              data-bs-dismiss="offcanvas"
              className="btn btn-secondary"
              onClick={() => {
                navigate("/cart");
              }}
            >
              Vai alla pagina del carrello
            </Link>
          ) : (
            " "
          )}
        </div>
      </div>
    </>
  );
}
