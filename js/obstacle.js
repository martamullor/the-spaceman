class Obstacle {
    constructor(width,height, x, y, speed){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.image = undefined;
      this.speed = speed;
      this.type = undefined;
      this.effect = undefined
      this.interval = undefined;
    }
    
    /*
    _generateRandom () {
      const types = [{name: 'enemy', color: 'red'}, {name: 'oxygen', color: 'red'}]
      
      // funcion random que me de un de los elementos de la array

      this.type = e.name
      this.color = e.color
      this.effect = +1
    }
    */
}

// class Enemy extends Obstacle {
//     constructor(width, height, x, y, speed){
//       super(width,height, x, y, speed);
//       this.type = "enemy";
//       this.color = "red";
//       this.imageEnemy = undefined;
//     } 
// }

// class Oxygen extends Obstacle {
//   constructor(width, height, x, y, speed){
//     super(width,height, x, y, speed);
//     this.type = "oxygen";
//     this.color = "green";
//     this.imageOxygen = undefined;
//   } 
