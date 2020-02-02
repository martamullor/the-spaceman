class Game {
  constructor(options, player,background,canvasWidth,canvasHeight){
    this.ctx = options.ctx;
    this.player = player;
    this.background = background;
    this.interval = undefined;
    this.intervalEntities = undefined;
    this.obstacle = [];
    this.intervalEntitiesMove = undefined;
    this.intervalBackground = undefined;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.time = 300;
    this.points = 0;
  }

  // Time & Points

  _drawTime(){
    let time = document.getElementById("segundos");
    console.log(`The time is ${this.time}`);
    time.innerHTML = this.time;
  }

  _drawPoints(){
    let points = document.getElementById("number");
    console.log(`The points is ${this.points}`);
    points.innerHTML = this.points;
  }


  // GameOver 

  _gameOver(){
    if (this.time === 0){
      this._stop();
      this._printGameOver();
    }
  }


  _printGameOver() {
    const gameOver = document.getElementById('gameOver');
    gameOver.style = "display:block";
    const gameOverTitle = document.getElementById('gameOverTitle');
    gameOverTitle.style = "display:block";
    const gameOverText = document.getElementById('gameOverText');
    gameOverText.style = "display:block";
    canvas.style = "display:none";
    time.style = "display:none";
    points.style = "display:none";
  }


  // Background 

  _drawBackground() {
      this.background.image = new Image();
      this.background.image.src = "../img/background.jpg";
      this.ctx.drawImage( this.background.image, this.background.x, this.background.y, this.background.width, this.background.height);
  };

  _moveBackground() { 
    this.intervalEntities = setInterval(() => {
      if (this.background.y === this.canvasHeight){
        this.background.y = 0;
      } else {
        this.background.y -= 2;
      }
    }, 50);
  };

  

  _moveObstacle(){
    for (let i = 0; i < this.obstacle.length; i++) {
        this.obstacle[i].y += 2;
        this._deleteObstacles();
        this._collidesWithObstacle();
      }
  };

  
  // Player Elements

  _drawPlayer() {
    this.player.image = new Image();
    this.player.image.src = "../img/astronaut.png";
    this.ctx.drawImage( this.player.image, this.player.x, this.player.y, this.player.width, this.player.height);
  };


  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      e.preventDefault();
      switch (e.keyCode) {
        case 37: // arrow left
          console.log("Left");
          this.player.moveLeft(); 
          if (this.player.x < 0){
            this.player.x = 0; 
          } 
          break;
        case 39: // arrow right
          console.log("right");
          this.player.moveRight();
          if (this.player.x > this.canvasWidth){
            this.player.x = this.canvasWidth; 
          } 
          break;
      }
    });
  } 

// Obstacle Elements

  _generateObstacle() { 
    this.intervalEntities = setInterval(() => {
      this.obstacle.push(new Obstacle(70, 70, this._getRandomNumber(this.canvasWidth), 0, 300, "enemy"));
      this.time -= 5; 
    }, 1000);
  };


  _generateOxygen() { 
    this.intervalEntities = setInterval(() => {
      this.obstacle.push(new Obstacle(40, 40, this._getRandomNumber(this.canvasWidth), 0, 100, "oxygen"));
    }, 3000);
  };

  

  _moveObstacle(){
    for (let i = 0; i < this.obstacle.length; i++) {
        this.obstacle[i].y += 2;
        this._deleteObstacles();
        this._collidesWithObstacle();
      }
  };


  _deleteObstacles(){
    this.obstacle.forEach((element) => {
      if (element.y + element.height === this.canvasHeight){
        this.obstacle.shift();
      }
    })
   };


   _collidesWithObstacle() {
    this.obstacle.forEach((element, position) => {    
        if (element.y + element.height >= this.canvasHeight - this.player.height && 
            (
                ( element.x + element.width >= this.player.x &&
                  element.x + element.width <= this.player.x + this.player.width) 
                ||
                (this.player.x + this.player.height >= element.x &&
                this.player.x + this.player.height <= element.x + element.width)
            )) { 
            if (element.type === "enemy"){
              this._stop();
              this._printGameOver();
            } else {
              this.points += 5;
              this.time += 10;
              this.obstacle.splice(position, 1);
            }
        }
    })
  };


  _drawObstacle() {  
    this.obstacle.forEach(element => {
      if (element.type === "enemy"){
        this.obstacle.image = new Image();
        this.obstacle.image.src = "../img/enemy.png";
        this.ctx.drawImage(this.obstacle.image, element.x, element.y, element.width, element.height);
      } else {
        this.obstacle.image = new Image();
        this.obstacle.image.src = "../img/oxygen.png";
        this.ctx.drawImage(this.obstacle.image, element.x, element.y, element.width, element.height);
      }
    });
  };


  _getRandomNumber(max){
    return Math.floor(Math.random() * (max - 0)) + 0;  
  };



// BUCLES 

  start(){
    this._assignControlsToKeys();
    this._generateObstacle();
    this._generateOxygen();
    this._moveBackground();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }


  // Limpiado

  _clear(){
    this.ctx.clearRect(0,0,886,500);
  }

  // Stop All

  _stop(){
    console.log('stop');
    this.interval = clearInterval(this.interval);
    this.interval = undefined;
    
    clearInterval(this.intervalEntities);

  }

  _update() {

    this._clear();
    this._drawBackground();
    this._drawObstacle();
    this._drawPlayer();
    this._moveObstacle();
    this._drawTime();
    this._drawPoints();
    this._gameOver();

    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }    
  }
}



