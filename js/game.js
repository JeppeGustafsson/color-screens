const gameWindow = document.getElementById('gameSection');
let player = document.getElementById('playerEl');
let object = document.getElementById('objectEl');
let bullet = document.getElementById('bulletEl');

function startGame() {
    gameWindow.classList.add('game-on');
}

function jump() {
    if (player.classList != 'jump') {
        player.classList.add('jump');
        bullet.classList.remove('shoot');
    }
    setTimeout(function() {
        player.classList.remove('jump');
    }, 550 );
}

document.addEventListener('keypress', jump);

let playerTop = parseInt(
    player.getBoundingClientRect().top
);
let objectLeft = parseInt(
    object.getBoundingClientRect().x
);
let bulletleft = parseInt(
    bullet.getBoundingClientRect().x
);

function checkClash() { setInterval(() => {
    if (objectLeft < 630) {
        player.style.animation = 'none';
        object.style.display = 'none';
        console.log('loser');
    }
}, 10)};
checkClash();

var checkBulletHit = () => {
    if (objectLeft === bulletRight) {
        console.log("Hit!")
    }
}

function shoot() {
    if (bullet.classList != 'shoot') {
        bullet.classList.add('shoot');
        console.log(parseInt(
            object.getBoundingClientRect().x
        ))
    }
    setTimeout(function() {
        bullet.classList.remove('shoot');
    }, 200)
}

document.addEventListener('click', shoot);

