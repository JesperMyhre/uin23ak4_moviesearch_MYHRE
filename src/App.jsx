import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import SearchResult from "./components/SearchResult";

export default function App() {
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("Lord of the rings");
  const [coverID, setCoverID] = useState("Harry Potter");

  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log("Searching for:", search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setContent(data.docs);
    } catch {
      console.error("Det har skjedd en feil");
    }
  };

  const getCoverID = async (OLID) => {
    try {
      const response = await fetch(
        `https://covers.openlibrary.org/b/${OLID}/${coverID}-S.jpg`
      );
      const data = await response.json();
      setCoverData(data);
    } catch {
      console.error("Kunne ikke hente cover");
    }
  };

  useEffect(() => {
    getData();
    getCoverID();
  }, [query]);

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
      <section className="bookSection">
        {content.map((item) => (
          <article className="bookCard" key={item.key}>
            <img src="https://placehold.co/100x150"></img>
            <span className="bookInfo">
              <h3>{item.title}</h3>
              <p>{item.author_name}</p>
              <p>Release year: {item.first_publish_year}</p>
              <button>Mer om filmen</button>
            </span>
          </article>
        ))}
      </section>
    </>
  );
}
