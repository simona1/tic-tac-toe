import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Cell({ cellValue, onPress }) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <Container style={styles.container} onPress={onPress}>
        {cellValue != null && <Text style={styles.text}>{cellValue}</Text>}
      </Container>
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
