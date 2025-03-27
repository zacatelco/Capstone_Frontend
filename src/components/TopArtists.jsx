import React, { useState, useEffect } from "react";
import "./Music.css";

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_MUSIC_API;
  useEffect(() => {
    if (!API_KEY) {
      setError("API key is missing.");
      setLoading(false);
      return;
    }

    const fetchTopArtists = async () => {
      try {
        const response = await fetch(
          `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        if (data.artists && data.artists.artist) {
          setArtists(data.artists.artist.slice(0, 10)); // Get top 10 artists
        } else {
          setError("Failed to fetch top artists");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, [API_KEY]);

  if (loading) return <p>Loading top artists...</p>;
  if (error) return <p>{error}</p>;

  return (
    // <div>
    //   <h2>Top Artists</h2>
    //   <ul>
    //     {artists.map((artist, index) => {
    //       const mediumImage = artist.image.find(
    //         (img) => img.size === "medium"
    //       )?.["#text"];

    //       return (
    //         <li key={index}>
    //           <img src={mediumImage || "default.jpg"} alt={artist.name} />
    //           <p>
    //             <a href={artist.url} target="_blank" rel="noopener noreferrer">
    //               {artist.name}
    //             </a>
    //           </p>
    //           <p>Listeners: {artist.listeners}</p>
              
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>

    <div className="music-section">
      <h2>Top Artists</h2>
      <ul className="music-list">
        {artists.map((artist, index) => {
          const mediumImage = artist.image.find((img) => img.size === "medium")?.["#text"];
          return (
            <li key={index} className="music-item">
              <img src={mediumImage || "default.jpg"} alt={artist.name} className="music-image"/>
              <p className="music-name">
                <a href={artist.url} target="_blank" rel="noopener noreferrer">
                  {artist.name}
                </a>
              </p>
              <p className="music-listeners">Listeners: {artist.listeners}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopArtists;
