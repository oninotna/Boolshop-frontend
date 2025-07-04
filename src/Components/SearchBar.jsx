import { useState } from "react";
import axios from "axios";

export default function SearchBar () {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendForm();
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);    
    };

    return (
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="searchbar-input me-5"
          placeholder="Cerca sneakers..."
          onFocus={(e) => e.target.classList.add("expanded")}
          onBlur={(e) => e.target.classList.remove("expanded")}
          name="search"
          value={search}
          onChange={handleInputChange}
        />
        <button className="btn btn-secondary" type="submit">
          Cerca
        </button>
      </form>
    );
};