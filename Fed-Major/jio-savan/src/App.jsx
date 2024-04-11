// App.jsx
import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Play from './Components/Play'
import Song from './Components/Song'

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (songData) => {
    setSelectedSong(songData); // Store entire song data in state
  };

  return (
    <div>
      <Nav />
      <Song onSelect={handleSongSelect} />
      <Play selectedSong={selectedSong}/>
    </div>
  )
}

export default App;