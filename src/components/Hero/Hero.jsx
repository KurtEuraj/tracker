import "./Hero.scss"
import SearchBar from "../SearchBar/SearchBar"
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions"

function Hero({ updateSearchTerm, searchResults, handleSongsSuggestion, query, showResults }) {
  return (
    <div className="hero">
      <SearchBar updateSearchTerm={updateSearchTerm} query={query} />
      {(query.length > 0 && showResults) ? <SearchSuggestions searchResults={searchResults} handleSongsSuggestion={handleSongsSuggestion} /> : null}
    </div>
  )
}

export default Hero