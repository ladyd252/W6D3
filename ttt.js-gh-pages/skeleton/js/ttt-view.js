(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    var view = this;
    var $squareItems = $(".square");
    $squareItems.on("click", function(event){
      var currentSquare = event.currentTarget;
      var $currentSquare = $(currentSquare);
      var position = $currentSquare.data("pos");
      if (view.game.board.isEmptyPos(position)) {
        view.makeMove($currentSquare);
        view.game.playMove(position);
      } else {
        alert("Not a valid move. Try again.")
      }
      if (view.game.isOver()) {
        if (view.game.winner()) {
          alert(view.game.winner() + " has won!");
        } else {
          alert("NO ONE WINS!");
        }
      }
    })
  };

  View.prototype.makeMove = function ($square) {
    if (this.game.currentPlayer === "x") {
      $square.addClass("clicked-x");
      $square.append('<span>x</span>');
    }else if (this.game.currentPlayer === "o") {
      $square.addClass("clicked-o");
      $square.append('<span>o</span>');
    }
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < 3; i++) {
      var $div = $("<div>");
      $div.addClass("row");
      this.$el.append($div);
      for (var j = 0; j < 3; j++) {
        var $innerDiv = $("<div>");
        $innerDiv.addClass("square");
        $innerDiv.data("pos", [i,j]);
        $div.append($innerDiv);
      }
    }
  };
})();
