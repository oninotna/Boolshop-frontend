import { useSearch } from "../Contexts/SearchContext";
import { useNavigate } from "react-router-dom";

export default function SearchBar () {
  const {search, setSearch, submit, setSubmit} = useSearch();
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit);
        navigate(`/catalog?search=${search}`)
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);    
    };

    return (
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="searchbar-input me-3"
          placeholder="Cerca sneakers..."
          onFocus={(e) => e.target.classList.add("expanded")}
          onBlur={(e) => e.target.classList.remove("expanded")}
          name="search"
          value={search}
          onChange={handleInputChange}
        />
        <button className="btn btn-secondary my-btn-search" type="submit">
          Cerca
        </button>
      </form>
    );
};