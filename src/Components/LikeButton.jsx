// Components/LikeButton.jsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useWishList } from "../Contexts/WishListContext";

export default function LikeButton({ sneaker }) {
  const { wishList, addToWish, removeFromWish } = useWishList();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(wishList.some((item) => item.id_sneaker === sneaker.id_sneaker));
  }, [wishList, sneaker]);

  const toggleLike = () => {
    if (liked) {
      removeFromWish(sneaker);
    } else {
      addToWish(sneaker);
    }
    setLiked(!liked);
  };

  return (
    <button className={`btn-like btn-sm ${liked ? "liked" : "not-liked"}`} onClick={toggleLike}>
      <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} />
    </button>
  );
}
