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
      if (this.x > canvas.width - this.width -500) return
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
    collision(item){
      return (this.x < item.x+10 + item.width) && (this.x + this.width > item.x+10) && (this.y < item.y+10 + item.height) && (this.y + this.height > item.y+10)
    }
}
class Blast01{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 20
    this.height = 20
    this.img = new Image()
    this.img.src = './imagenes/blast.png'
  }
  collision(item){
    return (this.x < item.x + item.width) && (this.x + this.width > item.x) && (this.y < item.y + item.height) && (this.y + this.height > item.y)
  }
  draw(){
    this.x+=20
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}
class Meteor{
  constructor(y){
    this.x = canvas.width
    this.y = y
    this.width = 50 
    this.height = 50
    this.img = new Image()
    this.img.src = 'imagenes/meteor.png'
    this.img.onload = () =>{
      this.draw()
    } 
  }
  
  move(){
    this.x-=5
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    this.move()
  }
}
class HealthBar{
  constructor(){
    this.x = 470
    this.y = 0
    this.width = 150
    this.height = 50
    this.image = new Image()
    this.image.src = './imagenes/HealthFull.png'
  }
  draw(){
    if(impacts === 0) this.image.src = './imagenes/HealthFull.png'
    if(impacts === 1) this.image.src = './imagenes/HealthQuarter.png'
    if(impacts === 2) this.image.src = './imagenes/HealthMid.png'
    if(impacts === 3) this.image.src = './imagenes/HealthEpty.png'
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}