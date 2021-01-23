import React, { useRef } from 'react';


export default function Avatar() {
    const canvas = document.querySelector("#can")
    // const context = canvas.getContext("2d")
    return (
        <div className="main" >
            <canvas id="can" ></canvas>
        </div>
    )
}
