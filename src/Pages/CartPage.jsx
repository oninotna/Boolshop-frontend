// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useCart } from "../Contexts/CartContext";
// import "../assets/css/index.css";

// const defaultOrder = {
//   name: "",
//   surname: "",
//   address: "",
//   phone: "",
//   email: "",
//   items: [],
// };

// export default function CartPage() {
//   const [order, setOrder] = useState(defaultOrder);
//   const [sneakers, setSneakers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const cart = useCart();

//   const sendForm = () => {
//     axios
//       .post(`http://localhost:3000/sneakers/checkout`, order)
//       .then((res) => {
//         if (res.status == 201) setOrder(defaultOrder);
//       })
//       .catch((err) => console.error(err.message));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendForm();
//   };

//   const handleInputChange = (e) => {
//     setOrder({
//       ...order,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       {JSON.stringify(cart)}
//       <section className="related-list">
//         <div className="container-fluid">
//           <h2 className="latest-title fw-bold">Il tuo carrello</h2>
//           <p className="latest-subtitle fst-italic text-secondary">Procedi al checkout</p>
//           <form className="row" onSubmit={handleSubmit}>
//             <div className="col-4">
//               <label htmlFor="name">Nome</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={order.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="col-4">
//               <label htmlFor="surname">Cognome</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="surname"
//                 name="surname"
//                 value={order.surname}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="col-4">
//               <label htmlFor="address">Indirizzo</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={order.address}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="col-4">
//               <label htmlFor="phone">Numero di telefono</label>
//               <input
//                 className="form-control"
//                 type="number"
//                 id="phone"
//                 name="phone"
//                 value={order.phone}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="col-4">
//               <label htmlFor="email">Email</label>
//               <input
//                 className="form-control"
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={order.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="col-4 mt-3 text-end">
//               <button className="btn btn-secondary" type="submit">
//                 Procedi al checkout
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       <section className="latest-list">
//         <div className="container-fluid">
//           <h2 className="latest-title fw-bold">Ultimi arrivi</h2>
//           <p className="latest-subtitle fst-italic text-secondary">
//             Le novità più fresche per i tuoi piedi
//           </p>

//           {loading && <p>Caricamento...</p>}
//           {error && <p className="text-danger">{error}</p>}

//           {!loading && !error && (
//             <div className="row g-3 flex-nowrap">
//               {sneakers.map((sneaker) => (
//                 <SneakersCard data={sneaker} key={sneaker.id_sneaker} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

//* IMPORTAZIONI
import { useState } from "react";
import axios from "axios";
import { useCart } from "../Contexts/CartContext";
import LatestList from "../Components/LatestList"; // sezione "Ultimi arrivi"
import Footer from "../Components/Footer";
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
  const [order, setOrder] = useState(defaultOrder); // dati form
  const [successMsg, setSuccessMsg] = useState(""); // messaggio di successo

  const cart = useCart(); // ottieni carrello dal context
  // const { items, clearCart } = useCart(); // se hai funzioni nel context, puoi destrutturare così

  //* INVIO DELL’ORDINE
  const sendForm = () => {
    const orderWithItems = {
      ...order,
      items: cart.items || [], // aggiungi articoli del carrello
    };

    axios
      .post(`http://localhost:3000/sneakers/checkout`, orderWithItems)
      .then((res) => {
        if (res.status === 201) {
          setOrder(defaultOrder); // resetta form
          setSuccessMsg("✅ Ordine effettuato con successo!");

          // TODO: SVUOTA IL CARRELLO
          // Se il tuo CartContext ha clearCart(), chiamalo qui:
          // clearCart();
        }
      })
      .catch((err) => console.error(err.message));
  };

  //* GESTIONE FORM
  const handleSubmit = (e) => {
    e.preventDefault(); // evita refresh
    setSuccessMsg(""); // pulisci messaggio precedente
    sendForm(); // invia ordine
  };

  //* CAMBIO INPUT
  const handleInputChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value, // aggiorna campo
    });
  };

  //* RENDER COMPONENTE
  return (
    <>
      {/* FORM CHECKOUT*/}
      <section className="related-list">
        <div className="container-fluid">
          <h2 className="latest-title fw-bold">Il tuo carrello</h2>
          <p className="latest-subtitle fst-italic text-secondary">Procedi al checkout</p>

          {/* MESSAGGIO SUCCESSO */}
          {successMsg && <p className="text-success">{successMsg}</p>}

          <form className="row" onSubmit={handleSubmit}>
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
              <label htmlFor="phone">Numero di telefono</label>
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
              <button className="btn btn-secondary" type="submit">
                Procedi al checkout
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SEZIONE ULTIMI ARRIVI (IMPORTATA) */}
      <LatestList />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
