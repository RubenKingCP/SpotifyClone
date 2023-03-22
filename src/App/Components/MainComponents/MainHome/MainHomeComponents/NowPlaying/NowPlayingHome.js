import React from "react";
import "./NowPlayingHome.css"

const NowPlayingHome = () => {
    return (
        <>
            <div className="now-playing-home-wrapper">
                <p>Now Playing: TestMusic</p>
                <div className="img">
                    <img></img>
                </div>
                <div className="play-controls-home">
                    <div className="edge-btn"></div>
                    <div className="side-btn"></div>
                    <div className="middle-btn"></div>
                    <div className="side-btn"></div>
                    <div className="edge-btn"></div>
                </div>
            </div>
        </>
    )
}

export default NowPlayingHome;