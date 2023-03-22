import React from "react";
import "./SquareOption.css"

const SquareOption = (song) => {
    return (
        <div className="option-wrapper">
            <div className="img-placeholder">Image</div>
            <h1 className="option-title">{song.name}</h1>
            <p className="option-details">Artist 1, Artist 2</p>
        </div>
    )
}

export default SquareOption;