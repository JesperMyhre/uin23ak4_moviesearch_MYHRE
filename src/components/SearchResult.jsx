import { useState } from "react";

export default function SearchBar({ setQuery }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log("Searching for...", `"${search}"`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  document.addEventListener("Enter", handleSubmit);

  return (
    <>
      <nav className="navBar">
        <img src="src\assets\book.svg" alt="logo" className="logo"></img>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="searchBar"
            placeholder="Boktittel.."
            onChange={handleChange}
            className="searchBar"
          />
          <input type="submit" value="Søk" className="searchButton" />
        </form>
      </nav>
    </>
  );
}
