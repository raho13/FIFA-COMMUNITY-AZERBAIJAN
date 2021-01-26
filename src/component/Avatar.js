import React, { useRef, useEffect } from 'react';
import avatar from "../img/cover/01.jpg";

export default function Avatar() {
    useEffect(() => {
        const canvas = document.querySelector("#can")
        const ctx = canvas.getContext("2d")
        ctx.beginPath();
        ctx.strokeStyle = '#161b28';
        ctx.lineWidth = 20;
        ctx.lineJoin = 'round';
        ctx.moveTo(100, 40);
        ctx.lineTo(145, 55);
        ctx.lineTo(145, 110);
        ctx.lineTo(100, 125);
        ctx.lineTo(55, 110);
        ctx.lineTo(55, 55);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = '#161b28';
        ctx.fill();
        // canvas 2
        const ava = document.getElementById('kkl')
        const canvas1 = document.querySelector("#can")
        const ctx1 = canvas1.getContext("2d")
        ctx1.beginPath();
        ctx1.strokeStyle = '#40d04f';
        ctx1.lineWidth = 8;
        ctx1.lineJoin = 'round';
        ctx1.moveTo(100, 45);
        ctx1.lineTo(140, 60);
        ctx1.lineTo(140, 105);
        ctx1.lineTo(100, 120);
        ctx1.lineTo(60, 105);
        ctx1.lineTo(60, 60);
        ctx1.stroke();
        ctx1.beginPath();
        ctx1.lineJoin = 'round';
        ctx1.strokeStyle = '#2f3749';
        ctx1.moveTo(60, 75);
        ctx1.lineTo(60, 60);
        ctx1.lineTo(100, 45);
        ctx1.lineTo(105, 47);
        ctx1.stroke();
        ctx1.drawImage(ava, 20, 50, 50, 50);


    })

    return (
        <div className="mainav" >
            <img src={avatar} id="kkl" style={{ display: 'none' }} />
            <canvas id="can" width="200" height="200"></canvas>
            <canvas id='can1' width="200" height="200"></canvas>
        </div>
    )
}
