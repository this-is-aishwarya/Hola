import React from 'react';
import "../css/Sidebar.css";
import Sidebaroption from "./Sidebaroption";
import Sidebaroption2 from "./Sidebaroption2";
import Sidebaroption3 from "./Sidebaroption3";
import Sidebaroption4 from "./Sidebaroption4";
import logo from "./logo.png";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AlbumIcon from '@material-ui/icons/Album';

function Sidebar() {
    return (
        <div className="side">
            <div className="sidebar">
                <img className="logo" src={logo} alt="" />
                <div className="gap">
                    <br /><br /><br /><br /><br />
                </div>
                
                <Sidebaroption Icon={FullscreenIcon}/> 
                <Sidebaroption2 Icon={EventNoteIcon} /> 
                <Sidebaroption3 Icon={RecordVoiceOverIcon} /> 
                <Sidebaroption4 Icon={AlbumIcon} />
            </div> 

            <div className="horizon">
                <img className="logo" src={logo} alt="" />
                                
                <Sidebaroption Icon={FullscreenIcon}/> 
                <Sidebaroption2 Icon={EventNoteIcon} /> 
                <Sidebaroption3 Icon={RecordVoiceOverIcon} /> 
                <Sidebaroption4 Icon={AlbumIcon} />
            </div> 
        </div>

        
    )
}

export default Sidebar
