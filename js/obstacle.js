class Obstacle {
    constructor(width,height, x, y, speed,type){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.type = type;
      this.color = undefined;
      this.effect = undefined
      this.interval = undefined;
    }
    
    
    /*
    _generateRandom() {
      const types = [{name: 'enemy', color: 'red'}, {name: 'oxygen', color: 'red'}]
      
      // funcion random que me de uno de los elementos de la array
      _randomObtstacle(types);

      return obstacle.type;

      //this.type = e.name
      //this.color = e.color
      //this.effect = +1
    }

    _randomObstacle(array){
      obstacle = array[Math.floor(Math.random()* array.length)];
      this.type = obstacle.name;
      this.color = obstacle.color;
    }

    */
    
}


