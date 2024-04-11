import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <div className="options">
                    <div>
                        <img src="./jiosavan.jpeg" alt="logo" width={70} />
                    </div>
                    <div className="li-holder">
                    <li className='li'>Music</li>
                    <li className='li'>Podcasts</li>
                    <li className='li'>Go Pro</li>
                </div>
                </div>
               
                <div className='inputholder'>
                    <input type="text" placeholder='Search for songs' />
                </div>

                <select name="" id="">
                    <option  value="hello">hindi</option>
                    <option value="hello">punjabi</option>
                    <option value="hello">English</option>
                    <option value="hello">hindi</option>
                </select>

                 <div className="li-holder">
                    <li className='li'>Sign Up</li>
                    
                    <li className='li'>Login</li>
                    
                </div>
            </div>
  

        </nav>
    )
}

export default Nav