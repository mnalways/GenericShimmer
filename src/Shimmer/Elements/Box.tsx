import BaseStructure from "./BaseStructure";
import { QuardilateralProps } from "./Elements.const";

const Box = ({
  className,
  count = 1,
  height = "100px",
  width = "100px",
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

export default Box;
