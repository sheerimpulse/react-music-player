import React from "react";


const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    //Set Selected Song highlight via active state on songs
    const newSongs = songs.map((songItem) => {
      if (songItem.id === song.id) {
        return {
          ...songItem,
          active: true,
        };
      } else {
        return {
          ...songItem,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    //Check if audio is playing
    if (isPlaying) audioRef.current.play();
    
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
