import React from "react";
import "./Sidebar.css"

import Navigation from "../../Components/SidebarComponents/Navigation/Navigation";
import Playlists from "../../Components/SidebarComponents/Playlists/Playlists";

const Sidebar = () => {
    return(
        <>
            <div className="side-wrapper">
                <Navigation />
                <Playlists />
            </div>
        </>
    )
}

export default Sidebar;