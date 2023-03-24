import React from "react";
import "./Home.css";

import Sidebar from "../../Layout/Sidebar/Sidebar";
import MusicBar from "../../Layout/MusicBar/MusicBar";
import Topbar from "../../Layout/Topbar/Topbar";

const Home = () => {
    return (
        <>  
            <Sidebar />
            <MusicBar />
            <Topbar />
        </>
    )
}

export default Home;