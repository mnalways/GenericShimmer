import Shimmer from "./Shimmer/Shimmer";
import Circle from "./Shimmer/Elements/Circle";
import Box from "./Shimmer/Elements/Box";
import Horizontal from "./Shimmer/Horizontal";
import Line from "./Shimmer/Elements/Line";
import Style from "./ShimmerConsumer.module.scss";

const ShimmerConsumer = () => {
  return (
    <div className={Style.ShimmerContainer}>
      <Shimmer>
        <Circle />
        <Horizontal>
          <Box
            count={2}
            height="200px"
            width="200px"
            className={Style.myCustomStyle}
          />
        </Horizontal>
        <Line count={5} />
      </Shimmer>
    </div>
  );
};

export default ShimmerConsumer;
