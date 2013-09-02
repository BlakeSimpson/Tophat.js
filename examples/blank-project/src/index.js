(function( global ) {

  var callback, init, game,
    maxCurves = 70,
    p = [0,0, 0,0, 0,0, 0,0],
    curves = [],
    w, h, w2, h2;

  callback = function () {
    var ctx = th.ctx;

    for( var i = 0; i < maxCurves; i++ ) {
      var curve = curves[i];
      curve.current += curve.inc;
      for( var j = 0; j < p.length; j+=2 ) {
        var a = Math.sin( curve.current * (j+3) * 373 * 0.0001 );
        var b = Math.sin( curve.current * (j+5) * 927 * 0.0002 );
        var c = Math.sin( curve.current * (j+5) * 573 * 0.0001 );
        p[j] = (a * a * b + c * a + b) * w * c + w2;
        p[j+1] = (a * b * b + c - a * b *c) * h2 + h2;
      }

      ctx.beginPath();
      ctx.moveTo( p[0], p[1] );
      ctx.bezierCurveTo( p[2], p[3], p[4], p[5], p[6], p[7] );
      ctx.strokeStyle = curve.color;
      ctx.stroke();
    }
  };

  init = function () {
    game = new th.Game( {
      loopFunction: callback
    } );

    for( var i = 0; i < 200; i++ ) {
        curves.push({
            current: Math.random() * 1000,
            inc: Math.random() * 0.005 + 0.002,
            color: th.helpers.randomColor()
        });
    }

    w = th.canvas.width;
    h = th.canvas.height;
    w2 = ( w / 2 );
    h2 = ( h / 2 );

    document.addEventListener( 'touchmove', function( ev ) {
        var x = ev.touches[0].pageX,
          y = ev.touches[0].pageY;

        document.querySelector( ".x" ).innerHTML = x;
        document.querySelector( ".y" ).innerHTML = y;

        th.ctx.lineWidth = ( x / w ) * 1;
        maxCurves = Math.floor( ( y / h ) * curves.length );

        // Allows the move event to kep on firing on android
        if( navigator.userAgent.match(/Android/i) ) {
          ev.preventDefault();
        }
    }, false );

    game.start();
    //game.stop();
    window.game = game;
  };

  window.onload = init;

})( this );
