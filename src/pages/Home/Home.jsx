import { useState } from 'react';
import Hero from '../../components/Hero/Hero'
import SongsList from '../../components/SongsList/SongsList';
import axios from "axios"

function Home() {

    const [song, setSong] = useState({})
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [savedQuery, setSavedQuery] = useState("")

    const updateHistory = (songName, songId) => {
        let history = sessionStorage.getItem("history") || ""
        let historyIDs = sessionStorage.getItem("historyIDs") || ""
        const updatedHistory = history += `${songName}, `
        const updatedHistoryIDs = historyIDs += `${songId},`
        sessionStorage.setItem("history", updatedHistory)
        sessionStorage.setItem("historyIDs", updatedHistoryIDs)
    }

    const updateSearchTerm = async (e) => {
        setQuery(e.target.value)
        setShowResults(true)
        if (query) {
            const reqBody = {
                search: e.target.value
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tracks/search`, reqBody)
            setSearchResults(response.data)
        }
    }

    const handleSongsSuggestion = async (result) => {
        const searchStr = `${result.song} by ${result.artists}`
        setShowResults(false)
        setQuery(searchStr)
        setIsLoading(true)
        setSong({})
        const songToSearch = searchStr
        setSavedQuery(searchStr)
        const reqBody = {
            song: songToSearch,
            history: sessionStorage.getItem("history") || ""
        }
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tracks`, reqBody)
        updateHistory(response.data.songName, response.data.songId)
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
        updateHistory(response.data.songName, response.data.songId)
        setSong(response.data)
        setIsLoading(false)
    }

    return (
        <main>
            <Hero updateSearchTerm={updateSearchTerm} searchResults={searchResults} handleSongsSuggestion={handleSongsSuggestion} query={query} showResults={showResults} />
            <SongsList song={song} isLoading={isLoading} savedQuery={savedQuery} handleNextSong={handleNextSong} />
        </main>
    );
}

export default Home;
