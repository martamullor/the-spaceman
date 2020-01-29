
let spaceman;
let enemy = [];
let oxygen = [];

// Función que se declara en el HTML para iniciar el juego

function startGame() {
  gameArea.start();
  spaceman = new player(40, 40, "blue", 250, 450);

  }

  // Recargas del gameArea
  
  // Esto pertenece a la clase Game
  let gameArea = {

    canvas: document.createElement("canvas"),
    
    start() {
      this.canvas.width = 550;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frame = 0;
      this.interval = setInterval(updateGameArea, 15);
      window.addEventListener("keydown", function(e){
        gameArea.key = e.keyCode;
      })
      window.addEventListener("keyup", function(e){
        gameArea.key = false;
      })
    },
    clear(){
      this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    },
    stop(){
      clearInterval(this.interval);
    }
  }

  // Función que evalua los frames

  function everyInterval(n){
    if ((gameArea.frame / n) % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }

  // Class Player de la que ahora mismo sacamos los enemigos.

  function player(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
      ctx = gameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    }

    this.crashWith = function(object){
      let myLeft = this.x;
      let myRight = this.x + this.width;
      let myTop = this.y;
      let myBottom = this.y + this.height;
      let objetLeft = object.x;
      let objectRight = object.x + object.width;
      let objetTop = object.y;
      let objectBottom = object.y + object.height;
      let crash = true; 
      if ((myBottom < objetTop) || (myTop > objectBottom) ||
      (myRight < objetLeft) || (myLeft > objectRight)) {
        crash = false;
      }
      return crash;
    }
  }

  // Funciones de movimiento del mi Player = SpaceMan
  
  function moveRight() {
    spaceman.speedX += 8;
  }

  function moveLeft() {
    spaceman.speedX -= 8;
  }


  // Update Game Area 

  function updateGameArea() {

  // Comprobamos los keyboards del teclado.
      spaceman.speedX = 0;
      spaceman.speedY = 0;
      if (gameArea.key == 37){
       spaceman.speedX = -8;
    }
      if (gameArea.key == 39){
       spaceman.speedX = 8;
    };


    let x, y;
    
    // Evaluamos si choca con el enemigo.

    for (let i = 0; i < enemy.length; i += 1) {
      if (spaceman.crashWith(enemy[i])) {
        gameArea.stop();
        return;
      }
    }
    gameArea.clear();

    // Cada cierto tiempo pintamos un enemigo
    gameArea.frame += 1;
    if (gameArea.frame == 1 || everyInterval(100)) {
      x = Math.floor(Math.random()* gameArea.canvas.width);
      //x = gameArea.canvas.width - 200;
      y = gameArea.canvas.height - 500;
      enemy.push(new player(60, 60, "red", x, y));
    }
    // Dirección de los enemigos

    for (i = 0; i < enemy.length; i += 1) {
      enemy[i].y += 1;
      enemy[i].update();
    }
    spaceman.newPos();
    spaceman.update();
  }
  
