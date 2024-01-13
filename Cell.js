import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CellO from "./CellO";
import CellX from "./CellX";

export default function Cell({ cellValue, onPress }) {
  const Container = onPress ? TouchableOpacity : View;

  const drawCellContent = (() => {
    switch (cellValue) {
      case "X":
        return <CellX />;
      case "O":
        return <CellO />;
      default:
        return null;
    }
  })();

  return (
    <View style={styles.container}>
      <Container style={styles.container} onPress={onPress}>
        {drawCellContent}
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: "hsla(200, 100%, 95%, 1)",
    borderRadius: 8,
    justifyContent: "center",
    width: 80,
  },
  text: {
    color: "navy",
    fontSize: 50,
  },
});
