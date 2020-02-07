
class Player {
  constructor(width,height, x, y,spriteWidth,spriteHeight, cols, rows){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = "green";
    this.image = undefined;
    this.movement = new Audio();
    this.movement.src = "./sound/movement.mp3";
    this.image = new Image();
    this.image.src = "./img/astronaut.png";
    this.spriteWidth = 735;
    this.spriteHeight = 122;
    this.cols = 6;
    this.rows = 1;
    this.widthFrame = spriteWidth/cols;
    this.heightFrame = spriteHeight/rows;
    this.currentFrame = 0;
    this.frameCount = 6;
    this.srcX = 0;
    this.srcY = 0;
    //this.intervalId = undefined;
  }

  moveRight(){
    this.x += 20;
    this.image.src = "./img/astronaut.png";
  }

  moveLeft(){
    this.x -= 20;
    this.image.src = "./img/astronautLeft.png";
  }




}