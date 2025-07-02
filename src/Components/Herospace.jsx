import "../assets/css/Herospace.css";

export default function Herospace() {
  return (
    <section className="hero-custom d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Colonna immagine */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src="" alt="Sneaker preview" className="img-fluid hero-img" />
          </div>

          {/* Colonna testo */}
          <div className="col-md-6 text-light text-center text-md-start">
            <h1 className="hero-title mb-3">SCOPRI LA NOVITÀ</h1>
            <h2 className="hero-brand">Nike</h2>
            <h3 className="hero-model mb-4">Air Max 90</h3>
          </div>

          {/* Pulsante centrale */}
          <div className="col-12 text-center mt-4">
            <a href="#" className="hero-btn btn btn-outline-success">
              Scopri ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
