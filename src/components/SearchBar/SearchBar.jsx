import "./SearchBar.scss"
import searchIcon from "../../assets/images/search.svg"

function SearchBar() {
  return (
    <form className="search-bar">
      <div className="search-bar__wrapper">
        <input className="search-bar__input" type="text" placeholder="Enter your favorite song 🎧" />
        <button type="submit" className="search-bar__submit-button">
          <img src={searchIcon} alt="search icons" className="search-bar__submit-icon" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar