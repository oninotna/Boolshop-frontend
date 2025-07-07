import { useCart } from "../Contexts/CartContext";
import LikeButton from "./LikeButton"; // Importa il nuovo componente
import "../assets/css/SneakersCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";

export default function SneakersCard({ data }) {
  const { addToCart } = useCart();
  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [errorSize, setErrorSize] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorSize(true);
      return;
    }
    setErrorSize(false);
    addToCart({
      brand: data.brand,
      model: data.model,
      id_sneaker: data.id_sneaker,
      images: data.images,
      size: selectedSize.size,
      id_size: selectedSize.id_size,
      price: data.price,
      slug: data.slug,
      quantity: selectedQty,
    });
    console.log(data);

    toast.success("Prodotto aggiunto al carrello! Clicca qui per il carrello");
  };

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
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold">€{data.price}</span>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-cart" onClick={handleAddToCart}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <LikeButton sneaker={data} />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-2">
              <select
                className={`form-select w-auto py-0 ${errorSize ? "border border-danger" : ""}`}
                value={selectedSize ? JSON.stringify(selectedSize) : ""}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "") {
                    setSelectedSize("");
                  } else {
                    setSelectedSize(JSON.parse(val));
                  }
                  setErrorSize(false);
                }}
              >
                <option value="">Seleziona taglia</option>
                {data.sizes?.map((size) => (
                  <option key={size.id_size} value={JSON.stringify(size)}>
                    {size.size}
                  </option>
                ))}
              </select>
              <div className="d-flex align-items-center">
                <button
                  className="my-btn-count "
                  onClick={() =>
                    selectedQty > 1 ? setSelectedQty(selectedQty - 1) : setSelectedQty(selectedQty)
                  }
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <div className="mx-3 fw-bold">{selectedQty}</div>
                <button className="my-btn-count " onClick={() => setSelectedQty(selectedQty + 1)}>
                  <FontAwesomeIcon icon={faPlus} />
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
