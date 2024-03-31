import { result } from "./SearchBar";
import { useContext, useState } from "react";

export default function SearchResult(content, setQuery, setCurrentId) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Søk etter karakter:</label>
        <input
          type="text"
          id="search"
          placeholder="Rick..."
          onChange={handleChange}
        ></input>
        <input type="submit" value="Søk"></input>
      </form>
      {/*       {content?.map((item) => (
        <article className="bookCard">
          <img src="https://placehold.co/100x150"></img>
          <h3>{item.title}</h3>
          <p>{item.first_publish_year}</p>
          <p>{item.author_name}</p>
          <button>Mer om filmen</button>
        </article>
      ))} */}
    </>
  );
}
