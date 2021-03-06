(function( global ) {

  var Game = global.th.Klass.extend( {
    active: false,
    cycles: 0,
    loopFunction: null,
    ejecta: false,

    init: function ( options ) {
      this.set( options );
      this.findCanvas();
    },

    /**
     * @method findCanvas
     * Find the canvas in the document and cache the 2d context
     */
    findCanvas: function () {
      var canvas = document.getElementById( "canvas" ),
        ctx = canvas.getContext( "2d" );

      if ( !this.ejecta ) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      global.th.ctx = ctx;
      global.th.canvas = canvas;
    },

    /**
     * @method start
     * Set `active` to true and start loop
     */
    start: function () {
      this.active = true;
      this.loop();
    },

    /**
     * @method stop
     * Set `active` to false, next loop will not run
     */
    stop: function () {
      this.active = false;
    },

    /**
     * @method clear
     * Clear the context for the next draw cycle
     */
    clear: function () {
      //th.ctx.clearRect( 0, 0, th.canvas.width, th.canvas.height );
      th.canvas.width = th.canvas.width;
    },

    /**
     * @method loop
     * If active, count the cycles, clear canvas,
     * call callback then requiest next loop frame
     */
    loop: function () {
      if ( !this.active ) { return;}
      this.cycles += 1;
      this.clear();

      if ( this.loopFunction ) {
        this.loopFunction();
      }

      th.helpers.requestAnimationFrame( this.loop.bind( this ) );
    }
  } );

  global.th.Game = Game;

})( this );

