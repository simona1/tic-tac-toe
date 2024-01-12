import { StyleSheet, Text, View } from "react-native";

import getPlayerToMove from "./getPlayerToMove";

export default function GameStatus({ gameOver, moveCount, winner }) {
  const gameStatus = (() => {
    if (!gameOver) {
      return `${getPlayerToMove(moveCount)}'s turn ro move.`;
    }

    if (winner == null) {
      return "Game is a draw";
    }

    return `${winner} won!`;
  })();

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{gameStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    color: "blue",
    fontSize: 24,
  },
});
