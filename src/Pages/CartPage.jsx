import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../Contexts/CartContext";
import LatestList from "../Components/LatestList";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import UserPopUp from "../Components/userPopUp";

const defaultOrder = {
  name: "",
  surname: "",
  address: "",
  phone: "",
  email: "",
  // payment: "",
  items: [],
};

export default function CartPage() {
  const [order, setOrder] = useState(defaultOrder);
  const [successMsg, setSuccessMsg] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();

  const sendForm = () => {
    const orderWithItems = {
      ...order,
      items: cart || [],
    };

    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    axios
      .post(`http://localhost:3000/sneakers/checkoutdata`, orderWithItems)
      .then((res) => {
        if (res.status === 201) {
          setOrder(defaultOrder);
          setTotalPrice(total);
          setSuccessMsg("Ordine effettuato con successo!");
          clearCart();
        }
      })
      .catch((err) => console.error(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    sendForm();
  };

  const handleInputChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    <>
      <section className="related-list">
        <div className="container-fluid">
          <h2 className="latest-title fw-bold">Carrello</h2>

          {cart.length === 0 ? (
            <p className="latest-subtitle fst-italic text-secondary">
              Il carrello è vuoto.
            </p>
          ) : (
            <>
              <p className="latest-subtitle fst-italic text-secondary">
                Tutti prodotti nel tuo carrello.
              </p>
              <div className="row g-3">
                {cart.map((item, index) => (
                  <div
                    className="col-12 d-flex align-items-center border-bottom pb-3"
                    key={index}
                  >
                    <img
                      src={item.images[0]}
                      alt={item.model}
                      width="100"
                      className="me-3 rounded"
                    />
                    <div className="flex-grow-1">
                      <Link
                        to={`/detailpage/${item.slug}`}
                        className="fw-bold text-dark text-decoration-none"
                      >
                        {item.brand} - {item.model}
                      </Link>

                      <div className="d-flex align-items-center mt-1">
                        <label className="me-2">Quantità:</label>
                        <div className="d-flex align-items-center ms-3">
                          <button
                            className="btn btn-secondary "
                            onClick={() =>
                              item.quantity > 1 &&
                              updateQuantity(
                                item.id_sneaker,
                                item.size,
                                item.quantity - 1
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <div className="mx-3 fw-bold">{item.quantity}</div>
                          <button
                            className="btn btn-secondary  "
                            onClick={() =>
                              updateQuantity(
                                item.id_sneaker,
                                item.size,
                                item.quantity + 1
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                      <p className="mt-2">
                        Taglia: {item.size}
                        <span className="ms-4">
                          Prezzo: €{item.price * item.quantity},00
                        </span>
                      </p>
                    </div>
                    <button
                      className="btn btn-outline-danger btn-sm ms-3"
                      onClick={() => removeFromCart(item.id_sneaker, item.size)}
                    >
                      Rimuovi
                    </button>
                  </div>
                ))}
                <p className="text-center fs-4 ">
                  <strong>Prezzo totale : €{totalPrice},00 </strong>
                </p>
              </div>
            </>
          )}

          {successMsg && <p className="text-success mt-3">{successMsg}</p>}

          {/* FORM CHECKOUT */}

          {cart.length ? (
            <form className="row mt-4 align-items-end" onSubmit={handleSubmit}>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <label htmlFor="name">Nome</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={order.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <label htmlFor="surname">Cognome</label>
                <input
                  className="form-control"
                  type="text"
                  id="surname"
                  name="surname"
                  value={order.surname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <label htmlFor="address">Indirizzo</label>
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  name="address"
                  value={order.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <label htmlFor="phone">Telefono</label>
                <input
                  className="form-control"
                  type="number"
                  id="phone"
                  name="phone"
                  value={order.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={order.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 mt-3 d-flex justify-content-end ">
                <button
                  className="btn btn-secondary"
                  type="submit"
                  disabled={cart.length === 0}
                >
                  Procedi al checkout
                </button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      </section>
      <UserPopUp />
      <LatestList />
      <Footer />
      <UserPopUp />
    </>
  );
}
