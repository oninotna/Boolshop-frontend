import SneakersCard from "../Components/SneakersCard";
import { useWishList } from "../Contexts/WishListContext";

export default function WishListPage() {
  const { wishList } = useWishList();
  return wishList.length ? (
    wishList.map((wish, index) => <SneakersCard data={wish} key={index} />)
  ) : (
    <h1>La tua lista è vuota</h1>
  );
}
