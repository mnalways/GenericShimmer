import Styles from "./BaseStructure.module.scss";

interface props {
  height: string;
  width: string;
  className?: string;
  isCircle?: boolean;
}
const BaseStructure = ({
  height,
  width,
  className,
  isCircle = false,
}: props) => {
  const circleProps = isCircle ? { borderRadius: "50%" } : {};
  return (
    <div
      className={`${Styles.shimmer} ${className}`}
      style={{ height, width, ...circleProps }}
    ></div>
  );
};

export default BaseStructure;
