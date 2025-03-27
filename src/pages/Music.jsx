import React from "react";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";
import "../components/Music.css";

const Music = () => {
  return (
    <div className="music-page">
      <h1 className="music-title">🎵 MySpace Music</h1>
      <div className="music-container">
        <TopArtists />
        <TopSongs />
      </div>
    </div>
  );
};

export default Music;
