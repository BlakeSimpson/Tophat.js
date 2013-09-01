(function( global ) {

  var callback, init, game, explosion;

  callback = function () {
    explosion.tick();
  };

  init = function () {
    game = new th.Game( {
      loopFunction: callback
    } );

    explosion = new th.Entity( {
      width: 48,
      height: 48,
      delay: 4,
      frames: 12
    } );

    explosion.setImage( "../../res/img/explosion-medium.png" );
    explosion.position( th.POSITIONS.center );

    game.start();
    window.game = game;
  };

  window.onload = init;

})( this );
