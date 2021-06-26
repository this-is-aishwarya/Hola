import React from 'react'
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./MainPage.css";
import {myFunction} from "./dark";

function MainPage() {
    return (
        <div className="main">
            <div className="main_body">
                <Sidebar />
                {/* <button className="btn" onClick={myFunction} id="img">🌞</button> */}
                <Body />
                <Footer />
            </div>    
        </div>
    )
}

export default MainPage
