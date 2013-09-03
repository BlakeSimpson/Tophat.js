(function( global ) {

  var Text = global.th.Klass.extend( {
    active: true,
    content: "",
    color: "#000",
    fontSize: "18px",
    fontFamily: "send-serif",
    x: 0,
    y: 0,
    cyclesRun: 0,
    maxCycles: null,

    init: function ( options ) {
      this.set( options );
    },

    /**
     * @method tick
     * Action for every game loop
     */
    tick: function () {
      if ( !this.active ) { return;}

      this.draw();
      this._updateClock();
    },

    /**
     * @method draw
     * Draw current entity to canvas
     */
    draw: function () {
      var ctx = th.ctx;

      ctx.save();
      ctx.fillStyle = this.color;
      ctx.font = this.fontSize + " " + this.fontFamily;
      ctx.fillText( this.content, this.x, this.y );
      ctx.restore();
    },

    /**
     * @method update
     * @param {Number} x
     * @param {Number} y
     * Update the X/Y location attributes
     */
    update: function ( x, y ) {
      this.x = x;
      this.y = y;
    },

    /**
     * @method setContent
     * @param {String} content text
     * Set the `content` variable accordingly
     */
    setContent: function ( content ) {
      this.content = content;
    },

    /**
     * @method _updateClock
     * @private
     * Updates cycles and sets active to false
     * once limit is reached
     */
    _updateClock: function () {
      if ( this.maxCycles === null ) { return;}

      this.cyclesRun += 1;

      if ( this.cyclesRun >= this.maxCycles ) {
        this.active = false;
        return true;
      }

      return false;
    }
  } );

  global.th.Text = Text;

})( this );
