import "./SearchBar.scss"
import searchIcon from "../../assets/images/search.svg"

function SearchBar({ handleSearch, updateSearchTerm }) {
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-bar__wrapper">
        <input className="search-bar__input" name="song" type="text" placeholder="Enter a song 🎧" onChange={updateSearchTerm}/>
        <button type="submit" className="search-bar__submit-button">
          <img src={searchIcon} alt="search icons" className="search-bar__submit-icon" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar