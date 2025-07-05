//* IMPORTAZIONI
import { useState } from "react";
import axios from "axios";
import { useCart } from "../Contexts/CartContext";
import LatestList from "../Components/LatestList";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "../assets/css/index.css";

//* OGGETTO DI DEFAULT PER L'ORDINE
const defaultOrder = {
  name: "",
  surname: "",
  address: "",
  phone: "",
  email: "",
  items: [],
};

export default function CartPage() {
  //* STATI
  const [order, setOrder] = useState(defaultOrder);
  const [successMsg, setSuccessMsg] = useState("");

  //* OTTIENI CARRELLO E FUNZIONI DAL CONTEXT
  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();

  //* INVIO DELL’ORDINE
  const sendForm = () => {
    const orderWithItems = {
      ...order,
      items: cart || [],
    };
    console.log(orderWithItems);
    
    axios
      .post(`http://localhost:3000/sneakers/checkoutdata`, orderWithItems)
      .then((res) => {
        if (res.status === 201) {
          setOrder(defaultOrder);
          setSuccessMsg("Ordine effettuato con successo!");
          clearCart(); // svuota carrello
        }
      })
      .catch((err) => console.error(err.message));
  };

  //* GESTIONE FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    sendForm();
  };

  //* CAMBIO INPUT FORM
  const handleInputChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  //* RENDER COMPONENTE
  return (
    <>
      {/* SEZIONE RIEPILOGO CARRELLO */}
      <section className="related-list">
        <div className="container-fluid">
          <h2 className="latest-title fw-bold">Riepilogo carrello</h2>

          {cart.length === 0 ? (
            <p className="latest-subtitle fst-italic text-secondary">Il carrello è vuoto.</p>
          ) : (
            <div className="row g-3">
              {cart.map((item, index) => (
                <div className="col-12 d-flex align-items-center border-bottom pb-3" key={index}>
                  {/* Immagine prodotto */}
                  <img src={item.images[0]} alt={item.model} width="100" className="me-3 rounded" />

                  {/* Dettagli del prodotto */}
                  <div className="flex-grow-1">
                    <Link
                      to={`/detailpage/${item.slug}`}
                      className="fw-bold text-dark text-decoration-none"
                    >
                      {item.brand} - {item.model}
                    </Link>
                    <p className="mb-1">Taglia: {item.size}</p>

                    {/* Input quantità */}
                    <div className="d-flex align-items-center">
                      <label className="me-2">Quantità:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, item.size, parseInt(e.target.value))
                        }
                        className="form-control form-control-sm w-auto"
                      />
                    </div>
                  </div>

                  {/* Pulsante Rimuovi */}
                  <button
                    className="btn btn-outline-danger btn-sm ms-3"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Rimuovi
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* MESSAGGIO SUCCESSO */}
          {successMsg && <p className="text-success mt-3">{successMsg}</p>}

          {/* FORM CHECKOUT */}
          <form className="row mt-4" onSubmit={handleSubmit}>
            <div className="col-4">
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
            <div className="col-4">
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
            <div className="col-4">
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
            <div className="col-4">
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
            <div className="col-4">
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
            <div className="col-4 mt-3 text-end">
              <button className="btn btn-secondary" type="submit" disabled={cart.length === 0}>
                Procedi al checkout
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SEZIONE ULTIMI ARRIVI */}
      <LatestList />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
