import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/index.css";

// <img
//   src="../../public/img/logo(11).jpg"
//   alt="Sneaker preview"
//   className="img-fluid hero-img"
// />

export default function Header() {
  return (
    // <nav className="my-navbar navbar navbar-expand-md">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       <img
    //         src="../../public/img/logo(19).jpg"
    //         alt="ZneakDrop logo"
    //         height="80"
    //         className="d-inline-block align-text-top"
    //       />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/catalog">
    //             Catalogo
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/novelty">
    //             Novità
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/wishlist">
    //             <FontAwesomeIcon icon={faHeart} />
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/cart">
    //             <FontAwesomeIcon icon={faCartShopping} />
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-md navbar-dark sticky-top custom-navbar">
      <div className="container-fluid">
        {/* LOGO */}
        <Link to="/" className="navbar-brand">
          <img src="./img/logo.png" alt="logo" className="header-logo" />
          <span className="navbar-brand gradient-text">ZneakDrop</span>
        </Link>

        {/* HAMBURGER */}
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

        {/* NAVIGATION LINKS */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-links align-items-center">
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
