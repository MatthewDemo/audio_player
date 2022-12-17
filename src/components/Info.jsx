import React from "react";
import "./Info.css";
function Info({ title, author, setAudioVolume }) {

    
  return (
    <div className="Info">
        <img className="infoGif" src="https://i.gifer.com/Z23b.gif" alt="equa" />
      <p className="infoTitle">{title}</p>
      <p className="infoAuthor">{author}</p>
      <input className="range" type="range" defaultValue={50} onInput={(e) => setAudioVolume(e.target.value / 100)} />
    </div>
  );
}

export default Info;
