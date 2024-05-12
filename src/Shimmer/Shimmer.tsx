import React, { ReactElement } from "react";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import Circle from "./Elements/Circle";
import Box from "./Elements/Box";
import Line from "./Elements/Line";
import { getChildComponents } from "./Shimmer.util";

export type ChildComponent =
  | ReactElement<typeof Horizontal>
  | ReactElement<typeof Vertical>
  | ReactElement<typeof Circle>
  | ReactElement<typeof Box>
  | ReactElement<typeof Line>;

export interface ShimmerProps {
  children: ChildComponent | ChildComponent[];
}

const Shimmer: React.FC<ShimmerProps> = ({ children }) => {
  const childComponents = getChildComponents(children);

  return <div>{childComponents.map((component) => component)}</div>;
};

export default Shimmer;
