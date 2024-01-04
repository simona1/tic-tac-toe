import { StyleSheet, Text, View } from "react-native";

export default function Cell({ cellValue }) {
  return (
    <View style={styles.container}>
      {cellValue != null && <Text style={styles.text}>{cellValue}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "navy",
    fontSize: 50,
  },
});
