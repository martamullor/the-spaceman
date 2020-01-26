
// Canvas

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

// Img

let background;

// The Spaceman - Player

let player = {
  x: 220,
  y: canvas.height - 80,
  width: 50,
  height: 50,
}

let keyboard = {};

// Functions


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

// Funciones del player - En teoría pertenecería a Game 

function createPlayer(){
  ctx.save();
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.restore();
}

// Función que creo que va en Game también según el juego del snake

function assignControlsToKeys(){
  // Cuando el usuario le da a una tecla se convierte en true
    addEvent(document,"keydown", function(e){
      keyboard[e.keyCode] = true;
    });
    addEvent(document,"keyup", function(e){
      keyboard[e.keyCode] = false;
    });

  function addEvent(element, name, callback){
    if(element.addEventListener){
      // Navegadores buenos
       element.addEventListener(name, callback, false);   
    }
    else if(element.attachEvent){
      // Para internet explorer
      elemento.attachEvent(name, callback);
    }
  }  
}

function movePlayer(){
  if(keyboard[37]){
    // Movimiento a la izquierda
    player.x -= 10;
      if (player.x < 0) player.x = 0;
  }
  if(keyboard[39]){
    // Movimiento a la izquierda
    let limit = canvas.width - player.width;
    player.x += 10;
      if (player.x > limit) player.x = limit;
  }

}

function update(){
  movePlayer();
  drawBackground();
  createPlayer();
}

// Call functions
assignControlsToKeys(); 
loadMedia();











  