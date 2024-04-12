import "./SongCard.scss"

function SongCard({ song }) {

  const iFrameURL = `https://open.spotify.com/embed/track/${song}?utm_source=generator`

  const errorText = document.querySelector("body > pre")

  return (
    <>
      {errorText?.innerHTML === "upstream request timeout" ? (
        null
      ) :
        (<div className="song-card">
          <iframe className="song-card__iframe" src={iFrameURL} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>)}
    </>
  )
}

export default SongCard