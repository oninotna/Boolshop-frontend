import "../assets/css/Herospace.css";
import { Link } from "react-router-dom";

export default function Herospace() {
  return (
    // <section className="hero-custom d-flex align-items-center justify-content-center">
    //   <div className="container">
    //     <div className="row align-items-center">
    //       {/* Colonna immagine */}
    //       <div className="col-md-6 text-center mb-4 mb-md-0">
    //         <img src="#" alt="Sneaker preview" className="img-fluid hero-img" />
    //       </div>

    //       {/* Colonna testo */}
    //       <div className="col-md-6 text-light text-center text-md-start">
    //         <h1 className="hero-title mb-3">SCOPRI LA NOVITÀ</h1>
    //         <h2 className="hero-brand">Nike</h2>
    //         <h3 className="hero-model mb-4">Air Max 90</h3>
    //       </div>

    //       {/* Pulsante centrale */}
    //       <div className="col-12 text-center mt-4">
    //         <a href="#" className="hero-btn btn btn-outline-success">
    //           Scopri ora
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="hero-custom position-relative d-flex flex-column">
      {/* Immagine */}
      <div className="container flex-grow-1 d-flex align-items-center">
        <div className="row w-100 align-items-center">
          <div className="col-md-6 d-none d-md-block hero-img-container">
            <img
              src="/img/nike_air_max_90.jpg"
              alt="Sneaker preview"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-end text-white">
            {/* Badge */}
            <div className="hero-badge mt-3">SCOPRI LA NOVITÀ</div>
            {/* Titolo */}
            <h1 className="hero-title-gradient mb-3">Nike Air Max 90</h1>
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
