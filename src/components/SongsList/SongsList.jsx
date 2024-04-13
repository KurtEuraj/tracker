import "./SongsList.scss"
import SongCard from "../SongCard/SongCard"
import loader from "../../assets/images/loader.svg"

function SongsList({ song, isLoading, savedQuery, handleNextSong }) {
  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="loading songs" />
      </div>
    )
  }

  else if (!song.songId) {
    return (<></>)
  }

  else {
    return (
      <div className="songs-list">
        <h2 className="songs-list__heading">Discover Similar Tracks to: "{savedQuery}"</h2>
        <SongCard song={song} handleNextSong={handleNextSong} />
      </div>
    )
  }
}

export default SongsList