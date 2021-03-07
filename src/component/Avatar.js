import React, { useRef, useEffect } from "react";

export default function Avatar() {
  useEffect(() => {
    const canvas = document.querySelector("#can");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#1d2333";
    ctx.lineWidth = 12;
    ctx.lineJoin = "round";
    ctx.moveTo(100, 40);
    ctx.lineTo(145, 60);
    ctx.lineTo(145, 115);
    ctx.lineTo(100, 135);
    ctx.lineTo(55, 115);
    ctx.lineTo(55, 60);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fill();
    // canvas 2-border
    const gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, "#d9ff65");
    gradient.addColorStop(1, "#40d04f");
    const canvas1 = document.querySelector("#can");
    const ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.strokeStyle = gradient;
    ctx1.lineWidth = 5;
    ctx1.lineJoin = "round";
    ctx1.moveTo(100, 47);
    ctx1.lineTo(139, 65);
    ctx1.lineTo(139, 110);
    ctx1.lineTo(100, 127.5);
    ctx1.lineTo(61, 110);
    ctx1.lineTo(61, 65);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.lineJoin = "round";
    ctx1.strokeStyle = "#2f3749";
    ctx1.moveTo(60, 75);
    ctx1.lineTo(60, 65);
    ctx1.lineTo(100, 47);
    ctx1.lineTo(106, 50);
    ctx1.stroke();
  });

  return (
    <div id='avatarcontainer'>
      <div className="mainav">
        <div id="imadiv"></div>
        <canvas id="can" width="200" height="200"></canvas>
        <canvas id="can1" width="200" height="200"></canvas>
      </div>
    </div>
  );
}
