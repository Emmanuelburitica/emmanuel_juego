const canvaa =document.getElementById("gameCanvas")
const ctx =canvaa.getcontext("2d")
const scorespan =document.getElementById("scoredisplay")

cnst CW =400,CH =500;
canvas.width =  CW;canvaa.height = CH

//estado de juego//
let player = {x: 180,y: 450, width:30, height:18,}
let enemies = []
let bullets = []
let score = 0 
let gameover =false
let win = false
let lefpressed =false
let rightpressed=false
let move = 0
