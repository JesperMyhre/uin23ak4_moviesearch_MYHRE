import { useState } from "react";

export default function SearchBar({ setQuery }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log("Searching for...", search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Søk etter boktittel:</label>
        <input
          type="text"
          id="searchBar"
          placeholder="Boktittel.."
          onChange={handleChange}
        />
        <input type="submit" value="Søk" />
      </form>
    </>
  );
}
