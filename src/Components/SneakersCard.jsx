import { useState } from "react";
import "../assets/css/SneakersCard.css";

// Font Awesome React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";

export default function SneakersCard({ data }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <div className="img-wrapper">
          <img 
            src={data.images[0]} 
            alt={data.model || "modello"} 
            className="card-img-top" 
          />
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h6 className="text-muted mb-1 brand-title">{data.brand}</h6>
            <h5 className="mb-2 fw-semibold model-title">{data.model}</h5>
            <p className="card-text desc-limit">
              {data.description || "Modello esclusivo e versatile per ogni occasione."}
            </p>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-dark">€{data.price}</span>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <button
                  className={`btn-like btn-sm ${liked ? "liked" : "not-liked"}`}
                  onClick={() => setLiked(!liked)}
                >
                  <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} />
                </button>
              </div>
            </div>

            <div className="d-grid mt-3">
              <Link to={`/detailpage/${data.slug}`} className="btn btn-outline-secondary btn-sm">
                Visualizza di più
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
