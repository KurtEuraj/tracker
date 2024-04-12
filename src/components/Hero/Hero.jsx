import "./Hero.scss"
import SearchBar from "../SearchBar/SearchBar"
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions"

function Hero({ handleSearch, updateSearchTerm, searchResults, handleSongsSuggestion, query }) {
  return (
    <div className="hero">
      <SearchBar handleSearch={handleSearch} updateSearchTerm={updateSearchTerm} query={query} />
      {(query.length > 0) ? <SearchSuggestions searchResults={searchResults} handleSongsSuggestion={handleSongsSuggestion} /> : null}
    </div>
  )
}

export default Hero