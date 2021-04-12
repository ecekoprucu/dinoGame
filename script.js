const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
const point = document.getElementsByClassName("score")[0];

let gameOver = false;
let position=0;
let height = 0;
let points = 0;

const raisePoints = setInterval(() => {
    if(gameOver) {
       clearInterval(raisePoints);
    }
    points += 20;
    point.innerHTML = points;
}, 50);

const obstacleMove = setInterval(() => {
    if(position===600) {
        position=0;
        obstacle.style.right=position + 'px';
    }

    if(height < 75 && position > 525) {
        alert('Game Over');
        gameOver = true;
        clearInterval(obstacleMove);
    }

    position +=10;
    obstacle.style.right= position + 'px';
}, 20);

function jump () {
    const dinoUp = setInterval(() => {
        height += 20;
        if(height > 100) {
            clearInterval(dinoUp);
            fall();
        }
        dino.style.bottom = height + 'px';
    },50)
}

function fall () {
    const dinoDown = setInterval(() => {
        height-=20;
        if(height<1) {
            clearInterval(dinoDown);
        }
        dino.style.bottom = height + 'px';
    }, 50)
}

document.addEventListener('keydown', (e) => {
    if(e.code==='Space') {
        jump();
    }
})