class Board{
  constructor(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = './imagenes/spaciobackground.png'
    this.img.onload = () =>{
      this.draw()
    } 
  }
  move(){
    this.x--
    if(this.x < -canvas.width) this.x = 0
  }
  draw(){
    this.x--
    if (this.x < -canvas.width) this.x = 0
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
     ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
  }
}
class SpaceShip{
  constructor(){
    this.x = 50
    this.y = 250
    this.width = 120
    this.height = 70
    this.spaceShip01 = new Image()
    this.spaceShip02 = new Image()
    this.spaceShip03 = new Image()
    this.img = new Image()
    this.img.src = './imagenes/spaceship01.png'
    this.spaceShip01.src = './imagenes/spaceship01.png'
    this.spaceShip02.src = './imagenes/spaceship02.png'
    this.spaceShip03.src = './imagenes/spaceship03.png'
  }
  draw(){
    if(frames%3 === 0){
      this.img = animateHelper === 0 ? this.spaceShip01 :
      this.img = animateHelper === 1 ? this.spaceShip02 : 
      this.img = animateHelper === 2 ? this.spaceShip03 : this.spaceShip01
      if(animateHelper < 4){
        animateHelper++
      }else{
        animateHelper = 0
      }
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveRight() {
      if (this.x > canvas.width - this.width -20) return
      this.x+= 10
    }
    moveLeft(){
      if (this.x < 20) return
      this.x-= 10
    }
    moveUp(){
      if(this.y < 20) return
      this.y-=10
    }
    moveDown(){
      if(this.y > canvas.height - this.height -20) return
      this.y+=10
    }
}
class Blast01{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 12
    this.height = 12
    this.img = new Image()
    this.img.src = '/imagenes/blast.png'
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)}
}