class Game {
  constructor(options, player){
    this.ctx = options.ctx;
    this.player = player;
    this.interval = undefined;
    this.obstacle = [];
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
          break;
        case 39: // arrow right
          console.log("right");
          this.player.moveRight();
          break;
      }
      e.preventDefault();
    });
  } 

  _generateObstacle() {  
    //let x, y;
    for (let i = 0; i < 120; i++) {
      this.obstacle.push(new Obstacle(50, 50, 300, 300, 50));
    }
  };

  _drawObstacle() {  
    this.obstacle.forEach(element => {
      this.ctx.fillStyle = element.color;
      this.ctx.fillRect(element.x, element.y, element.width, element.height);
    });
  }

  // CUANDO SE PINTAN LAS FUNCIONES

  start(){
    this._assignControlsToKeys();
    //this._generateObstacle();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

  _clear(){
    this.ctx.clearRect(0,0,550,500);
  }

  _update() {
 
    this._clear();

 
    this._drawObstacle();
    this._drawPlayer();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
    
  }


}



