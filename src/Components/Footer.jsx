import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-custom text-light overflow-hidden">
      <div className="container py-5">
        <div className="row">
          
          {/* LINK UTILI - AL MOMENTO PORTANO TUTTI ALLA HOME*/}
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h5 className="footer-title">Link utili</h5>
                <ul>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Termini e condizioni</a>
                  </li>
                  <li>
                    <a href="/">Domande frequenti</a>
                  </li>
                  <li>
                    <a href="/">Supporto</a>
                  </li>
                </ul>
              </div>

              {/* MAPPA SITO */}
              <div className="col-12 col-md-6 mb-4">
                <h5 className="footer-title">Mappa del sito</h5>
                <ul>
                  <li>
                    <a href="/cart">Carrello</a>
                  </li>
                  <li>
                    <a href="/wishlist">Preferiti</a>
                  </li>
                  <li>
                    <a href="/catalog">Tutti i prodotti</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-row: social icons */}
            <div className="row">
              <div className="col-12 d-flex justify-content-md-start social-icons mt-3">
                <Link to="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
                <Link to="https://tiktok.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTiktok} />
                </Link>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA – Logo intero */}
          <div className="col-12 col-md-4 footer-logo-col d-flex align-items-center justify-content-center justify-content-md-end">
            <img src="/img/logo.png" alt="Logo BoolSneakers" className="footer-logo" />
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        <small>© 2025 ZneakDrop. Tutti i diritti riservati.</small>
      </div>
    </footer>
  );
}
