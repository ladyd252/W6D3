(function() {
  var Hanoi = window.Hanoi = (window.Hanoi || {});

  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.$el = $el;
    this.render();
    this.firstClick = undefined;
  }

  View.prototype.render = function() {
    this.$el.html('');
    for (var i = 0; i < 3; i++) {
      var $tower = $("<div>");
      $tower.addClass("tower");
      $tower.data("pos", i);
      this.$el.append($tower);
      for (var j = 2; j >= 0; j--) {
        var $disk = $("<div>");
        $disk.addClass("disk");
        $tower.append($disk);
        if (this.game.towers[i][j] != undefined){
          var $piece = $('<div>');
          var className = this.game.towers[i][j];
          $piece.addClass("disk" + className);
          $disk.append($piece);
        }
      }
    }
    this.clickTower();
  }

  View.prototype.clickTower = function() {
    var view = this;
    var $towerItems = $('.tower');
    $towerItems.on("click", function(event) {
      var currentTower = event.currentTarget;
      var $currentTower = $(currentTower);
      var position = $currentTower.data("pos");
      if (view.firstClick !== undefined) {
        if (view.game.isValidMove(view.firstClick, position)) {
          view.game.move(view.firstClick, position);
          view.firstClick = undefined;
          view.render();
          if (view.game.isWon()) {
            alert("YAY, YOU'RE AWESOME :)");
          }
        } else {
          view.firstClick = undefined;
          alert("BAD MOVE, YOU SUCK");
          view.render();
        }
      } else {
        $currentTower.addClass("clicked");
        view.firstClick = position;
      }

    })
  }
})();
