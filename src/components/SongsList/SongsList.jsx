import "./SongsList.scss"
import SongCard from "../SongCard/SongCard"
import loader from "../../assets/images/loader.svg"

function SongsList({ songId, isLoading, query }) {
  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="loading songs" />
      </div>
    )
  }

  else if (!songId) {
    return (<></>)
  }

  else {
    return (
      <div className="songs-list">
        {/* <p>Results for {query}</p> */}
        <SongCard songId={songId} />
      </div>
    )
  }
}

export default SongsList