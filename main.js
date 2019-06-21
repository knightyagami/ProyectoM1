window.onload = function() {
    
function update(){
  frames ++
  ctx.clearRect(0, 0, canvas.Width, canvas.height)
  board.draw()
  spaceship.draw()
  drawBlasting01()
  checkKeys()
  generateMeteors()
  drawMeteors()
  ctx.fillStyle = 'white'
  ctx.font="20px 'Press Start 2P'"
  ctx.fillText('SCORE: '+ score, 40, 45);
  healtBar.draw()
  game_Over()
  gameWinner()
}
function startGame() {
  startedGame = true
  interval = setInterval(update, 1000/60)
  audio.play()
}
function drawBlasting01(){
  blastings01.forEach((blasting01, i) => {
    if(blasting01.x > canvas.width){
      return blastings01.splice(i, 1);
      } 
    blasting01.draw()
    meteors.forEach((meteor, index) => {
      if(blasting01.collision(meteor)) {
          blastings01.splice(i, 1)
          meteors.splice(index, 1)
          score+=50
      } 
})
  })
  
}
function checkKeys(){
  if(keys[39] || keys[68]){
    spaceship.moveRight()
  }
  if(keys[37] || keys[65]){
    spaceship.moveLeft()
  }
  if(keys[38] || keys[87]){
    spaceship.moveUp()
  }
  if(keys[40] || keys[83]){
    spaceship.moveDown()
  }
  if(keys[70] || keys[32]){
    if(frames%30==0){
      blastings01.push(new Blast01(spaceship.x + 120, spaceship.y + 55))
      shooting.play();
    }
  }
}
function game_Over(num){
  if(impacts === 4){
      clearInterval(interval)
      ctx.fillStyle = 'mediumorchid';
      ctx.fillRect(270, 147, 500, 206);
      ctx.fillStyle = 'black';
      ctx.fillRect(280, 150, 480, 200);
      ctx.fillStyle = 'white';
      ctx.font = "25px 'Press Start 2P'";
      ctx.fillText ("GAME OVER", 390, 210);
      ctx.font = "20px 'Press Start 2P'";
      ctx.fillText ("YOUR SCORE: " + score, 350, 250);
      ctx.font = "20px 'Press Start 2P'";
      ctx.fillText ("Panfilo perdio su carga", 290, 300);
      audio.pause();
      interval = null;
    }
  }

document.getElementById("startButton").onclick = function() {
  if(!interval){
    startGame();
}
}

document.getElementById("restartButton").onclick = function() {
  location.reload(true);
localStorage.clear()
startGame()
}
}
function gameWinner(num){
  if(score === 200){
      clearInterval(interval)
      ctx.fillStyle = 'mediumorchid';
      ctx.fillRect(297, 147, 406, 206);
      ctx.fillStyle = 'black';
      ctx.fillRect(300, 150, 400, 200);
      ctx.fillStyle = 'white';
      ctx.font = "25px 'Press Start 2P'";
      ctx.fillText ("WINNER", 420, 270);
      ctx.font = "25px 'Press Start 2P'";
      ctx.fillText ("Las entrego", 370, 300);
      audio.pause();
      interval = null;
    }
  }