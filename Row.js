import { StyleSheet, View } from "react-native";

import Cell from "./Cell";

export default function Row({ cellValues, dispatch, rowIndex }) {
  return (
    <View style={styles.container}>
      {cellValues.map((cellValue, columnIndex) => (
        <Cell
          cellValue={cellValue}
          columnIndex={columnIndex}
          dispatch={dispatch}
          key={columnIndex}
          rowIndex={rowIndex}
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
