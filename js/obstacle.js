class Obstacle {
    constructor(width,height, x, y, speed){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.color = "red";
      this.speed = speed;
      //this.currentframe = 0;
      this.interval = undefined;
    }
}