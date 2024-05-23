import "./SearchBar.scss"

function SearchBar({ updateSearchTerm, query }) {
  return (
    <form className="search-bar">
      <div className="search-bar__wrapper">
        <input className="search-bar__input" name="song" type="text" placeholder="Enter a song 🎧" onChange={updateSearchTerm} value={query} required/>
      </div>
    </form>
  )
}

export default SearchBar