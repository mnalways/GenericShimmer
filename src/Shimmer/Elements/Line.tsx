import BaseStructure from "./BaseStructure";
import { QuardilateralProps } from "./Elements.const";

const Line = ({
  className,
  count = 1,
  height = "20px",
  width = "90%",
}: QuardilateralProps) => {
  const getElements = () => {
    const elements = [];
    for (let index = 0; index < count; index++) {
      elements.push(
        <BaseStructure
          key={index}
          className={className}
          height={height}
          width={width}
        />
      );
    }
    return elements;
  };
  return <>{getElements()}</>;
};

export default Line;
