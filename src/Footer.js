import React from 'react'
import "./Footer.css";
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import {Grid, Slider} from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import MicOffIcon from '@material-ui/icons/MicOff';
import CallEndIcon from '@material-ui/icons/CallEnd';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ChatIcon from '@material-ui/icons/Chat';
import { Button } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <Grid container spacing={2} width="10px">
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
                
            </div>
            <div className="footer-center">
                <ScreenShareIcon classname="extreme" style={{fill: "white"}}/>
                <MicOffIcon className="sides" style={{fill: "white"}}/>
                <CallEndIcon classname="middle" style={{fill: "red"}} />
                <VideocamOffIcon className="sides" style={{fill: "white"}}/>
                <ChatIcon className="extreme" style={{fill: "white"}}/>
            </div>
            <div className="footer-right">
                
            </div>
        </div>
    )
}

export default Footer
