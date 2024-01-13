import { StyleSheet, View } from "react-native";

import Cell from "./Cell";

export default function Row({ cellValues, dispatch, gameOver, rowIndex }) {
  return (
    <View style={styles.container}>
      {cellValues.map((cellValue, columnIndex) => (
        <Cell
          cellValue={cellValue}
          key={columnIndex}
          onPress={() =>
            gameOver ? null : dispatch({ type: "move", rowIndex, columnIndex })
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
});
