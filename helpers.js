function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
function generateMeteors(){
  let y = randomNum(30, 450)
  if(frames %100 === 0) {

    let meteor = new Meteor(y)
meteors.push(meteor)
  }
}
function drawMeteors() {
  meteors.forEach((meteor, index) => {
      if(meteor.x < -canvas.width){
      return meteors.splice(index, 1);  
      } 
      meteor.draw();
      if(spaceship.collision(meteor)){
          meteors.splice(index, 1);
          score-=50
          impacts++
      }
  })
}

