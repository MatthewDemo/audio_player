import { useState } from "react";

function AudioPlayer({ item, audioRef, onPlay, setVisible, setCurrentUrl, currentUrl}) {
  const [isPlay, setIsPlay] = useState(false);


  const playMusic = (url) => {
    if (!isPlay) {
      audioRef.current.src = url;
      audioRef.current.play();
      setIsPlay(!isPlay);
      setVisible(true);
    } else if (isPlay) {
      setVisible(false);
      audioRef.current.pause();
      setIsPlay(!isPlay);
    }
  };
 
  return (
    <div className="AudioPlayer">
      <p className="title">{item.title}</p>
      <p className="author">{item.author}</p>
      <button
        onClick={(e) => {
          playMusic(item.mp3);
          onPlay(item.title, item.author);
          e.target.parentNode.parentNode.classList.add("liChecked");
        }}
        className="Playbtn"
      >
        <img
          className="playImg"
          src={
            isPlay
              ? "https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-6/32/pause--filled-64.png"
              : "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_play-64.png"
          }
          alt="play"
        />
      </button>
      {/* <button
        className="Pausebtn"
        onClick={() => {
          stopMusic();
        }}
      >
        <img
          className="pauseImg"
          src="https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-6/32/pause--filled-64.png"
          alt="pause"
        />
      </button> */}
    </div>
  );
}

export default AudioPlayer;
