import Svg, { Circle } from "react-native-svg";

export default function CellO() {
  return (
    <Svg height={80} width={80} viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="35"
        stroke="red"
        strokeWidth="8"
        fill="transparent"
      />
    </Svg>
  );
}
