import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

export default function Layout({ content, setContent, query, setQuery }) {
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <BookCard
        content={content}
        setContent={setContent}
        query={query}
        setQuery={setQuery}
      />
    </>
  );
}
