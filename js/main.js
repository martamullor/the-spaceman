let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  game = new Game({ctx}, 
    new Player(60,60,250,420), 
    canvas.width-50, 
    canvas.height);

  
    function start(){
      canvas.style = "display:block";
      game.start();

      const startButton = document.getElementById("start");
      startButton.style = "display: none";
    }
    
    console.log("Game start");

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", start);
});