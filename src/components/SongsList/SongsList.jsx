import "./SongsList.scss"
import SongCard from "../SongCard/SongCard"

function SongsList({ songs }) {
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

export default SongsList