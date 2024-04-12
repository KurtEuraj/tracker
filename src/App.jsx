import { useState } from 'react';
import './App.scss';
import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero';
import SongsList from './components/SongsList/SongsList';
import axios from "axios"

function App() {

  const [songs, setSongs] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")

  const handleSongsSuggestion = (result) => {
    const searchStr = `${result.song} by ${result.artists}`
    setQuery(searchStr)
  }

  const updateSearchTerm = async (e) => {
    setSongs([])
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
    setSongs([])
    const songToSearch = e.target.song.value
    const reqBody = {
      song: songToSearch
    }
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tracks`, reqBody)
    setSongs(response.data)
    setIsLoading(false)
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Hero handleSearch={handleSearch} updateSearchTerm={updateSearchTerm} searchResults={searchResults} handleSongsSuggestion={handleSongsSuggestion} query={query}/>
        <SongsList songs={songs} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;
