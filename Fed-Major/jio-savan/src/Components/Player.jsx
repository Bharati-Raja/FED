import React, { useState } from 'react'
// import "Nav.css"
// import songLogo from "../assets/songlogo.avif"
// import {BiRepeat} from "react-icons/bi"
// import {IoMdSkipBackward, IoMdSkipForward} from "react-icons/io" 
// import {PiShuffleBold} from "react-icons/pi"
// import {FaPlay , FaPause} from "react-icons/fa"
// const paused= <FaPause className='text-grey-300'/>
// const playing= <FaPlay className='text-grey-300'/>
// import {HiSpeakerWave} from "react-icons/hi2"
// import {LuHardDriveDownload} from "react-icons/lu"
// import VolumeController from './Vol'

function Player() {
    const [play , setplay]= useState(false)
    const [vol , setVol]=useState(false)
  return (
    <>
    <div className='fixed bottom-0 right-0 left-0 bg-[#f5f5f5ff] flex flex-col'>
        <input type="range" name="progress" id="progress" min={0} max={100} step="0.1" value={0} className='w-full h-[10px] text-[rgb(43, 197, 180)] '/>

        <div className='flex justify-between items-center mb-3 px-3'>
            <div className='flex justify-start items-center gap-5 lg: w-[30vw]'>
                <img src={songLogo} alt="" width={70}
                className='rounded-lg'
                />
                <div className='hidden lg:block'>
                <span>Lorem, ipsum.</span>
                <p className='text-sm text-gray-700 '>Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
            
            <div className='flex text-2xl lg:text-3xl gap-5 lg :w-[40vw] justify-center mb-2 lg:mr-[400px]'>
                <BiRepeat className='text-grey-700 hover:text-grey-400 cursor-pointer'/>
                <IoMdSkipBackward className='text-grey-700 hover:text-gray-500 cursor-pointer'/>
                <button onClick={() => setplay(!play)}>{play ? paused : playing}</button>
                <IoMdSkipForward className='text-grey-300  hover:text-gray-500 cursor-pointer'/>
                <PiShuffleBold className='text-grey-300  hover:text-gray-500 cursor-pointer'/>
            </div>
            <div className='flex lg: w-[60px] juestify-end items-center gap-2 mr-10'>
                <LuHardDriveDownload className='text-grey-700 hover:text-grey-400 cursor-pointer text-2lg lg: text-3xl lg:mr-2'/>
                <HiSpeakerWave className='text-grey-700 hover:text-grey-400 cursor-pointer lg: text-3xl' onClick={() => setVol(!vol)}/>

                 {(vol) ? <VolumeController/> : <div></div> }
            </div>
        </div>
    </div>

    </>
  )
}

export default Player