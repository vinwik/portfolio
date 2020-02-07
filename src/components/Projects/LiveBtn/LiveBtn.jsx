import React from "react";
import { ReactComponent as Eye } from "./eye.svg";
import "./LiveBtn.css";

const LiveBtn = () => {
  return (
    <div className="live-btn btn">
      See Live <Eye className="svg" />
    </div>
  );
};

export default LiveBtn;
