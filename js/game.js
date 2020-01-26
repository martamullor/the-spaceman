console.log("I'm a game");


class Game {
    constructor(options, callback) {
      this.ctx = options.ctx
      this.snake = options.snake;
      this.interval = undefined;
      this.rows = options.rows;
      this.columns = options.columns;
      this.maxCells = options.maxCells;
      this.food = undefined;
      this.gameOver = callback
    }
  
    _drawSnake() {
      this.ctx.fillStyle = "green";
      this.snake.body.forEach(position => {
        this.ctx.fillRect(position.column * this.maxCells, position.row * this.maxCells, 8, 8);
      });
    }
  
    _drawFood() {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(this.food.column * 10, this.food.row * 10, 8, 8);
    }
  
    _update() {
      // limpiar
      this._kh7();
      // pintar
      this._drawSnake();
      if (this.food) {
        this._drawFood();
      }
      if (this.snake.collidesWith(this.food)) {
        this.snake.grow();
        this._generateFood();
      }
      if (this.snake.hasEatenItSelf()) {
        this.snake.stop();
        this.pause();
        this.gameOver();
      }
      if (!!this.interval) {
        this.interval = window.requestAnimationFrame(this._update.bind(this));
      }
    }
  
    _generateFood() {
      do {
        this.food = {
          row: Math.floor(Math.random() * this.rows),
          column: Math.floor(Math.random() * this.columns)
        };
      } while (this.snake.collidesWith(this.food));
    }
  
    _assignControlsToKeys() {
      document.addEventListener('keydown', e => {
        switch (e.keyCode) {
          case 38: // arrow up
            this.snake.goUp();
            break;
          case 40: // arror down
            this.snake.goDown();
            break;
          case 37: // arror left
            this.snake.goLeft();
            break;
          case 39: // arrow right
            this.snake.goRight();
            break;
          case 80: // p pause
            this.snake.intervalId ? this.snake.stop() : this.snake.move();
            break;
        }
      });
    }
  
    _kh7() {
      this.ctx.clearRect(0, 0, 500, 500)
    }
  
    restart() {
      this.snake.reset()
    }
  
    start() {
      this._assignControlsToKeys();
      this._generateFood()
      this.snake.move()
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  
  }