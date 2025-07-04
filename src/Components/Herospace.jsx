import "../assets/css/Herospace.css";
import { Link } from "react-router-dom";

export default function Herospace() {
  return (
    <section className="hero-custom position-relative d-flex flex-column">
      {/* Immagine */}
      <div className="container flex-grow-1 d-flex align-items-center">
        <div className="row w-100 align-items-center">
          <div className="col-md-6 d-none d-md-block hero-img-container">
            <img
              src="/img/nike_air_force1_2.png"
              alt="Sneaker preview"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-end text-white">
            {/* Badge */}
            <div className="hero-badge mt-3">SCOPRI LA NOVITÀ</div>
            {/* Titolo */}
            <h1 className="hero-title-gradient mb-3">Nike Air Force 1</h1>
            <p className="hero-subtitle">
              Dove il futuro incontra lo streetwear. Scopri la nuova collezione che ridefinisce il
              lusso urbano.
            </p>
            {/* Bottone */}
            <div className="hero-btn-container mt-4 mb-3 w-100">
              <Link to="#" className="hero-btn-modern btn btn-outline-success px-4 py-2">
                SCOPRI ORA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
