import React from 'react';
import Video from './video';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import skype from './skype.png';
import gotomeeting from './gotomeeting.png';
import fb from './fb-messanger.png';
import appear from './appear.png';

function Appicon2() {
    const { ref } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0,40px)'},
            {transform: 'translate(0,-40px)'},
            {transform: 'translate(0,40px)'},
            
        ],
        timing: {
            duration: 4000,
            iterations: Infinity,
            easing: 'ease-in-out',
        }
    });


  return (
    <div ref={ref}>
        <img className='c6' src={skype} width='40px' height='40px' alt='skype' />
        <img className='c7' src={gotomeeting} width='40px' height='40px' alt='gotomeeting' />
        <img className='c8' src={fb} width='40px' height='40px' alt='fb' />
        <img className='c9' src={appear} width='40px' height='40px' alt='appear' />
    </div>
  );
}

export default Appicon2;
