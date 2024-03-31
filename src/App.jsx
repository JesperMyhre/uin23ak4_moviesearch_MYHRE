import { useState, useEffect } from "react";
import Layout from "./components/Layout";

export default function App() {
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("James Bond");

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
      <Layout
        content={content}
        setContent={setContent}
        query={query}
        setQuery={setQuery}
      />
    </>
  );
}
