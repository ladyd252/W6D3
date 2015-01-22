(function(){
  var Snakes = window.Snakes = (window.Snakes || {});

  var Snake = Snakes.Snake = function() {
    this.dir = "N";
    this.segments = [new Coord(5, 5)]; //should store coordinates
  }

  var Coord = Snakes.Coord = function(x, y) {
    this.x = x;
    this.y = y;
  }

  Coord.prototype.plus = function(deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
  }

  Snake.prototype.move = function() {
    var deltaX = 0;
    var deltaY = 0;
    switch(this.dir) {
      case "N": deltaY = -1;
      break;

      case "S": deltaY = 1;
      break;

      case "W": deltaX = -1;
      break;

      case "E": deltaX = 1;
      break;
    }
    var nextPos = this.segments[0]
    this.segments[0].plus(deltaX, deltaY);

    for (var i = 1; i < this.segments.length; i++) {
      var currentSeg = this.segments[i];
      this.segments[i] = nextPos;
      nextPos = currentSeg;
    }
  }

  Snake.prototype.turn = function(direction){
    this.dir = direction;
  }

  var Board = Snakes.Board = function(){
    this.snake = new Snake();
    this.grid = createBoard();
    this.render();

  }

  var createBoard = function(){
    var finalGrid = [];

    for (var i = 0; i < 10; i++) {
      finalGrid.push(Array(10));
    }

    return finalGrid;
  }

  Board.prototype.render = function(){
    for (var i = 0; i < this.snake.segments.length; i++) {
      this.grid[this.snake.segments[i].x][this.snake.segments[i].y] = "S";
    }
    console.log(this.grid);
  }

})();
