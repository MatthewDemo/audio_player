import React from "react";
import "./Info.css";
function Info({authorOfCurrentSong , titleOfCurrentSong}) {

  return (
    <div className="Info">
      {/* <p>{authorOfCurrentSong}</p> */}
      <p>{titleOfCurrentSong}</p>
    </div>
  );
}

export default Info;
