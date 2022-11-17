import React from 'react'
import ReactPlayer from 'react-player'

const Music = () => {
  const soundcloud = "https://soundcloud.com/ell1psis"
  const bandcamp = "https://ell1psis.bandcamp.com"
  const spotify = "https://open.spotify.com/artist/7t1UvvGyjeabOYMJzFY5xp?si=eoDob9m2THSEHRE4XNlyFQ"

  return (
    <div>
      <h1>Music</h1>
      <h3>Spotify</h3>
      
      <h3>Bandcamp</h3>
      
      <h3>SoundCloud</h3>
      <ReactPlayer 
        url={soundcloud} 
      />
      
    
    </div>
  )
}

export default Music