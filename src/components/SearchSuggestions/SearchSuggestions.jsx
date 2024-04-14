import "./SearchSuggestions.scss"

function SearchSuggestions({ searchResults, handleSongsSuggestion }) {
    return (
        <div className="search-results">
            {searchResults.map((result) => (
                <div key={searchResults.indexOf(result)} className="search-results__item" onClick={() => handleSongsSuggestion(result)}>
                    <p>{result.song}</p>
                    <p className="search-results__artist" >{result.artists}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchSuggestions