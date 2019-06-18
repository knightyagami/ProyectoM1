window.onload = function() {
    startGame();
}
function update(){
  frames ++
  ctx.clearRect(0, 0, canvas.Width, canvas.height)
  board.draw()
  spaceship.draw()
  drawBlasting01()
}
function startGame() {
  if(interval) return
  interval = setInterval(update, 1000/60)
}
function drawBlasting01(){
  blastings01.forEach(blasting01 => {
    blasting01.draw()
  })
}