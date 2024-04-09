import "./Hero.scss"
import SearchBar from "../SearchBar/SearchBar"

function Hero({ handleSearch }) {
  return (
    <div className="hero">
        <SearchBar handleSearch={handleSearch}/>
    </div>
  )
}

export default Hero