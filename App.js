import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useReducer } from "react";

import Board from "./Board";
import copy2dArray from "./copy2dArray";
import make2dArray from "./make2dArray";

function makeInitialBoardState() {
  return {
    board: make2dArray(3, 3, null),
    moveCount: 0,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "move": {
      const newBoard = copy2dArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] =
        state.moveCount % 2 === 0 ? "X" : "O";

      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
      };
    }
    case "reset": {
      return makeInitialBoardState();
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
      {state.moveCount === 9 ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({ type: "reset" })}
        >
          <Text style={styles.buttonText}>Reset game</Text>
        </TouchableOpacity>
      ) : null}
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
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 5,
    color: "white",
    fontSize: 40,
    fontWeight: 700,
    height: 50,
    justifyContent: "center",
    marginVertical: 20,
    padding: 10,
    width: "60%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
