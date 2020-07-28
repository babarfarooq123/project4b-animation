import React from 'react';
import './App.css';
import lapchild from './lapchild.png';
import useWebAnimations, {zoomIn} from "@wellyshen/use-web-animations";

function Laptop() {
    const {ref} = useWebAnimations({...zoomIn})

  return (
    <div className='lapmain'>
        <div className="laptop">
            <img ref={ref} className='lapc' src={lapchild} alt="Laptop Child" />
        </div>
    </div>
  );
}

export default Laptop;
