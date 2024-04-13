import { useState } from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import SongsList from './components/SongsList/SongsList';
import axios from "axios"

function App() {

  const [song, setSong] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [savedQuery, setSavedQuery] = useState("")

  const handleSongsSuggestion = (result) => {
    const searchStr = `${result.song} by ${result.artists}`
    setQuery(searchStr)
  }

  const updateHistory = (songName) => {
    let history = sessionStorage.getItem("history") || ""
    const updatedHistory = history += `${songName}, `
    sessionStorage.setItem("history", updatedHistory)
  }

  const updateSearchTerm = async (e) => {
    setQuery(e.target.value)
    if (query) {
      const reqBody = {
        search: e.target.value
      }
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tracks/search`, reqBody)
      setSearchResults(response.data)
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSong({})
    const songToSearch = e.target.song.value
    setSavedQuery(songToSearch)
    const reqBody = {
      song: songToSearch,
      history: sessionStorage.getItem("history") || ""
    }
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tracks`, reqBody)
    updateHistory(response.data.songName)
    setSong(response.data)
    setIsLoading(false)
  }

  const handleNextSong = async () => {
    setIsLoading(true)
    setSong({})
    const reqBody = {
      song: savedQuery,
      history: sessionStorage.getItem("history") || ""
    }
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tracks`, reqBody)
    updateHistory(response.data.songName)
    setSong(response.data)
    setIsLoading(false)
  }

  return (
    <div className="App">
      <main>
        <Hero handleSearch={handleSearch} updateSearchTerm={updateSearchTerm} searchResults={searchResults} handleSongsSuggestion={handleSongsSuggestion} query={query} />
        <SongsList song={song} isLoading={isLoading} savedQuery={savedQuery} handleNextSong={handleNextSong}/>
      </main>
    </div>
  );
}

export default App;
