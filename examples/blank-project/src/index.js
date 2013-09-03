(function( global, undefined ) {

  // Set this to `true` if inside an Ejecta XCode project
  var EJECTA = false;

  var createParticle, callback, init, game, p,
    particles = [],
    total = 100;

  createParticle = function () {
    p = new th.Particle( {
      x: th.helpers.random( 0, th.canvas.width ),
      y: th.helpers.random( 0, th.canvas.height ),
      direction: {
        x: -2 + Math.random() * 5,
        y: -2 + Math.random() * 5
      },
      r: th.helpers.random( 0, 255 ),
      g: th.helpers.random( 0, 255 ),
      b: th.helpers.random( 0, 255 ),
      life: 500000,
      radius: 15
    } );

    particles.push( p );
  };

  callback = function () {
    for( var i = 0; i < particles.length; i++ ) {
      var active = particles[ i ].tick();

      if ( !active ) {
        particles[ i ] = undefined;
        particles.splice( i, 1 );
        createParticle();
      }
    }
  };

  init = function () {
    game = new th.Game( {
      loopFunction: callback,
      ejecta: EJECTA,

      // Override clear function to paint black and use fancy lighting
      clear: function () {
        var ctx = th.ctx;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "black";
        ctx.fillRect( 0, 0, th.canvas.width, th.canvas.height );
        ctx.globalCompositeOperation = "lighter";
      }
    } );

    for( var i = 0; i < total; i++ ) {
      createParticle();
    }

    game.start();
  };

  // In Ejecta there is no document to wait on loading for
  if ( EJECTA ) {
    init();
  } else {
    window.onload = init;
  }

})( this );
