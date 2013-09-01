(function( global ) {

  var callback, init, game,
    tests = {
      "red": th.POSITIONS.center,
      "Khaki": th.POSITIONS.centerTop,
      "SteelBlue": th.POSITIONS.centerBottom,
      "blue": th.POSITIONS.leftCenter,
      "green": th.POSITIONS.rightCenter,
      "yellow": th.POSITIONS.leftTop,
      "pink": th.POSITIONS.rightTop,
      "BlueViolet": th.POSITIONS.leftBottom,
      "DarkRed": th.POSITIONS.rightBottom
    },
    items = [];

  callback = function () {
    for ( var i = items.length - 1; i >= 0; i-- ) {
      items[ i ].tick();
    }
  };

  init = function () {
    game = new th.Game( {
      loopFunction: callback
    } );

    for ( var color in tests ) {
      var position = tests[ color ],
        item;

      item = new th.Entity( {
        width: 100,
        height: 100,
        color: color
      } );
      item.position( position );

      items.push( item );
    }

    game.start();
    game.stop();
    window.game = game;
  };

  window.onload = init;

})( this );
