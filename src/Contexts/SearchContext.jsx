import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({children}) {
        const [search, setSearch] = useState('');
        const [submit, setSubmit] = useState(true);

    return <SearchContext value={{search, submit, setSearch, setSubmit}}>{children}</SearchContext>
};

function useSearch() {
    return useContext(SearchContext);
};

export {SearchProvider, useSearch};