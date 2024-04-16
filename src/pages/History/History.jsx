import { useEffect, useState } from "react"
import SongCard from "../../components/SongCard/SongCard"
import "./History.scss"

function History() {
    const [history, setHistory] = useState([])

    useEffect(() => {
        const getHistory = () => {
            const storageHistoryIDs = sessionStorage.getItem("historyIDs") || null
            const historyIDs = storageHistoryIDs?.split(",")
            const filteredIDs = historyIDs?.filter((id) => id !== "")
            setHistory(filteredIDs)
        }
        getHistory()
    }, [])

    return (
        <main className="history">
            {history != null ? (history.map((songId) => (
                <SongCard songId={songId} key={songId} next={false} size="sm"/>
            ))) : <p className="history__text">No history yet</p>}
        </main>
    )
}

export default History