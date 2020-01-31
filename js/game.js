class Game {
  constructor(options, player,canvasWidth,canvasHeight){
    this.ctx = options.ctx;
    this.player = player;
    this.interval = undefined;
    this.intervalEntities = undefined;
    this.obstacle = [];
    this.intervalEntitiesMove = undefined;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }


  // Player Elements

  _drawPlayer() {
    this.ctx.fillStyle = this.player.color;
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  };


  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
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
      e.preventDefault();
    });
  } 

// Obstacle Elements

  _generateObstacle() { 
    this.intervalEntities = setInterval(() => {
      this.obstacle.push(new Obstacle(50, 50, this._getRandomNumber(this.canvasWidth), 0, 200));
    }, 1000);
  };

  _moveObstacle(){
   this.intervalEntitiesMove = setInterval(() => {
    for (let i = 0; i < this.obstacle.length; i++) {
        this.obstacle[i].y += 1;
        this._deleteObstacles();
        console.log("Element deleted");
        this._collidesWithObstacle();
        console.log("collide evaluated")
      }
   }, 1); 
  };


  _deleteObstacles(){
    return this.obstacle.some((element) => {
      if (element.y + element.height === this.canvasHeight){
        this.obstacle.shift();
      }
    })
   };

   _collidesWithObstacle() {
    return this.obstacle.some((element) => {    
        if (
            element.y + element.height >= this.canvasHeight - this.player.height && 
            (
                (   // Left of the player
                    element.x + element.width >= this.player.x &&
                    element.x + element.width <= this.player.x + this.player.width
                ) ||
                (   // Right of the player
                    this.player.x + this.player.height >= element.x &&
                    this.player.x + this.player.height <= element.x + element.width
                )
            )
        ) {
            this.obstacle.shift();
            this._stop();
        }
        else {
            return false;
        }
    })
  }

  _drawObstacle() {  
    this.obstacle.forEach(element => {
      this.ctx.fillStyle = element.color;
      this.ctx.fillRect(element.x, element.y, element.width, element.height);
    });
  };

    

  _getRandomNumber(max){
    return Math.floor(Math.random() * (max - 0)) + 0;  
  };



// BUCLES 

  start(){
    this._assignControlsToKeys();
    this._generateObstacle();
    this._moveObstacle();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }


  // Limpiado

  _clear(){
    this.ctx.clearRect(0,0,550,500);
  }

  // Stop All

  _stop(){
    clearInterval(this.interval);
    clearInterval(this.intervalEntities);
    clearInterval(this.intervalEntitiesMove);

  }

  _update() {

    this._clear();
    this._drawObstacle();
    this._drawPlayer();

    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
    
  }


}



