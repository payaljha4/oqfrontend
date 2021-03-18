import React, { useState } from "react";
import "../App.css";


export function CircleButton(props) {
  const [hcolor, sethcolor] = useState(props.b_color);
  const [color, setcolor] = useState(props.color);
  const onhover = () => {
    sethcolor(props.h_color);
    setcolor(props.h_c);
  };
  const nohover = () => {
    sethcolor(props.b_color);
    setcolor(props.color);
  };
  const style_c = {
    color: color ,
    fontSize: "20px",
    fontWeight: "500",
    margin: "8px",
    padding: "15px 40px 15px 40px",
    backgroundColor: hcolor,
    boxShadow: "0 3px 8px black",
    cursor: "pointer",
    borderRadius: "40px",
    outline: "none",
    border: "none",
    textAlign: "center",
  };
  return (
    <button
      className="circle_btn"
      style={style_c}
      onMouseOver={onhover}
      onMouseLeave={nohover}
    >
      <p>{props.text}</p>
    </button>
  );
}
export function FlatButton(props) {
  const [hcolor, sethcolor] = useState(props.b_color);
  const [color, setcolor] = useState(props.color);
  const onhover = () => {
    sethcolor(props.h_color);
    setcolor(props.h_c);
  };
  const nohover = () => {
    sethcolor(props.b_color);
    setcolor(props.color);
  };
  const style = {
    color: color,
    fontSize: "18px",
    fontWeight: "400",
    margin: "0 20px",
    padding: "5px 20px 5px 20px",
    backgroundColor: hcolor,
    boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.519)",
    cursor: "pointer",
    borderRadius: "5px",
    textAlign: "center",
  };
  return (
    <div
      className="flat_btn"
      style={style}
      onMouseOver={onhover}
      onMouseLeave={nohover}
    >
      <p>{props.text}</p>
    </div>
  );
}
export function FlatButtonLight(props) {
  const [hcolor, sethcolor] = useState(props.b_color);
  const [color, setcolor] = useState(props.color);
  const onhover = () => {
    sethcolor(props.h_color);
    setcolor(props.h_c);
  };
  const nohover = () => {
    sethcolor(props.b_color);
    setcolor(props.color);
  };
  const style = {
    color: color,
    fontSize: "20px",
    fontWeight: "400",
    margin: "0 40px",
    // padding: "5px 60px 5px 60px",
    width: "150px",
    backgroundColor: hcolor,
    boxShadow: "1px 2px 5px rgba(255, 255, 255, 0.219)",
    cursor: "pointer",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div
      className="flat_btn"
      style={style}
      onMouseOver={onhover}
      onMouseLeave={nohover}
    >
      <p>{props.text}</p>
    </div>
  );
}
