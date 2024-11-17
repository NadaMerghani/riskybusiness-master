import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import StoryScreen from "./pages/StoryScreen/StoryScreen";
import GameScreen from "./pages/GameScreen/GameScreen";
import AboutScreen from "./pages/AboutScreen/AboutScreen";
import DescriptionScreen from "./pages/DescriptionScreen/DescriptionScreen";
import CreditsScreen from "./pages/CreditsScreen/CreditsScreen";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react"; // Import useState for state management
import song1 from './assets/song1.mp3';
import song2 from './assets/song2.mp3';
import song3 from './assets/song3.mp3';

// Define the songs array with paths and song names
const songs = [
  { MP3: song1, name: "Song 1" },
  { MP3: song2, name: "Song 2" },
  { MP3: song3, name: "Song 3" }
];

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track which song is playing

  // Function to change the song
  const handleSongChange = (index) => {
    setCurrentSongIndex(index); // Update the song index to the selected song
  };

  return (
    <>
      <Router>
        <div className="app-container">
          {/* Audio player component that will persist across all routes */}
          <ReactAudioPlayer
            src={songs[currentSongIndex].MP3} // Dynamically change the song source
            autoPlay
            controls
            loop
          />

          {/* Buttons to switch between songs */}
          <div>
            {songs.map((song, index) => (
              <button key={index} onClick={() => handleSongChange(index)}>
                {song.name} {/* Display song names */}
              </button>
            ))}
          </div>

          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/story" element={<StoryScreen />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/description" element={<DescriptionScreen />} />
            <Route path="/credits" element={<CreditsScreen />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;