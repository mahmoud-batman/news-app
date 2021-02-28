import React from "react";
import "./Button.css";

function Button({ onClick }) {
  return (
    <button className="button button1" onClick={onClick}>
      {" "}
      Show More
    </button>

    // <button class="favorite styled" type="button" onClick={onClick}>
    // </button>
  );
}
export default Button;
