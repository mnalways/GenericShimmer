import React from "react";
import { ShimmerProps } from "./Shimmer";
import { getChildComponents } from "./Shimmer.util";
import Styles from "./Horizontal.module.scss";

const Horizontal: React.FC<ShimmerProps> = ({ children }) => {
  const childComponents = getChildComponents(children);

  return (
    <div className={Styles.horizontal}>
      {childComponents.map((component) => component)}
    </div>
  );
};
export default Horizontal;
