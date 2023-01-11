import React from "react";
import ReactPlayer from "react-player";

const Music = () => {
  const soundcloud = "https://soundcloud.com/ell1psis";
  const bandcamp = "https://ell1psis.bandcamp.com";
  const spotify =
    "https://open.spotify.com/artist/7t1UvvGyjeabOYMJzFY5xp?si=eoDob9m2THSEHRE4XNlyFQ";

  return (
    <div>
      <title>ell!psis | Music</title>
      <h1>Music</h1>
      {/* <h3>Spotify</h3>
      
      <h3>Bandcamp</h3>
      
      <h3>SoundCloud</h3>
      <ReactPlayer 
        url={soundcloud} 
      /> */}
      <div className="music-links">
        <p>
          <a className="soundcloud" href="https://soundcloud.com/ell1psis">
            SoundCloud{" "}
          </a>
        </p>
        <p>
          <a className="bandcamp" href="https://ell1psis.bandcamp.com/">
            {" "}
            Bandcamp{" "}
          </a>
        </p>
        <p>
          <a
            className="spotify"
            href="https://open.spotify.com/artist/7t1UvvGyjeabOYMJzFY5xp?si=zOGnjglQRCOu25ltKsc2cw"
          >
            {" "}
            Spotify
          </a>
        </p>
      </div>
    </div>
  );
};

export default Music;
