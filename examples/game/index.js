(function( global ) {

  var callback, init, game, explosion,
    exp = [],
    total = 100;

  callback = function () {
    for( var i = 0; i < exp.length; i++ ) {
      exp[ i ].tick();
    }
  };

  init = function () {
    game = new th.Game( {
      loopFunction: callback
    } );

    for( var i = 0; i < total; i++ ) {
      explosion = new th.Entity( {
        width: 48,
        height: 48,
        delay: 4,
        frames: 12,
        x: th.helpers.random( 0, th.canvas.width ),
        y: th.helpers.random( 0, th.canvas.height )
      } );

      explosion.setImage( "../res/img/explosion-medium.png" );
      exp.push( explosion );
    }

    game.start();
    window.game = game;
  };

  window.onload = init;

})( this );
