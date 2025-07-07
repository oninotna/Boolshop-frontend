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
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/termini">Termini e condizioni</Link>
                  </li>
                  <li>
                    <Link to="/faq">Domande frequenti</Link>
                  </li>
                  <li>
                    <Link to="/supporto">Supporto</Link>
                  </li>
                </ul>
              </div>

              {/* MAPPA SITO */}
              <div className="col-12 col-md-6 mb-4">
                <h5 className="footer-title">Mappa del sito</h5>
                <ul>
                  <li>
                    <Link to="/cart">Carrello</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Preferiti</Link>
                  </li>
                  <li>
                    <Link to="/catalog">Tutti i prodotti</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-row: social icons */}
            {/* per i link esterni usare a */}
            <div className="row">
              <div className="col-12 d-flex justify-content-md-start social-icons mt-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
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
