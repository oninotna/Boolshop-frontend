import SneakersCard from "../Components/SneakersCard";
import { useWishList } from "../Contexts/WishListContext";
import UserPopUp from "../Components/userPopUp";

export default function WishListPage() {
  const { wishList } = useWishList();

  return (<>
    wishList.length ? (
      <div className="container">
    <h1 className="my-3 text-center">La tua lista dei desideri</h1>
    <div className="row">
    {wishList.map((wish, index) => <SneakersCard data={wish} key={index} />)}
    </div>
    </div>
  ) : (
    <h1 className="my-3 text-center">La tua lista dei desideri è vuota</h1>
  )
   <UserPopUp />
   </>);
}
