<template>
    <h1>Tic Tac Toe</h1>

    <p> {{ status }}</p>
    <div id="game-board">
        <div
            v-for="(cell, index) in board"
            :key="index"
            class="cell"
            @click="handleCellClick(index)"
        >
            {{ cell }}
        </div>
    </div>
    <button @click="restartGame">Restart Game</button>
    <div style="padding-top: 10px">
        <router-link to="/">← Back to Home</router-link>
    </div>
</template>

<script setup>
// @TODO: This game could use some modernization and fine tuning.
// @TODO: particularly around the winners symbol appearing after the winner alert.
import { ref } from 'vue'

const board = ref(["", "", "", "", "", "", "", "", ""])
const currentPlayer = ref("X")
const gameActive = ref(true)

function handleCellClick(index) {
  if (board.value[index] !== "" || !gameActive.value) {
    alert("Invalid move! The attempted cell is occupied")
    return
  }

  board.value[index] = currentPlayer.value

  if (gameActive.value) {
    checkWinner(board.value)
  }

  currentPlayer.value =
    currentPlayer.value === "X" ? "O" : "X"
}

function checkWinner(board) {
    const verticalWin = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const horizontalWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const diagonalWin = [[0, 4, 8], [2, 4, 6]];
    const winConditions = [...verticalWin, ...horizontalWin, ...diagonalWin];
    // *use of loop for raw values (in used for indexes)
    for (const [a, b, c] of winConditions) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            console.log("winner!");
            gameActive.value = false;
            alert(`Winner awarded to: ${currentPlayer.value}! Please reset the game to play again.`, currentPlayer);
        }
    }

    if (board.every(cell => cell !== "") && gameActive.value !== false) {
        alert("The game has ended in a draw. Please reset the game to play again.");
        gameActive.value = false;
    }
}

function restartGame() {
    currentPlayer.value = "X";
    gameActive.value = true;
    clearBoardCells();
}

function clearBoardCells() {
    board.value = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
    })
    alert("The game has been reset!")
}
</script>