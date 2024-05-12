import { ChildComponent } from "./Shimmer";

export const getChildComponents = (
  children: ChildComponent | ChildComponent[]
) => {
  return Array.isArray(children) ? children : [children];
};
