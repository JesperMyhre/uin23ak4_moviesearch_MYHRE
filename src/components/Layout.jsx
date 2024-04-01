import BookCard from "./BookCard";
import SearchBar from "./SearchResult";

export default function Layout({ content, setContent, query, setQuery }) {
  //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
  let scrollBtn = document.getElementById("scrollButton");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  function handleScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <BookCard
        content={content}
        setContent={setContent}
        query={query}
        setQuery={setQuery}
      />
      <button onClick={handleScroll} id="scrollButton">
        <img src="src\assets\upArrow.svg" alt="Scroll to top button" />
      </button>
    </>
  );
}
