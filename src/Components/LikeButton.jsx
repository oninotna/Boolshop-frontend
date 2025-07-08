import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useWishList } from "../Contexts/WishListContext";

//* tolti useState(liked) + useEffect() che derivavano se la sneaker fosse nella wishlist
// Questo comportava:
// - Stato duplicato (già lo sai dal contesto)
// - Codice più lungo
// - Possibili disallineamenti tra wishList e liked
// quindi questo componente non mantiene stato locale, ma si basa interamente sul contesto globale

export default function LikeButton({ sneaker }) {
  // Recupera funzioni e dati dal contesto WishList
  const { wishList, addToWish, removeFromWish } = useWishList();

  // Determina se la sneaker è già nella wishlist
  // (evitiamo useState: deriviamo direttamente dallo stato globale)
  const liked = wishList.some((item) => item.id_sneaker === sneaker.id_sneaker);

  // Gestisce il toggle del "mi piace":
  // - Se è già nella wishlist, la rimuove
  // - Altrimenti la aggiunge
  const toggleLike = () => {
    liked ? removeFromWish(sneaker) : addToWish(sneaker);
  };

  return (
    <button
      className={`btn-like btn-sm ${liked ? "liked" : ""}`}
      onClick={toggleLike}
      aria-label={liked ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      <FontAwesomeIcon
        icon={liked ? faHeartSolid : faHeartRegular} // Cuore pieno se liked, vuoto altrimenti
      />
    </button>
  );
}
