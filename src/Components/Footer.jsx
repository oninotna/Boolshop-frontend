import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-custom text-light overflow-hidden">
      <div className="container py-5">
        <div className="row">
          {/* COLONNA SINISTRA – 8/12 = Link + Mappa + Social */}
          <div className="col-12 col-md-8">
            {/* Sub-row: link + mappa */}
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h5 className="footer-title">Link utili</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms">Termini e condizioni</a>
                  </li>
                  <li>
                    <a href="/faq">Domande frequenti</a>
                  </li>
                  <li>
                    <a href="/support">Supporto</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <h5 className="footer-title">Mappa del sito</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/cart">Carrello</a>
                  </li>
                  <li>
                    <a href="/favorites">Preferiti</a>
                  </li>
                  <li>
                    <a href="/shop">Tutti i prodotti</a>
                  </li>
                  <li>
                    <a href="/account">Il mio profilo</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-row: social icons */}
            <div className="row">
              <div className="col-12 d-flex justify-content-md-start social-icons mt-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA – Logo intero */}
          <div className="col-12 col-md-4 footer-logo-col d-flex align-items-center justify-content-center justify-content-md-end">
            <img src="/img/logo(19).jpg" alt="Logo BoolSneakers" className="footer-logo" />
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        <small>© 2025 ZneakDrop. Tutti i diritti riservati.</small>
      </div>
    </footer>
  );
}
