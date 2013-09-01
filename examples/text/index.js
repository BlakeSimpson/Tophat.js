(function( global ) {

  var init, canvas, ctx, red, blue, cycled;

  init = function () {
    canvas = document.querySelector( "canvas" );
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx = canvas.getContext( "2d" );

    th.ctx = ctx;

    red = new th.Text( {
      x: 20,
      y: 20,
      color: "#f00"
    } );
    red.setContent( "Red Text" );

    blue = new th.Text( {
      x: 300,
      y: 240,
      color: "#00f",
      content: "Blue Text",
      fontSize: "18px",
      fontFamily: "Georgia, serif"
    } );

    cycled = new th.Text( {
      x: 160,
      y: 160,
      fontSize: "26px",
      maxCycles: 50,
      content: "Bye Bye"
    } );

    nextFrame();
  };

  function nextFrame () {
    th.helpers.requestAnimationFrame( loop );
  }

  function loop () {
    // Clear current frame
    ctx.clearRect( 0, 0, canvas.width, canvas.height )

    // Draw content
    red.tick();
    blue.tick();
    cycled.tick();

    // Next loop
    nextFrame();
  }

  global.onload = init;

})( this );
