import React from "react";

import Fade from "react-reveal/Fade";

const Title = ({ title }) => {
  return (
    <h1 className="section-title">
      <Fade bottom>{title}</Fade>
    </h1>
  );
};

export default Title;
