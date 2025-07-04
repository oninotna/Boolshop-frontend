export default function CartPage() {

  const handleSubmit = (e) => {
        e.preventDefault();
        sendForm();
    };

  return (
    <div>
      <h1>Procedi al checkout</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-6">
                    <label htmlFor="userName">Nome</label>
                    <input className="form-control" 
                    type="text"
                    id="userName" 
                    name="userName"
                    value={review.userName}
                    onChange={handleInputChange}
                    required/>
                </div>
      </form>
    </div>
  );
}
