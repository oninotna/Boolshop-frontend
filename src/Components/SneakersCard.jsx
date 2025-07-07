import React, { useState } from "react"; // Reintrodotto useState per gestire gli stati qui
import LikeButton from "./LikeButton";
import AddToCartButton from "./AddToCartButton"; // Importa il componente AddToCartButton
import SizeQuantitySelector from "./SizeQuantitySelector"; // Importa il componente SizeQuantitySelector
import "../assets/css/SneakersCard.css";
import { Link } from "react-router-dom";

export default function SneakersCard({ data }) {
  // Stati per la selezione di taglia e quantità, e per la gestione errori
  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [errorSize, setErrorSize] = useState(false);

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <div className="img-wrapper">
          <img src={data.images[0]} alt={data.model || "modello"} className="card-img-top" />
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h6 className="mb-1 brand-title">{data.brand}</h6>
            <h5 className="mb-2 fw-semibold model-title">{data.model}</h5>
            <p className="card-text desc-limit">
              {data.description || "Modello esclusivo e versatile per ogni occasione."}
            </p>
          </div>

          <div>
            {/* Riga per il prezzo */}
            <div className="d-flex justify-content-start align-items-center mb-2">
              <span className="fw-bold">€{data.price}</span>
            </div>

            {/* Riga per la selezione taglia e quantità */}
            {/* Passa gli stati e i setter al SizeQuantitySelector */}
            <SizeQuantitySelector
              sizes={data.sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedQty={selectedQty}
              setSelectedQty={setSelectedQty}
              errorSize={errorSize}
              setErrorSize={setErrorSize}
            />

            {/* Riga che contiene il bottone Aggiungi al Carrello e il LikeButton */}
            <div className="d-flex justify-content-end align-items-center gap-2 mt-3">
              {" "}
              {/* Allineato a destra */}
              {/* Includi il componente AddToCartButton qui.
                  Passa tutti i dati necessari per l'aggiunta al carrello. */}
              <AddToCartButton
                sneaker={data}
                selectedSize={selectedSize}
                selectedQty={selectedQty}
                setErrorSize={setErrorSize}
              />
              <LikeButton sneaker={data} />
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
