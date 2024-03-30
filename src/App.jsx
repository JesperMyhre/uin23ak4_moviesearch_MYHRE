import { useState, useEffect } from "react";
import Layout from "./components/Layout";

export default function App() {
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("bond");
  const [currentId, setCurrentId] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
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

  return (
    <>
      <Layout />
    </>
  );
}
