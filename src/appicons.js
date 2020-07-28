import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import hangout from './hangout.png';
import webex from './webex.png';
import zoom from './zoom.png';
import telegram from './telegram.png';
import viber from './viber.png';
import slack from './slack.png';
import Appicon2 from './appicon2';
import useWebAnimations from "@wellyshen/use-web-animations";

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
  

function Appicon() {
    const classes = useStyles();

    const { ref } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0,0)'},
            {transform: 'translate(0,40px)'},
            {transform: 'translate(0,-40)'},
        ],
        timing: {
            duration: 3500,
            iterations: Infinity,
        }
    });



  return (
    <div className="App app-icons-main">
        <h2>Control<br />your microphone<br /> anywhere</h2>
        <div>

        <Grid container spacing={3}>
        
            <Grid ref={ref} item xs={12} sm={6}>
                <img className='c0' src={hangout} width='40px' height='40px' alt='hangout' />
                <img className='c1' src={webex} width='40px' height='40px' alt='webex' />
                <img className='c2' src={zoom} width='40px' height='40px' alt='zoom' />
                <img className='c3' src={telegram} width='40px' height='40px' alt='telegram' />
                <img className='c4' src={viber} width='40px' height='40px' alt='viber' />
                <img className='c5' src={slack} width='40px' height='40px' alt='slack' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Appicon2 />
            </Grid>
            <Grid item xs={12}>
                <h2 className='h2icon'>Control<br />your microphone<br />anywhere</h2>
            </Grid>
        
        </Grid>

        </div>
    </div>
  );
}

export default Appicon;
