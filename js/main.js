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
      const startImage = document.getElementById("img-start")
      startImage.style = "display: none";
      const time = document.getElementById("time");
      time.style = "display: block"
    }
    
    console.log("Game start");

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", start);
});