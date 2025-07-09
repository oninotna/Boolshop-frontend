import React from "react";
import { useCompare } from "../Contexts/CompareContext";
import { Link } from "react-router-dom";
import "../assets/css/Compare.css";

export default function ComparePage() {
  const { compareList, toggleCompare } = useCompare();

  if (compareList.length === 0) {
    return <p>Nessun prodotto selezionato per il confronto.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Confronta Prodotti</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr className="align-middle text-center">
              <th>Caratteristica</th>
              {compareList.map((item) => (
                <th key={item.id} className="position-relative  ">
                  {item.model}
                  <button
                    className="btn btn-sm btn-danger compare-remove-btn"
                    onClick={() => toggleCompare(item)}
                    aria-label={`Rimuovi ${item.model}`}
                  >
                    Rimuovi
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Immagine</td>
              {compareList.map((item) => (
                <td key={item.id}>
                  <img
                    className="img-dimension"
                    src={item.images[0]}
                    alt={item.model}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td>Brand</td>
              {compareList.map((item) => (
                <td key={item.id}>{item.brand}</td>
              ))}
            </tr>
            <tr>
              <td>Prezzo</td>
              {compareList.map((item) => (
                <td key={item.id}>€{item.price}</td>
              ))}
            </tr>
            <tr>
              <td>Descrizione</td>
              {compareList.map((item) => (
                <td key={item.id}>{item.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <Link to="/catalog" className="btn btn-outline-secondary">
        Torna ai prodotti
      </Link>
    </div>
  );
}
