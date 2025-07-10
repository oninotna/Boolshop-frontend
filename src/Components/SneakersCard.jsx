import { useCompare } from "../Contexts/CompareContext";
import React, { useState } from "react";
import LikeButton from "./LikeButton";
import AddToCartButton from "./AddToCartButton";
import SizeQuantitySelector from "./SizeQuantitySelector";
import { Link } from "react-router-dom";
import "../assets/css/SneakersCard.css";

export default function SneakersCard({ data }) {
  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [errorSize, setErrorSize] = useState(false);
  const { compareList, toggleCompare } = useCompare();
  const isInCompare = compareList.some((item) => item.id_sneaker === data.id_sneaker);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm rounded overflow-hidden bg-dark text-white d-flex flex-column">
        <div className="img-wrapper position-relative">
          <img src={data.images[0]} alt={data.model || "modello"} className="card-img-top" />
          <LikeButton sneaker={data} className="btn-like position-absolute top-0 end-0" />
        </div>

        <div className="card-body d-flex flex-column p-3 flex-grow-1">
          <div className="card-content-wrapper">
            <div className="d-flex justify-content-between align-items-start mb-2 card-header-wrapper">
              <div className="brand-model-wrapper">
                <h6 className="text-white mb-0 brand-title">{data.brand}</h6>
                <h5 className="fw-bold text-white model-title mb-0">{data.model}</h5>
              </div>
              <button
                className={`btn btn-sm ${isInCompare ? "btn-danger" : "btn-outline-light"}`}
                disabled={!isInCompare && compareList.length >= 3}
                onClick={() => toggleCompare(data)}
              >
                {isInCompare ? "Rimuovi" : "Confronta"}
              </button>
            </div>

            <p className="desc-limit mb-3">
              {data.description || "Modello esclusivo e versatile per ogni occasione."}
            </p>

            <div>
              <span className="fw-bold text-white fs-5">€{data.price}</span>
            </div>
          </div>

          <div className="mt-2">
            <SizeQuantitySelector
              sizes={data.sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedQty={selectedQty}
              setSelectedQty={setSelectedQty}
              errorSize={errorSize}
              setErrorSize={setErrorSize}
            />

            <div className="mt-3 d-flex gap-2">
              <AddToCartButton
                sneaker={data}
                selectedSize={selectedSize}
                selectedQty={selectedQty}
                setErrorSize={setErrorSize}
                className="btn btn-outline-light d-flex align-items-center justify-content-center flex-fill text-nowrap"
              />
              <Link
                to={`/detailpage/${data.slug}`}
                className="btn btn-outline-light d-flex align-items-center justify-content-center flex-fill text-nowrap"
              >
                Dettaglio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
