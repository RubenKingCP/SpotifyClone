import React from "react";
import "./Home.css";

import Sidebar from "../../Layout/Sidebar/Sidebar";
import MusicBar from "../../Layout/MusicBar/MusicBar";
import Topbar from "../../Layout/Topbar/Topbar";
import MainHome from "../../Components/MainComponents/MainHome/MainHome";

const Home = () => {
    return (
        <>  
            <div className="test-wrap">
                <Sidebar />
                <div className="position-div"></div>
                <div className="test-main">
                    <Topbar />
                    <div className="main">
                        <MainHome />
                    </div>
                </div>
            </div>
            <MusicBar />
        </>
    )
}

export default Home;