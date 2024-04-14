import "./SongCard.scss"

function SongCard({ song, handleNextSong }) {

  const iFrameURL = `https://open.spotify.com/embed/track/${song.songId}?utm_source=generator`
  let iFrame = ""
  try {
    <iframe className="song-card__iframe" src={iFrameURL} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    iFrame = <iframe className="song-card__iframe" src={iFrameURL} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  } catch (error) {
    console.error(error)
  }

  return (
    <div className="song-card">
      {iFrame}
      <div className="song-card__bottom">
        <div className="song-card__next-button">
          <p onClick={handleNextSong}>Next</p>
        </div>
      </div>
    </div>
  )
}

export default SongCard