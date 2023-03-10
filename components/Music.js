import React from "react";


const Music = () => {
  const soundcloud = "https://soundcloud.com/ell1psis";
  const bandcamp = "https://ell1psis.bandcamp.com";
  const spotify =
    "https://open.spotify.com/artist/7t1UvvGyjeabOYMJzFY5xp?si=eoDob9m2THSEHRE4XNlyFQ";

  return (
    <div>
        <h3 className="music-header">Please follow wherever you find your music:</h3>
        <br></br>
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
