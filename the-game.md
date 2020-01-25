# The Spaceman
The objective of the game is to avoid obstacles and not run out of oxygen.

The game screen is an astronaut that moves up and dodges items that appear randomly on the screen.

The player can moves to the right and left and that can leave by a side of the board and appear in the other side.

The player uses the arrows from left to right to move.

The game ends when a collision is detected between the player and the obstacle or when the player runs out of oxygen.

Extra: In each level more obstacles appear and the astronaut goes a little faster.

* * *
## MVP
### Technique
Html5 __Canvas__ and Vanilla __Javascript__
### Game states
* __Start Screen__
  * Title
  * Play button
* __Game Screen__
  * Canvas
* __Game Over Screen__
  * Play again button
  * Go to start screen button
### Game
* Create line
* Create online player
* Move player
* Click on any button to move the player from right to left of the board.
* Create obstacles and oxygen as the player progresses.
* Check collision
* In case of collision -> Game Over -> Show Game Over screen
* In case of running out of oxygen -> Game Over -> Show Game Over screen
* * *
## BACK LOG
### Rotate canvas
### Score
* Run counter and store score on game over
### High score
* Create High Score Screen
* Show latest score on Start Screen
* Add high score button to Start Screen
### Music
* Add background music to game
* Add music on and off button to Start screen.
* Add sound every time the player collide
* Add sound every time the player picks up oxygen
### Player colors FALTA
* Create Color Screen
* Let user choose color of player with color buttons
* Add Choose color button to Start Screen
* Change color of player when playing
### Levels 
* Check the time and increase level.
* * *
## Data structure FALTA
__main.js__
````
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();
var game = new Game({
    this.rows,
    this.columns,
    ctx: ctx,
    backgroundcolor = ['xxx','xxx','xxx'],
    this.obstacles,
    this.player
  });
game.init();
````
__Game.js__
````
function Game(options){};
Game.drawBoard();
Game.drawPlayer();
Game.generateObstacles();
Game.gameOver();
Game.init();
garbageCollector;
````
__Player.js__
````
function Player(){
  this.width;
  this.height;
  this.color;
};
Player.move();
````
__Obstacle.js__
````
function Obstacle(){
  this.width;
  this.height;
};
moveForward();
````
## Links
[Iron flip run Trello](https://trello.com/b/jvP5IE61/iron-flip-run)
[Github](https://github.com/annaclf/iron-flip-run)