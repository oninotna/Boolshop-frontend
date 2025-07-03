import { useState } from "react";
import "../assets/css/SneakersCard.css";

// Font Awesome React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function CardProvv({  }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card h-100 shadow-sm">
      <img
        src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-800x450.webp"
        alt="modello"
        className="card-img-top"
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h6 className="text-muted mb-1 brand-title">brand</h6>
          <h5 className="mb-2 fw-semibold model-title">model</h5>
          <p className="card-text desc-limit">
            Modello esclusivo e versatile per ogni occasione.
          </p>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-dark">€price</span>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark btn-sm">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button
                className={`btn btn-sm ${liked ? "btn-danger" : "btn-outline-danger"}`}
                onClick={() => setLiked(!liked)}
              >
                <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} />
              </button>
            </div>
          </div>

          <div className="d-grid mt-3">
            <a href={`/product/`} className="btn btn-outline-secondary btn-sm">
              Visualizza di più
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
