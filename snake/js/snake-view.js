(function(){
  var Snakes = window.Snakes = (window.Snakes || {});

  var View = Snakes.view = function($el){
    this.$el = $el;
    this.board = new Snakes.Board();
    this.bindKeys();
  }


  View.prototype.bindKeys = function(){
    $(document).keydown(function(e) {
      switch(e.which) {
        case 37: // left
        break;

        case 38: // up
        break;

        case 39: // right
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
  }

})();
