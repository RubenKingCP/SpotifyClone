import React from "react";
import "./MainHome.css";

import NowPlayingHome from "./MainHomeComponents/NowPlaying/NowPlayingHome";

const MainHome = () => {
    return (
        <>  
        <div className="main-home-wrapper">
                <div className="layout-wrapper">
                    <div className="now-playing-style-wrapper">
                        <NowPlayingHome />
                    </div>
                    <div className="recently"></div>
                </div>
                <div className="copy"></div>
                <div className="copy"></div>
            </div>
        </>
    )
}

export default MainHome;