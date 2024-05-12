export interface CommonElementProps {
  className?: string;
  count?: number;
}

export interface CircleProps extends CommonElementProps {
  diameter?: string;
}

export interface QuardilateralProps extends CommonElementProps {
  height?: string;
  width?: string;
}
