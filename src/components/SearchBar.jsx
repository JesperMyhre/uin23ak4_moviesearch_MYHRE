import { createContext, useState } from "react";
import SearchResult from "./SearchResult";

export const result = createContext();

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function handleSearch() {
    setSearch(document.getElementById("searchBar").value);
    console.log(search);
  }
  return (
    <>
      <input id="searchBar" type="text" placeholder="Søk etter boktittel" />
      <button onClick={handleSearch}>Søk</button>
      <result.Provider value={search}>
        <SearchResult search={search} />
      </result.Provider>
    </>
  );
}
