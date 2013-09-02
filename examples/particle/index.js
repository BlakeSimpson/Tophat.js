(function( global, undefined ) {

  var createParticle, callback, init, game, p,
    particles = [],
    total = 130;

  createParticle = function () {
    p = new th.Particle( {
      x: th.helpers.random( 0, th.canvas.width ),
      y: th.helpers.random( ( th.canvas.height - 10 ), th.canvas.height ),
      direction: {
        x: -2.5 + Math.random() * 5,
        y: -15 + Math.random() * 10
      },
      r: th.helpers.random( 155, 255 ),
      g: th.helpers.random( 0, 100 ),
      b: th.helpers.random( 0, 100 ),
      life: 2000,
      radius: 10
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

      // Override clear function to paint black and use fancy lighting
      clear: function () {
        var ctx = th.ctx;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, th.canvas.width, th.canvas.height);
        ctx.globalCompositeOperation = "lighter";
      }
    } );

    for( var i = 0; i < total; i++ ) {
      createParticle();
    }

    game.start();
    window.game = game;
  };

  window.onload = init;

})( this );
