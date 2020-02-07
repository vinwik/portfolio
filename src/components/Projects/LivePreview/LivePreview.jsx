import React from "react";
import { ReactComponent as Eye } from "./eye.svg";
import "./LivePreview.css";

const LivePreview = () => {
  return (
    <div className="live-preview">
      See Live <Eye className="svg" />
    </div>
  );
};

export default LivePreview;
