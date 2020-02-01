let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  const startButton = document.getElementById('start');
  startButton.addEventListener('click', startGame); 


  
    function startGame() {

        game = new Game({ctx}, 
          new Player(60,60,250,420), 
          canvas.offsetWidth-70, 
          canvas.offsetHeight);


        game.start();
    }
        


    console.log("Game start");
})