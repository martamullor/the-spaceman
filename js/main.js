let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  const startButton = document.getElementById('start');
  startButton.addEventListener('click', start); 
  

  
    function start() {

        game = new Game({ctx}, 
          new Player(40,40,250,450), 
          canvas.offsetWidth-50, 
          canvas.offsetHeight);


        game.start();
    }
        


    console.log("Game start")




})