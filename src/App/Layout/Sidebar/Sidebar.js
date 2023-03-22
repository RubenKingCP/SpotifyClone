import React from "react";
import "./Sidebar.css"

import BottomPart from "../../Components/SidebarComponents/BottomPart/BottomPart";
import MiddlePart from "../../Components/SidebarComponents/MiddlePart/MiddlePart";
import TopPart from "../../Components/SidebarComponents/TopPart/TopPart";

const Sidebar = () => {
    return(
        <>
            <div className="side-wrapper">
                <TopPart />
                <MiddlePart />
                <BottomPart />
            </div>
        </>
    )
}

export default Sidebar;