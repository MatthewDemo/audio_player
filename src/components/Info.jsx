import React from "react";
import "./Info.css";
function Info({ title, author }) {
  return (
    <div className="Info">
        <img className="infoGif" src="https://i.gifer.com/Z23b.gif" alt="equa" />
      <p className="infoTitle">{title}</p>
      <p className="infoAuthor">{author}</p>
    </div>
  );
}

export default Info;
