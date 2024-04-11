// Song.jsx
import "./Song.css"
import React, { useState } from 'react';

const Song = ({ onSelect }) => {
    const [selectedSong, setSelectedSong] = useState(null);

    const handleCardClick = (songData) => {
        setSelectedSong(songData);
        onSelect(songData); // Pass selected song data to parent component
    };

    return (
        
            <div className="container">
                <div className="side-bar">
                    <div className="list-holder">
                        <li className='li'>Browse</li>
                        <div className="sli">
                            <li className='li'>New Releases</li>
                            <li className='li'>Top Charts</li>
                            <li className='li'>New Releases</li>
                            <li className='li'>Podcast</li>
                            <li className='li'>Top Artists</li>
                            <li className='li'>Radio</li>
                            
                        </div>
                        <li className='li'>Library</li>
                        <div className="sli">
                            <li className='li'>History</li>
                            <li className='li'>Liked Songs</li>
                            <li className='li'>Albums</li>
                            <li className='li'>Podcast</li>
                            <li className='li'>Artists</li>
                        </div>
                    </div>
                </div>
                <div className='main'>
                    <div className='card' onClick={() => handleCardClick({ title: 'S3BZS - MONTAGEM - PR PHUNK', imageUrl: './S3BZS - MONTAGEM - PR PHUNK.jpg', audioUrl: 'Montagem(PaglaSongs).mp3' })}>
                        <div className="imgholder">
                            <img src="./S3BZS - MONTAGEM - PR PHUNK.jpg" alt="" />
                        </div>
                        <div className="dataholder">
                            S3BZS - MONTAGEM
                        </div>
                        
                        {/* Add more cards with onClick event similarly */}
                    </div>
                    <div className='card' onClick={() => handleCardClick({ title: 'FLUXXWAVE', imageUrl: './fluxwave.jpeg', audioUrl: 'Fluxxwave_128-(DJPunjab).mp3' })}>
                            <div className="imgholder">
                                <img src="./fluxwave.jpeg" alt="" />
                            </div>
                            <div className="dataholder">
                                FLUXXWAVE
                            </div>
                        </div>
                        <div className='card' onClick={() => handleCardClick({ title: 'Drift-Phonk', imageUrl: './Drift-Phonk.jpeg', audioUrl: 'drift-phonk-200108.mp3' })}>
                            <div className="imgholder">
                                <img src="./Drift-Phonk.jpeg" alt="" />
                            </div>
                            <div className="dataholder">
                            Drift-Phonk
                            </div>
                        </div>
                </div>
            </div>
            )
}

            export default Song;



