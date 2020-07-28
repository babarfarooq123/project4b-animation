import React from 'react';
import './App.css';
import Vid from './headvideo.mp4';
import Appicon from './appicons';


function Video() {
  return (
    <div className="App">
        <h1 className='heading'>Mutify for Mac</h1>
        <p className='para'>Use a shortcut or the touch bar on any Mac device<br /> to quickly mute your microphone</p>
        <div className='headlogo'>
            <video width="490" height="340" autoPlay loop>
                <source src={Vid} type="video/mp4" />
            </video>
        </div>
        <Appicon />
    </div>
  );
}

export default Video;