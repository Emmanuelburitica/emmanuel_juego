const canvas =document.getElementById("gameCanvas")
const ctx =canvas.getcontext("2d")
const scorespan =document.getElementById("scoredisplay")

const CW =400,CH =500;
canvas.width =  CW;canvaa.height = CW
canvas.height =CH

//estado de juego//
let player = {x: 180,y: 450, width:30, height:18,}
let enemies = []
let bullets = []
let score = 0 
let gameover = false
let win = false

let lefpressed = false
let rightpressed= false
let moveX = 0

const ENEMY_ROWS =4;
const ENEMY_COLS =6;
const ENEMY_SPACING =12;
const ENEMY_W =26;
const ENEMY_H=20;
let enemyDirection= 1;
let enemySpeed = 0.8;
const ENEMY_MOVE_FRAMES =12;
let shootCooldown = 0;
const SHOOT_DELAY =14;

//inicialización de enemigos//
//corchetes = listas//


function initEnemies(){
    enemies = []
    const startX = 30
    const startY = 40
    for (let row =  0; row < ENEMY_ROWS; index++) {
        for (let col  = 0; col  < ENEMY_COLS; col ++) {
            enemies.push({
                x: startX + col * (ENEMY_W + ENEMY_SPACING),
                Y: startY + row * (ENEMY_H + ENEMY_SPACING),
                width: ENEMY_W,
                height: ENEMY_H,
                ALIVE: true,
                color : row === 0 ? "#39167D" : (row  === 1 ? "#DE1010" : "#10A3DE")

            })
            
        }
        
    }
    enemyDirection = 1
    enemySpeed = 0.8
    eneMoveCounter

    //reiciar//
    function resetGame() {
        player.x = 180
        bullets = []
        score = 0
        gameover = false
        winflag = false
        lefpressed = false
        rightpressed = false
        moveX =0
        shootCooldown = 0
        initEnemies()
        updateScore()

    }

//actualizar puntos//
function updateScore(){
    scorespan.textContent =score
}

//dispaar
function shootBullet(){
    if (gameover || winflag) return
    bullets.push({
        x:  player.x + player.w/2-3,
        y: player.y -8,
        w: 6,
        h: 14,
        speed: 5
    })
}
//colisiones//

}

//eventos//
window.addEventListener("keydown", handleKeyDown)
window.addEventListener("keyup", handleKeyup)
canvas.addEventListener("touchstart", handleTouchStart, { pasive: false})
canvas.addEventListener("touchmove", handleTouchStart, { pasive: false})
canvas.addEventListener("touchend", handleTouchStart, { pasive: false})
canvas.addEventListener("touchmenú", (e) => e.preventDefault())
document.getElementById("resetBtn").addEventListener("click", resetGame)

//inicio del juego, allí llamamos a la funciones que nececitemos//
initEnemies()
updateScore()
