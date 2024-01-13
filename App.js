import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useReducer } from "react";

import Board from "./Board";
import computeGameOutcome from "./computeGameOutcome";
import copy2dArray from "./copy2dArray";
import GameStatus from "./GameStatus";
import getPlayerToMove from "./getPlayerToMove";
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
      if (state.gameOver) {
        return state;
      }
      const newBoard = copy2dArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] = getPlayerToMove(
        state.moveCount
      );

      const { gameOver, winner } = computeGameOutcome(newBoard);

      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
        gameOver,
        winner,
      };
    }
    case "reset": {
      return {
        board: make2dArray(3, 3, null),
        moveCount: 0,
        gameOver: false,
        winner: null,
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
      <Board
        board={state.board}
        gameOver={state.gameOver}
        dispatch={dispatch}
      />
      <GameStatus
        winner={state.winner}
        gameOver={state.gameOver}
        moveCount={state.moveCount}
      />
      {state.gameOver ? (
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
