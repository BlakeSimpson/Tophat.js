(function( global ) {

  var init, canvas, ctx, red, blue, explosion;

  init = function () {
    canvas = document.querySelector( "canvas" );
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx = canvas.getContext( "2d" );

    window.ctx = ctx;

    red = new th.Entity( {
      x: 20,
      y: 20,
      width: 50,
      height: 50,
      color: "#f00"
    } );

    blue = new th.Entity( {
      x: 300,
      y: 240,
      width: 60,
      height: 80,
      color: "#00f"
    } );

    explosion = new th.Entity( {
      x: 160,
      y: 160,
      width: 48,
      height: 48,
      delay: 4,
      frames: 12
    } );
    explosion.setImage( "../../res/img/explosion-medium.png" );

    nextFrame();
  };

  function nextFrame () {
    var frame = th.helpers.requestAnimationFrame();
    frame( loop );
  }

  function loop () {
    // Clear current frame
    ctx.clearRect( 0, 0, canvas.width, canvas.height )

    // Draw content
    red.tick();
    blue.tick();
    explosion.tick();

    // Next loop
    nextFrame();
  }

  global.onload = init;

})( this );
