import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useReducer } from "react";

import Board from "./Board";
import copy2dArray from "./copy2dArray";
import make2dArray from "./make2dArray";

function makeInitialBoardState() {
  return {
    board: make2dArray(3, 3, null),
    playerToMove: "X",
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "move": {
      const newBoard = copy2dArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] = state.playerToMove;

      return {
        ...state,
        board: newBoard,
        playerToMove: state.playerToMove === "X" ? "O" : "X",
      };
    }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    undefined,
    makeInitialBoardState
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tic-Tac-Toe</Text>
      <Board board={state.board} dispatch={dispatch} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    gap: 8,
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
    margin: 20,
  },
});
