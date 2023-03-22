import React from "react";
import "./Home.css";

import Sidebar from "../../Layout/Sidebar/Sidebar";
import MusicBar from "../../Layout/MusicBar/MusicBar";
import Topbar from "../../Layout/Topbar/Topbar";

const Home = () => {
    return (
        <>  
            <div className="test-wrap">
                <Sidebar />
                <div className="test-main">
                    <Topbar />
                    <div className="main"></div>
                </div>
            </div>
            <MusicBar />
        </>
    )
}

export default Home;