export default function BookCard({ content }) {
  return (
    <>
      <section className="bookSection">
        {/*isArray passer på å vente med mapping før data er fetched*/}
        {Array.isArray(content) &&
          content.map((item) => (
            <article className="bookCard" key={item.key}>
              <img
                src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
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
                      const searchQuery = encodeURIComponent(
                        item.id_amazon[1]
                      ); /*mulig boolean sjekke om id tilgjengelig*/
                      window.open(`https://www.amazon.com/s?k=${searchQuery}`);
                    }}
                  >
                    <button type="submit">Mer info</button>
                  </form>
                )}
                {""}
              </span>
            </article>
          ))}
      </section>
    </>
  );
}
