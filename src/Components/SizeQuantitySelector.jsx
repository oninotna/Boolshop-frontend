// frontend/src/components/SizeQuantitySelector.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

/**
 * Componente SizeQuantitySelector
 * Gestisce la UI per la selezione della taglia e l'aggiustamento della quantità.
 * Non include il bottone "Aggiungi al Carrello" o la logica di aggiunta al carrello.
 *
 * @param {object} props - Le props del componente.
 * @param {Array} props.sizes - Array di oggetti taglia disponibili per la sneaker.
 * @param {object} props.selectedSize - L'oggetto taglia attualmente selezionato.
 * @param {function} props.setSelectedSize - Funzione per aggiornare la taglia selezionata.
 * @param {number} props.selectedQty - La quantità attualmente selezionata.
 * @param {function} props.setSelectedQty - Funzione per aggiornare la quantità selezionata.
 * @param {boolean} props.errorSize - Indica se c'è un errore nella selezione della taglia.
 * @param {function} props.setErrorSize - Funzione per impostare lo stato di errore della taglia.
 */
export default function SizeQuantitySelector({
  sizes,
  selectedSize,
  setSelectedSize,
  selectedQty,
  setSelectedQty,
  errorSize,
  setErrorSize,
}) {
  return (
    <div className="d-flex justify-content-between my-2 size-qty-wrapper">
      {/* Selettore della taglia */}
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
          setErrorSize(false); // Rimuovi l'errore quando l'utente seleziona
        }}
      >
        <option value="">Seleziona taglia</option>
        {sizes?.map((size) => (
          <option key={size.id_size} value={JSON.stringify(size)}>
            {size.size}
          </option>
        ))}
      </select>

      {/* Contatore quantità */}
      <div className="d-flex">
        <button
          className="my-btn-count"
          onClick={() =>
            selectedQty > 1 ? setSelectedQty(selectedQty - 1) : setSelectedQty(selectedQty)
          }
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="mx-3 fw-bold">{selectedQty}</div>
        <button className="my-btn-count" onClick={() => setSelectedQty(selectedQty + 1)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
