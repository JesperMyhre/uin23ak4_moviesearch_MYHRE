import { useState, useEffect } from "react";

export default function App() {
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("");
  const [currentId, setCurrentId] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json`);
      const data = await response.json();
      setContent(data.results);
    } catch {
      console.error("Dette funka ikke");
    }
  };

  useEffect(() => {
    getData();
    setCurrentId(sessionStorage.getItem("characterID"));
  }, [query]);

  return <></>;
}
