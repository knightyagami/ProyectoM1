const canvas = document.querySelector('#scenaprincipal')
const ctx = canvas.getContext('2d')
let interval
let frames = 0
let animateHelper = 0
let blasting01 = new Blast01()
let blastings01 = []
const board = new Board()
const spaceship = new SpaceShip()