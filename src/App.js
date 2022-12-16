import "./App.css";
import React from "react";
import Info from "./components/Info";


function App() {
      const resultArray = [
        {
          title: "Tech House vibes",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
        },
        {
          title: "Hazy After Hours",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3",
        },
        {
          title: "Hip Hop 02",
          author: "by Lily J",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3",
        },
        {
          title: "A Very Happy Christmas",
          author: "by Michael Ramir C.",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3",
        },
        {
          title: "Sun and His Daughter",
          author: "by Eugenio Mininni",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-sun-and-his-daughter-580.mp3",
        },
        {
          title: "Raising Me Higher",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-raising-me-higher-34.mp3",
        },
        {
          title: "Driving Ambition",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3",
        },
        {
          title: "Life is a Dream",
          author: "by Michael Ramir C.",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3",
        },
        {
          title: "Serene View",
          author: "by Arulo",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
        },
        {
          title: "Dance with Me",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-dance-with-me-3.mp3",
        },
        {
          title: "Deep Urban",
          author: "by Eugenio Mininni",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
        },
        {
          title: "Dreaming Big",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
        },
        {
          title: "Hollidays",
          author: "by Grigoriy Nuzhny",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-hollidays-690.mp3",
        },
        {
          title: "C.B.P.D",
          author: "by Arulo",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-cbpd-400.mp3",
        },
        {
          title: "Complicated",
          author: "by Arulo",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-complicated-281.mp3",
        },
        {
          title: "Feeling Happy",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-feeling-happy-5.mp3",
        },
        {
          title: "Cat Walk",
          author: "by Arulo",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-cat-walk-371.mp3",
        },
        {
          title: "Silent Descent",
          author: "by Eugenio Mininni",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-silent-descent-614.mp3",
        },
        {
          title: "Sleepy Cat",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3",
        },
        {
          title: "Beautiful Dream",
          author: "by Diego Nava",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3",
        },
        {
          title: "Playground Fun",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-playground-fun-12.mp3",
        },
        {
          title: "Valley Sunset",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-valley-sunset-127.mp3",
        },
        {
          title: "Games Worldbeat",
          author: "by Bernardo R.",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3",
        },
        {
          title: "Island Beat",
          author: "by Arulo",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-island-beat-250.mp3",
        },
        {
          title: "BRIDGE N° 98",
          author: "by Eugenio Mininni",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-bridge-n-98-621.mp3",
        },
        {
          title: "Spirit in the Woods",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-spirit-in-the-woods-139.mp3",
        },
        {
          title: "Getting Ready",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-getting-ready-46.mp3",
        },
        {
          title: "Piano Reflections",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3",
        },
        {
          title: "Summer Fun",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-summer-fun-13.mp3",
        },
        {
          title: "Fun Times",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-fun-times-7.mp3",
        },
        {
          title: "Pop 05",
          author: "by Grigoriy Nuzhny",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-pop-05-695.mp3",
        },
        {
          title: "Epical Drums 01",
          author: "by Grigoriy Nuzhny",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-epical-drums-01-676.mp3",
        },
        {
          title: "Relaxing in Nature",
          author: "by Diego Nava",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
        },
        {
          title: "Deep Meditation",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-deep-meditation-109.mp3",
        },
        {
          title: "Just Kidding",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-just-kidding-11.mp3",
        },
        {
          title: "Comical",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-comical-2.mp3",
        },
        {
          title: "Sports Highlights",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-sports-highlights-51.mp3",
        },
        {
          title: "Forest Treasure",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3",
        },
        {
          title: "Delightful",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-delightful-4.mp3",
        },
        {
          title: "Just Chill",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-just-chill-16.mp3",
        },
        {
          title: "Uplift Me",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-uplift-me-35.mp3",
        },
        {
          title: "Slow Trail",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-slow-trail-71.mp3",
        },
        {
          title: "Motivating Mornings",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-motivating-mornings-33.mp3",
        },
        {
          title: "Piano Horror",
          author: "by Francisco Alvear",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-piano-horror-671.mp3",
        },
        {
          title: "Kodama Night Town",
          author: "by Alejandro Magaña (A. M.)",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-kodama-night-town-114.mp3",
        },
        {
          title: "Tinsel and Mistletoe",
          author: "by Ahjay Stelino",
          mp3: "https://assets.mixkit.co/music/preview/mixkit-tinsel-and-mistletoe-93.mp3",
        },
      ];
    
      var radio = new Audio();
      const stopMusic = () => {
        radio.pause();
      };
      const playMusic = (url) => {
        radio.src = url;
        radio.play();
      };

      // const [titleOfCurrentSong, setTitleOfCurrentSong] = React.useState('default')
  var titleOfCurrentSong = "defoltno"

  return (
    <div className="App">
     <ul>
        {resultArray.map((item, idx) => (
          <li key={idx}>
            <p className="title">{item.title}</p>
            <p className="author">{item.author}</p>
            <button
              onClick={(event) => {
                playMusic(item.mp3);
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
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
