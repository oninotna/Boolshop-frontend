import React from "react"; // Rimosso useState
import { useCart } from "../Contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

/**
 * Componente AddToCartButton
 * Questo componente è ora un bottone semplice che aggiunge l'articolo al carrello.
 * La selezione di taglia e quantità è gestita esternamente e passata tramite props.
 *
 * @param {object} props - Le props del componente.
 * @param {object} props.sneaker - L'oggetto sneaker da aggiungere.
 * @param {object} props.selectedSize - L'oggetto taglia selezionato.
 * @param {number} props.selectedQty - La quantità selezionata.
 * @param {function} props.setErrorSize - Funzione per impostare lo stato di errore della taglia.
 */
export default function AddToCartButton({ sneaker, selectedSize, selectedQty, setErrorSize }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorSize(true); // Imposta l'errore se nessuna taglia è selezionata
      toast.error("Seleziona una taglia prima di aggiungere al carrello!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }

    setErrorSize(false); // Resetta l'errore

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
    // Il bottone "Aggiungi al Carrello" sarà affiancato al LikeButton
    <button className="btn btn-sm btn-cart" onClick={handleAddToCart}>
      <FontAwesomeIcon icon={faCartShopping} className="me-2" />
      Aggiungi
    </button>
  );
}
