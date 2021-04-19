import React, { useEffect, useRef } from "react";

export default function Avatar({ size, txt }) {
  const canvas = useRef(null);
  const canvas1 = useRef(null);
  const canvas2 = useRef(null);

// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test



  useEffect(() => {
    if (size === 1) {
      Mid();
    } else if (size === 2) {
      Big();
    }
  }, []);
  const Mid = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#1d2333";
    ctx.lineWidth = 9;
    ctx.lineJoin = "round";
    ctx.moveTo(23, 5);
    ctx.lineTo(41, 15);
    ctx.lineTo(41, 38);
    ctx.lineTo(23, 46);
    ctx.lineTo(5, 38);
    ctx.lineTo(5, 15);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fill();
    // canvas 2-border
    const gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, "#d9ff65");
    gradient.addColorStop(1, "#40d04f");
    const ctx1 = canvas.current.getContext("2d");
    ctx1.beginPath();
    ctx1.strokeStyle = gradient;
    ctx1.lineWidth = 4;
    ctx1.lineJoin = "round";
    ctx1.moveTo(23, 5);
    ctx1.lineTo(41, 15);
    ctx1.lineTo(41, 38);
    ctx1.lineTo(23, 46);
    ctx1.lineTo(5, 38);
    ctx1.lineTo(5, 15);
    ctx1.closePath();
    ctx1.stroke();
  };
  //BIG
  const Big = () => {
    const ctx = canvas.current.getContext("2d");
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
    const ctx1 = canvas.current.getContext("2d");
    ctx1.beginPath();
    ctx1.strokeStyle = gradient;
    ctx1.lineWidth = 10;
    ctx1.lineJoin = "round";
    ctx1.moveTo(100, 47);
    ctx1.lineTo(139, 65);
    ctx1.lineTo(139, 110);
    ctx1.lineTo(100, 127.5);
    ctx1.lineTo(60, 110);
    ctx1.lineTo(60, 65);
    ctx1.closePath();
    ctx1.stroke();
    //min border
    const ctx2 = canvas2.current.getContext("2d");
    ctx2.beginPath();
    ctx2.strokeStyle = "#1d2333";
    ctx2.lineWidth = 5;
    ctx2.lineJoin = "round";
    ctx2.moveTo(100, 50);
    ctx2.lineTo(137, 67);
    ctx2.lineTo(137, 107);
    ctx2.lineTo(100, 125.5);
    ctx2.lineTo(62, 107);
    ctx2.lineTo(62, 67);
    ctx2.closePath();
    ctx2.stroke();
  };
  const Handletenplate = (size) => {
    if (size === 1) {
      return (
        <div className="avatarcontainer1">
          <div className="mainav1">
            <div className="imadiv1"></div>
            <div className="avatarbadge1">
              {txt ? <div>{txt}</div> : <div>25</div>}
            </div>
            <canvas
              ref={canvas}
              className="can"
              width="50"
              height="50"
            ></canvas>
          </div>
        </div>
      );
    } else {
      return (
        <div className="avatarcontainer">
          <div className="mainav">
            <div className="imadiv"></div>
            <div className="avatarbadge">
            {txt ? <div>{txt}</div> : <div>25</div>}
            </div>
            <canvas
              ref={canvas}
              className="can"
              width="200"
              height="200"
            ></canvas>
            <canvas className="can1" width="200" height="200"></canvas>
            <canvas
              ref={canvas2}
              className="can2"
              width="200"
              height="200"
            ></canvas>
          </div>
        </div>
      );
    }
  };
  return Handletenplate(size);
}
