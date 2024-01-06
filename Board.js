import { StyleSheet, View } from "react-native";

import Row from "./Row";

export default function Board({ board, dispatch }) {
  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => (
        <Row
          cellValues={row}
          dispatch={dispatch}
          key={rowIndex}
          rowIndex={rowIndex}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
});
