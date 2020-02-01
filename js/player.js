
class Player {
  constructor(width,height, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = "green";
    this.image = undefined;
    //this.intervalId = undefined;
  }


  moveRight(){
    this.x += 20;
  }

  moveLeft(){
    this.x -= 20;
  }

}