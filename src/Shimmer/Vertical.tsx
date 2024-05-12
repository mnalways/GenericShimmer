import React from "react";
import { ShimmerProps } from "./Shimmer";
import { getChildComponents } from "./Shimmer.util";

const Vertical: React.FC<ShimmerProps> = ({ children }) => {
  const childComponents = getChildComponents(children);

  return <div>{childComponents.map((component) => component)}</div>;
};
export default Vertical;
