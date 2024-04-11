import "./SongsList.scss"
import SongCard from "../SongCard/SongCard"
import loader from "../../assets/images/loader.svg"

function SongsList({ songs, isLoading }) {
  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="loading songs" />
      </div>
    )
  }
  else {
    return (
      <>
        <ul className="songs-list">
          {songs.map((song) => (
            <SongCard song={song} key={song} />
          ))}
        </ul>
      </>
    )
  }
}

export default SongsList