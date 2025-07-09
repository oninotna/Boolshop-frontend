import { useCompare } from "../Contexts/CompareContext";
import React, { useState } from "react"; // Reintrodotto useState per gestire gli stati qui
import LikeButton from "./LikeButton";
import AddToCartButton from "./AddToCartButton"; // Importa il componente AddToCartButton
import SizeQuantitySelector from "./SizeQuantitySelector"; // Importa il componente SizeQuantitySelector
import "../assets/css/SneakersCard.css";
import { Link } from "react-router-dom";

export default function SneakersCard({ data }) {
  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [errorSize, setErrorSize] = useState(false);

  const { compareList, toggleCompare } = useCompare();
  const isInCompare = compareList.some(
    (item) => item.id_sneaker === data.id_sneaker
  );

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <div className="img-wrapper">
          <img
            src={data.images[0]}
            alt={data.model || "modello"}
            className="card-img-top"
          />
          <LikeButton sneaker={data} />
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h6 className="mb-1 brand-title">{data.brand}</h6>
                <h5 className="mb-2 fw-semibold model-title">{data.model}</h5>
              </div>
              <div>
                <button
                  className={`btn btn-sm ${
                    isInCompare ? "btn-danger" : "btn-outline-secondary"
                  }`}
                  disabled={!isInCompare && compareList.length >= 3}
                  onClick={() => toggleCompare(data)}
                >
                  {isInCompare ? "Rimuovi dal Confronto" : "Confronta"}
                </button>
              </div>
            </div>
            <p className="card-text desc-limit">
              {data.description ||
                "Modello esclusivo e versatile per ogni occasione."}
            </p>
            <div className="d-flex justify-content-start align-items-center mb-2">
              <span className="fw-bold">€{data.price}</span>
            </div>
          </div>

          <div>
            <SizeQuantitySelector
              sizes={data.sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedQty={selectedQty}
              setSelectedQty={setSelectedQty}
              errorSize={errorSize}
              setErrorSize={setErrorSize}
            />

            <div className="card-footer-buttons d-flex flex-column gap-1">
              <div className="d-flex justify-content-between gap-4">
                <AddToCartButton
                  sneaker={data}
                  selectedSize={selectedSize}
                  selectedQty={selectedQty}
                  setErrorSize={setErrorSize}
                />
                <Link
                  to={`/detailpage/${data.slug}`}
                  className="btn btn-outline-secondary btn-sm"
                >
                  Visualizza di più
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
