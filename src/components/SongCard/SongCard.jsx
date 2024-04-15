import "./SongCard.scss"

function SongCard({ songId, handleNextSong, next = true, size="reg"}) {

  const iFrameURL = `https://open.spotify.com/embed/track/${songId}?utm_source=generator`
  let iFrame = ""
  try {
    iFrame = <iframe className="song-card__iframe" title="Song playback and controls" src={iFrameURL} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  } catch (error) {
    console.error(error)
  }

  return (
    <div className={size === "sm" ? "song-card song-card--sm" : "song-card"}>
      {iFrame}
      {next ? (
        <div className="song-card__bottom">
          <div className="song-card__next-button">
            <p onClick={handleNextSong}>Next</p>
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  )
}

export default SongCard