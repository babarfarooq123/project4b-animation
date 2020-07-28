import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useWebAnimations, {fadeInUp} from "@wellyshen/use-web-animations";
import headphone1 from './headphone1.png';
import headphone2 from './headphone2.png';
import Lastcomp2 from './lastcomp2';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function Lastcomp() {
    const classes = useStyles();
    const { keyframes, timing } = fadeInUp;
    const {ref} = useWebAnimations({
        keyframes:[
            {transform: 'translate(0,100%)'},
            {transform: 'translate(0,0)'}
        ],
        timing: {
            ...timing,
        }
    })

  return (
    <div>

        <Grid container spacing={3}>
        
            <Grid item xs={12} sm={6}>
                <div className='lastcomp'>
                    
                    <div ref={ref} className='lastcomp-h'>
                    
                        <img src={headphone1} alt='Headphone 1' />
                        <img src={headphone2} alt='Headphone 2' />
                        <Lastcomp2 />
                    </div>
                    
                </div>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <h1 className='heading1'>Stay muted even on a<br />newly connected device</h1>
                <p className='para1'>If you mute your mic on a call and switch to a new<br />
                device, such as your AirPods, the app will detect<br />
                the change and mute the new device as well Download</p>
            </Grid>
    
        </Grid>
        
    </div>
  );
}

export default Lastcomp;
