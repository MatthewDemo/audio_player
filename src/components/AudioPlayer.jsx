
function AudioPlayer({ item, audioRef, onPlay, setVisible }) {
  const stopMusic = () => {
    setVisible(false)
    audioRef.current.pause();
  };
  const playMusic = (url) => {
    audioRef.current.src = url;
    audioRef.current.play();
  };

  return (
    <div className="AudioPlayer">
      <p className="title">{item.title}</p>
      <p className="author">{item.author}</p>
      <button
        onClick={() => {
          playMusic(item.mp3);
          onPlay(item.title, item.author);
        }}
        className="Playbtn"
      >
        <img
          className="playImg"
          src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_play-64.png"
          alt="play"
        />
      </button>
      <button
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
      </button>
      
    </div>
  );
}

export default AudioPlayer;
