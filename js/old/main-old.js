
// Canvas

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");


// Img

let background;

// The Spaceman - Player

let player = {
  x: 320,
  y: canvas.height - 60,
  width: 40,
  height: 40,
}

// Objecto que almacena los botones del teclado.
let keyboard = {};

// Game que solamente contiene los estados del juego

let game = {
  status: "start",
};

// FUNCTIONS

function loadMedia(){
  background = new Image();
  background.src = "img/background.jpg";
  background.onload = function(){
    let interval = window.setInterval(update, 1000/55);
  }
} 

function drawBackground(){
  ctx.drawImage(background,0,0); 
}

// Crear el player

function createPlayer(){
  ctx.save();
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.restore();
}


// Función que creo que va en Game también según el juego del snake

function assignControlsToEvents(){
  // Cuando el usuario le da a una tecla se convierte en true
    addEvent(document,"keydown", function(e){
      keyboard[e.keyCode] = true;
    });
    addEvent(document,"keyup", function(e){
      keyboard[e.keyCode] = false;
    });

  function addEvent(element, name, callback){
       element.addEventListener(name, callback);   
  }  
}

// Función mover que en este caso iría al player

function movePlayer(){
  if(keyboard[37]){
    // Movimiento izquierda
    player.x -= 10;
      if (player.x < 0) player.x = 0;
  }
  if(keyboard[39]){
    // Movimiento a la derecha
    let limit = canvas.width - player.width;
    player.x += 10;
      if (player.x > limit) player.x = limit;
  }
}
// Array que almacena los obstaculos.
let obstacles  = [];

// Crear obstáculo

function moveObstacles(){
  if (game.status = "start"){
    for( i = 0; i < 10; i++){
      obstacles.push({
        x: 10 + (i * 50),
        y: 10,
        height: 40,
        width:40,
        counter: 0,
      });
    }

    for (let i in obstacles){
      let obstacle = obstacles[i];
      obstacle.counter++;
      obstacle.y += Math.sin(obstacle.counter * Math.PI / 90)* 5;
    }
  }
}

function createObstacles(){
  for (let i in obstacles){
   let obstacle  = obstacles[i];
   ctx.save();
   ctx.fillStyle = "yellow";
   ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
   ctx.restore();
  }  
}


// Actualizar las posiciones de los jugadores
// Esta función pasa por el SetInterval y se va recargando actalizar.

function update(){
  drawBackground();
  movePlayer();
  moveObstacles();
  createObstacles();
  createPlayer();
}

// Call functions
assignControlsToEvents(); 
loadMedia();











  