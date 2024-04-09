import { useEffect } from "react"
import "./SongCard.scss"

function SongCard({ song }) {

  const iFrameURL = `https://open.spotify.com/embed/track/${song}?utm_source=generator`

  return (
    <div id={`embed-iframe`}>
      <iframe src={iFrameURL} width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  )
}

export default SongCard