import SneakersCard from "../Components/SneakersCard";
import { useWishList } from "../Contexts/WishListContext";
import UserPopUp from "../Components/userPopUp";

export default function WishListPage() {
  const { wishList } = useWishList();

  return (
    <>
      <div className="container-fluid">
        <h2 className="latest-title fw-bold mt-5">Wishlist</h2>

        {wishList.length ? (
          <>
            <p className="latest-subtitle fst-italic text-secondary">
              Tutti prodotti della tua lista dei desideri.
            </p>
            <div className="row">
              {wishList.map((wish, index) => (
                <SneakersCard data={wish} key={index} />
              ))}
            </div>
          </>
        ) : (
          <p className="latest-subtitle fst-italic text-secondary">
            La lista dei desideri è vuota.
          </p>
        )}
      </div>
      <UserPopUp />
    </>
  );
}
