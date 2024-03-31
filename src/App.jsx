import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import SearchResult from "./components/SearchResult";

export default function App() {
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("Harry Potter");

  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log("Searching for...", search);
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

  useEffect(() => {
    getData();
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
            <img
              src={`https://covers.openlibrary.org/b/OLID/${item.cover_edition_key}-M.jpg`}
            ></img>
            <span className="bookInfo">
              <h3>{item.title}</h3>
              <p>{item.author_name}</p>
              <p>Release year: {item.first_publish_year}</p>
              <p>Rating: {item.ratings_average}</p>
              {item.id_amazon && item.id_amazon.length >= 2 && (
                /*knappen åpna bare til amazon landing page. ChatGPT belærte meg om hvordan form submits
                kan bli blokkert pga js events og valideringer, samtidig som hen spytta ut det her*/
                <form
                  action={`https://www.amazon.com/s`}
                  target="_blank"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const searchQuery = encodeURIComponent(item.id_amazon[3]);
                    window.open(`https://www.amazon.com/s?k=${searchQuery}`);
                  }}
                >
                  <button type="submit">Mer om filmen</button>
                </form>
              )}
            </span>
          </article>
        ))}
      </section>
    </>
  );
}
