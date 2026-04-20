<template>
    <h1>Brick Breaker</h1>

    <div class="game-window">
        <canvas ref="gameCanvas" width="400" height="400"></canvas>
    </div>

    <router-link to="/">← Back to Home</router-link>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// @TODO: This needs reorganizing stuff is getting messy after the vue upgrade
// @TODO: end game condition still needed
// ===== CANVAS =====
const gameCanvas = ref(null)
let ctx = null
let animationId = null

// === initialize objects ===

const keys = { left: false, right: false }

const BRICK_WIDTH = 55
const BRICK_HEIGHT = 30
const BRICK_PADDING = 10

const COLUMNS = 6
const ROWS = 2

const bricks = []
let totalWidth = 0

const paddle = {
  width: 80,
  height: 10,
  x: 0,
  y: 0
}

const ball = {
  x: paddle.x + paddle.width / 2,        
  y: paddle.y - 10,   
  radius: 10,
  dx: 2,                // horizontal speed
  dy: -2,              // vertical speed
  paddleCollision: false
};

onMounted(() => {
  const canvas = gameCanvas.value
  ctx = canvas.getContext("2d")

  // init paddle AFTER canvas exists
  paddle.x = canvas.width / 2 - paddle.width / 2
  paddle.y = canvas.height - 30

  // init ball
  ball.x = paddle.x + paddle.width / 2
  ball.y = paddle.y - 10

  totalWidth = (COLUMNS * BRICK_WIDTH) + (BRICK_PADDING * (COLUMNS + 1))

  createBrickLayout()

  window.addEventListener("keydown", handleKeyDown)
  window.addEventListener("keyup", handleKeyUp)

  gameLoop()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener("keydown", handleKeyDown)
  window.removeEventListener("keyup", handleKeyUp)
})

// === Input Handlers ===

function handleKeyDown(e) {
  if (e.key === "ArrowLeft" || e.key === "a") keys.left = true
  if (e.key === "ArrowRight" || e.key === "d") keys.right = true
}

function handleKeyUp(e) {
  if (e.key === "ArrowLeft" || e.key === "a") keys.left = false
  if (e.key === "ArrowRight" || e.key === "d") keys.right = false
}

function createBrick(row, column) {
  const canvas = gameCanvas.value
  const startingX = (canvas.width - totalWidth) / 2
  const startingY = 50

  return {
    width: BRICK_WIDTH,
    height: BRICK_HEIGHT,
    x: startingX + BRICK_PADDING + column * (BRICK_WIDTH + BRICK_PADDING),
    y: startingY + row * (BRICK_HEIGHT + BRICK_PADDING),
    hit: false
  }
}

function createBrickLayout() {
  for (let row = 0; row < ROWS; row++) {
    const currentRow = []
    for (let column = 0; column < COLUMNS; column++) {
      currentRow.push(createBrick(row, column))
    }
    bricks.push(currentRow)
  }
}


const FULL_CIRCLE = 2 * Math.PI

function drawRectangle(obj, color) {
  ctx.fillStyle = color
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height)
}

function drawBall() {
  ctx.fillStyle = "teal"
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.radius, 0, FULL_CIRCLE)
  ctx.fill()
}

function drawBricks() {
  bricks.forEach(row => {
    row.forEach(brick => {
      if (!brick.hit) {
        drawRectangle(brick, "#913333")
      }
    })
  })
}

function draw() {
  const canvas = gameCanvas.value
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  drawRectangle(paddle, "black")
  drawBall()
  drawBricks()
}


function paddleMovement() {
  const speed = 2.5

  if (keys.left) paddle.x -= speed
  if (keys.right) paddle.x += speed

  const canvas = gameCanvas.value

  if (paddle.x < 0) paddle.x = 0
  if (paddle.x + paddle.width > canvas.width)
    paddle.x = canvas.width - paddle.width
}

function moveBall() {
  const canvas = gameCanvas.value

  ball.x += ball.dx
  ball.y += ball.dy

  if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
    ball.dx *= -1
  }

  if (ball.y - ball.radius < 0) {
    ball.dy *= -1
  }

  if (ball.y - ball.radius > canvas.height) {
    resetBall()
  }

  if (collision(ball, paddle)) {
    ball.dy *= -1
  }

  bricks.forEach(row => {
    row.forEach(brick => {
      if (!brick.hit && collision(ball, brick)) {
        brick.hit = true
        ball.dy *= -1
      }
    })
  })
}

function update() {
  paddleMovement()
  moveBall()
}

function gameLoop() {
  update()
  draw()
  animationId = requestAnimationFrame(gameLoop)
}

function collision(circle, rect) {
  const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width))
  const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height))

  const dx = circle.x - closestX
  const dy = circle.y - closestY

  return Math.sqrt(dx * dx + dy * dy) < circle.radius
}

function resetBall() {
  const canvas = gameCanvas.value

  ball.x = paddle.x + paddle.width / 2
  ball.y = paddle.y - 10
  ball.dx = 2
  ball.dy = -2
}

</script>