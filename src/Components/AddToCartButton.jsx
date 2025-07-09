import React from "react";
import { useCart } from "../Contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

/**
 * Componente AddToCartButton
 *
 * Questo componente rappresenta un pulsante per aggiungere una sneaker al carrello.
 * Mostra solo l'icona nei dispositivi piccoli e testo + icona nei dispositivi più grandi.
 *
 * @param {object} props - Le props del componente.
 * @param {object} props.sneaker - L'oggetto sneaker da aggiungere.
 * @param {object} props.selectedSize - L'oggetto taglia selezionato.
 * @param {number} props.selectedQty - La quantità selezionata.
 * @param {function} props.setErrorSize - Funzione per impostare lo stato di errore della taglia.
 * @param {string} [props.className] - Classi CSS addizionali per il pulsante.
 */
export default function AddToCartButton({
  sneaker,
  selectedSize,
  selectedQty,
  setErrorSize,
  className = "",
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorSize(true);
      toast.error("Seleziona una taglia prima di aggiungere al carrello!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }

    setErrorSize(false);

    addToCart({
      brand: sneaker.brand,
      model: sneaker.model,
      id_sneaker: sneaker.id_sneaker,
      images: sneaker.images,
      size: selectedSize.size,
      id_size: selectedSize.id_size,
      price: sneaker.price,
      slug: sneaker.slug,
      quantity: selectedQty,
    });

    console.log("Sneaker aggiunta al carrello:", sneaker);
    toast.success("Prodotto aggiunto al carrello! Clicca qui per il carrello");
  };

  return (
    <button className={`btn btn-sm btn-cart ${className}`} onClick={handleAddToCart}>
      <FontAwesomeIcon icon={faCartShopping} className="me-0 me-md-2" />
      <span className="d-none d-md-inline">Aggiungi</span>
    </button>
  );
}
