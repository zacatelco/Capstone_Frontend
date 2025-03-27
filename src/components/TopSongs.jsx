
import React, { useState, useEffect } from "react";
import "./Music.css";

const TopSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_MUSIC_API; // Get API Key from .env

  useEffect(() => {
    if (!API_KEY) {
      setError("API key is missing.");
      setLoading(false);
      return;
    }

    const fetchTopSongs = async () => {
      try {
        const response = await fetch(
          `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        if (data.tracks && data.tracks.track) {
          setSongs(data.tracks.track.slice(0, 10)); // Get top 10 songs
        } else {
          setError("Failed to fetch top songs");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchTopSongs();
  }, [API_KEY]); // Dependency on API_KEY

  if (loading) return <p>Loading top songs...</p>;
  if (error) return <p>{error}</p>;

  return (
    // <div>
    //   <h2>Top Songs</h2>
    //   <ul>
    //     {songs.map((song, index) => {
    //       const mediumImage = song.image.find((img) => img.size === "medium")?.[
    //         "#text"
    //       ];

    //       return (
    //         <li key={index}>
    //           <img src={mediumImage || "default.jpg"} alt={song.name} />

    //           <p>
    //             <a href={song.url} target="_blank" rel="noopener noreferrer">
    //               {song.name}
    //             </a>{" "}
    //             by {song.artist.name}
    //           </p>
    //           <p>Listeners: {song.listeners}</p>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>

    <div className="music-section">
      <h2>Top Songs</h2>
      <ul className="music-list">
        {songs.map((song, index) => {
          const mediumImage = song.image.find((img) => img.size === "medium")?.["#text"];
          return (
            <li key={index} className="music-item">
              <img src={mediumImage || "default.jpg"} alt={song.name} className="music-image"/>
              <p className="music-name">
                <a href={song.url} target="_blank" rel="noopener noreferrer">
                  {song.name}
                </a>{" "}
                by {song.artist.name}
              </p>
              <p className="music-listeners">Listeners: {song.listeners}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopSongs;
