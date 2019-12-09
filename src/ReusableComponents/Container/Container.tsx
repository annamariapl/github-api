import React from "react";
import "./container.less";

export const ContainerWithHover: React.FC = props => {
    return <div {...props} className="elementContainer"></div>;
  };