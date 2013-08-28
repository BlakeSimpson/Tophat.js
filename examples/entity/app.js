(function( global ) {

  var init, canvas, ctx, entity;

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
      y: 190,
      width: 60,
      height: 80,
      color: "#00f"
    } );

    red.tick();
    blue.tick();
  };

  global.onload = init;

})( this );
