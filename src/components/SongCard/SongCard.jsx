import "./SongCard.scss"

function SongCard({ songId }) {

  const iFrameURL = `https://open.spotify.com/embed/track/${songId}?utm_source=generator`

  return (
    <div className="song-card">
      <iframe className="song-card__iframe" src={iFrameURL} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  )
}

export default SongCard