import Svg, { Line } from "react-native-svg";

export default function CellX() {
  return (
    <Svg height={80} width={80} viewBox="0 0 100 100">
      <Line
        x1="20"
        y1="20"
        x2="80"
        y2="80"
        stroke="navy"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <Line
        x1="80"
        y1="20"
        x2="20"
        y2="80"
        stroke="navy"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </Svg>
  );
}
