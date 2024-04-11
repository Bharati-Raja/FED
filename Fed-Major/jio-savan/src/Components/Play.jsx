// Play.jsx
import React, { useState, useRef } from 'react';
import './Play.css';

const Play = ({ selectedSong }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='player'>
            {selectedSong && (
                <>
                    <div className='music' onClick={togglePlayPause}>
                        <img src={selectedSong.imageUrl} width="37" alt="nothing" />
                    </div>
                    <div className='text'>
                        <b>{selectedSong.title}</b>
                        <p>{selectedSong.description}</p>
                    </div>
                    <div className='controls'>
                        <audio autoPlay ref={audioRef} src={selectedSong.audioUrl} controls controlsList="nodownload nofullscreen noremoteplayback noshare nolocation"/>
                    </div>
                </>
            )}
        </div>
    );
};

export default Play;
