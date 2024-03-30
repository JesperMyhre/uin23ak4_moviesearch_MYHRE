import { result } from "./SearchBar";
import { useContext } from "react";

export default function SearchResult() {
  const search = useContext(result);
  return (
    <>
      <article className="bookCard">
        <img src="https://placehold.co/100x150"></img>
        <h3>Tittel</h3>
        <p>(utgivningsår)</p>
        <p>Forfatter</p>
        <button>Mer om filmen</button>
      </article>
    </>
  );
}
