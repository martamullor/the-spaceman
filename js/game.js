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

  everyInterval(n){
    if ((this.interval / n) % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }

  _generateObstacle() { 
    for (let i = 0; i < 120; i++) {
      //if (this.everyInterval(10)){
        this.obstacle.push(new Obstacle(50, 50, 130, -100, 200));
        this.obstacle[i].y += 1;
      //}
    }
  };


  /*
  updateObstacle(){
    this.interval = setInterval(this._drawObstacle.bind(this), 100);
  }
  */

  _drawObstacle() {  
    this.obstacle.forEach(element => {
      this.ctx.fillStyle = element.color;
      this.ctx.fillRect(element.x, element.y, element.width, element.height);
    });
  }

 // setInterval(_drawObstacle, 10);

  // CUANDO SE PINTAN LAS FUNCIONES

  start(){
    this._assignControlsToKeys();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

  _clear(){
    this.ctx.clearRect(0,0,550,500);
  }

  _update() {

    this._generateObstacle();
    console.log("Generate object");
    this._clear();
    this._drawObstacle();
    this._drawPlayer();
    //this.updateObstacle();
    //console.log("Update Area") 
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
    
  }


}



