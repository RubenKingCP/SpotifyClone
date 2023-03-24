import React from "react";
import "./RecentlyPlayed.css"

import MusicLabelSmall from "../MusicLabels/MusicLabelSmall/MusicLabelSmall";

const RecentlyPlayed = () => {
    return (
        <>
            <div>
                <h1 className="recentlyPlayed-title">RecentlyPlayed</h1>
                <div className="recentlyPlayed-wrapper"> 
                    <MusicLabelSmall />                
                    <MusicLabelSmall />                
                    <MusicLabelSmall />                
                    <MusicLabelSmall />                
                </div>
            </div>
        </>
    )
}

export default RecentlyPlayed; 