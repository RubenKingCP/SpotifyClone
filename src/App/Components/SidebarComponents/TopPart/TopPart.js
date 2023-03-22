import React from "react";
import "./TopPart.css"

const TopPart = () => {
    return (
        <>
            <div className="top-wrapper">
                <div className="logo-wrapper">
                    <p>Ruby Melodies</p>
                </div>
                <nav className="nav-wrapper">
                    <ul className="top-list">
                        <li className="top-list-item">HOME</li>
                        <li className="top-list-item">MY LIBRARY</li>
                        <li className="top-list-item">RANDOM SONG</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default TopPart;