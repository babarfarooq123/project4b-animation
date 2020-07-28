import React from 'react';
import './App.css';
import imag from './mike.png';
import useWebAnimations, {fadeInBottomLeft} from "@wellyshen/use-web-animations";

function Lastcomp2() {
    const {ref} = useWebAnimations({...fadeInBottomLeft})

  return (
    <div ref={ref} className='mik'>
        <img src={imag} alt='Mike Image' />
    </div>
  );
}

export default Lastcomp2;
