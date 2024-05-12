import { CircleProps } from "./Elements.const";
import BaseStructure from "./BaseStructure";

const Circle = ({ className, count = 1, diameter = "100px" }: CircleProps) => {
  const getElements = () => {
    const elements = [];
    for (let index = 0; index < count; index++) {
      elements.push(
        <BaseStructure
          key={index}
          className={className}
          height={diameter}
          width={diameter}
          isCircle
        />
      );
    }
    return elements;
  };
  return <>{getElements()}</>;
};

export default Circle;
