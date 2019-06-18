addEventListener('keydown',event => {
  if(event.keyCode === 39){
    spaceship.moveRight()
  }else if(event.keyCode === 37){
    spaceship.moveLeft()
  }else if(event.keyCode === 38){
    spaceship.moveUp()
  }else if(event.keyCode === 40){
    spaceship.moveDown()
  }else if(event.keyCode === 32){
      blastings01.push(new Blast01(spaceship.x + 120, spaceship.y + 60))
    }
})