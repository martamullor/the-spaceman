let ctx;
let game;
let withRows = 10;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('canvas');
  //let playBtn = document.getElementById('play');
  // let startScreen = document.getElementById('startscreen');
  //let startBtn = document.getElementById('start');
  // let container = document.getElementById('container');
  // let body = document.getElementsByClassName('body');
  // let gameOver = document.getElementById("gameover");
  ctx = canvas.getContext('2d');

  game = new Game({ctx}, new Player(40,40,250,450), canvas.offsetWidth-50, canvas.offsetHeight);

  // function destroyStartScreen() {
  //   container.style = "display: block";
  //   startScreen.style = "display: none";
  //   body[0].style = "background-color: gray";
  // };


    game.start();

    console.log("Game start")


  // createGameScreen();

  // createPauseScreen();

  // function createGameOverScreen() {
  //   canvas.style = "display: none";
  //   gameOver.style = "display: block";
  // };

  // destroyGameScreen();

  // destroyPauseScreen(id);

  // destroyGameOverScreen();

})