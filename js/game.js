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
    this.intervalEntitiesDelete = undefined;
  }

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
        console.log("return true");
      }
   }, 1); 
  };


  _deleteObstacles(){
    return this.obstacle.some((element) => {
      if (element.y + element.height === this.canvasHeight){
        this.obstacle.shift();

        //return true;
        console.log("return true");
      }
    })
   };

  
/*
  _deleteObstacles(){
      for (let i = 0; i < this.obstacle.length; i++){
        if (this.obstacle[i].y = 200){
          this.obstacle[i].shift();
        }
      }
    }
 */   
  
_collideWith(object){
  let collide = true;
  let myLeft = this.player.x;
  let myRight = this.player.x + this.player.width;
  let myTop = this.player.y;
  let myBottom = this.player.y + this.player.height;
  let objectLeft = object.x;
  let objectRight = object.x + object.width;
  let objetTop = object.y;
  let objectBottom = object.y + object.height;

  if ((myBottom < objetTop) || (myTop > objectBottom) ||
  (myRight < objectLeft) || (myLeft > objectRight)) {
    collide = false;
  }
  return collide;
}


  _getRandomNumber(max){
    return Math.floor(Math.random() * (max - 0)) + 0;  
  };


  _drawObstacle() {  
    this.obstacle.forEach(element => {
      this.ctx.fillStyle = element.color;
      this.ctx.fillRect(element.x, element.y, element.width, element.height);
    });
  };



  // Bucles 

  start(){
    this._assignControlsToKeys();
    this._generateObstacle();
    this._moveObstacle();
    //this._deleteObstacles();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

  _clear(){
    this.ctx.clearRect(0,0,550,500);
  }

  _update() {

    this._clear();
    this._drawObstacle();
    this._drawPlayer();
    //this._deleteObstacles();
    this._collideWith(this.obstacle);

    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
    
  }


}



