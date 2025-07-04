import { useState } from "react";

const defaultOrder = {
  name: "",
  surname: "",
  address: "",
  phone: "",
  email: "",
  items:[]
};

export default function CartPage() {
  const [order, setOrder] = useState(defaultOrder);

  const sendForm = () => {
        axios.post(`http://localhost:3000/sneakers/checkout`, order)
        .then((res) => {
            if (res.status == 201) setOrder(defaultOrder);
        })
        .catch((err) => console.error(err.message));
    };

  const handleSubmit = (e) => {
        e.preventDefault();
        sendForm();
    };

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        });    
    };

  return (
    <div>
      <h1>Procedi al checkout</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-4">
                    <label htmlFor="name">Nome</label>
                    <input className="form-control" 
                    type="text"
                    id="name" 
                    name="name"
                    value={order.name}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div className="col-4">
                    <label htmlFor="surname">Cognome</label>
                    <input className="form-control" 
                    type="text"
                    id="surname" 
                    name="surname"
                    value={order.surname}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div className="col-4">
                    <label htmlFor="address">Indirizzo</label>
                    <input className="form-control" 
                    type="text"
                    id="address" 
                    name="address"
                    value={order.address}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div className="col-4">
                    <label htmlFor="phone">Numero di telefono</label>
                    <input className="form-control" 
                    type="number"
                    id="phone" 
                    name="phone"
                    value={order.phone}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div className="col-4">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" 
                    type="email"
                    id="email" 
                    name="email"
                    value={order.address}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div className="col-4 mt-3 text-end">
                    <button 
                    className="btn btn-secondary" 
                    type="submit"
                    >
                        Procedi al checkout
                    </button>
                </div>
      </form>
    </div>
  );
}
