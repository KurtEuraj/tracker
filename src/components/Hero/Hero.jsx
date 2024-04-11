import "./Hero.scss"
import SearchBar from "../SearchBar/SearchBar"

function Hero({ handleSearch, updateSearchTerm, searchResults }) {
  return (
    <div className="hero">
      <SearchBar handleSearch={handleSearch} updateSearchTerm={updateSearchTerm} />
      {/* {searchResults.map((result) => (
        <div>
          <p>{result.song}</p>
          <p>{result.artists}</p>
        </div>
      ))} */}
    </div>
  )
}

export default Hero