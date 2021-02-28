import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="center">
      <div className="ring"></div>
      <span>loading...</span>
    </div>
  );
}
