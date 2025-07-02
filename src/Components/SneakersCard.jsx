import { useState } from "react";
import "../assets/css/SneakersCard.css";

export default function SneakersCard({ sneaker }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card h-100 shadow-sm">
      <img src={sneaker.image} alt={sneaker.model} className="card-img-top" />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h6 className="text-muted mb-1 brand-title">{sneaker.brand}</h6>
          <h5 className="mb-2 fw-semibold model-title">{sneaker.model}</h5>
          <p className="card-text desc-limit">{sneaker.description}</p>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-dark">€{sneaker.price}</span>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark btn-sm">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button
                className={`btn btn-sm ${liked ? "btn-danger" : "btn-outline-danger"}`}
                onClick={() => setLiked(!liked)}
              >
                <i className={liked ? "fas fa-heart" : "far fa-heart"}></i>
              </button>
            </div>
          </div>

          <div className="d-grid mt-3">
            <a href={`/product/${sneaker.sneaker_id}`} className="btn btn-outline-secondary btn-sm">
              Visualizza di più
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
