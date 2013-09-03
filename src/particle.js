(function( global ) {

  var Particle = global.th.Klass.extend( {
    active: true,
    radius: 10,
    life: 20,

    //Color
    r: ( ( Math.random() * 255 ) << 0 ),
    g: ( ( Math.random() * 255 ) << 0 ),
    b: ( ( Math.random() * 255 ) << 0 ),

    // Location
    x: 0,
    y: 0,

    direction: {
      x: -2.5 + Math.random() * 5,
      y: -15 + Math.random() * 10
    },

    init: function( options ) {
      this.set( options );

      this._radius = this.radius + Math.random() * 20;
      this._life = this.life + Math.random() * 10;
      this.lifeRemaining = this.life;
    },

    /**
     * @method tick
     * Action for every game loop
     */
    tick: function () {
      if ( !this.active ) { return;}

      this.draw();

      if ( this.lifeRemaining < 0 || this._radius < 0 ) {
        this.active = false;
        return false;
      } else {
        return true;
      }
    },

    /**
     * @method draw
     * Draw current particle to canvas
     */
    draw: function() {
      var ctx = th.ctx;

      ctx.beginPath();
			// Changing opacity according to the life.
			// Opacity goes to 0 at the end of life of a particle
			this.opacity = ~~( this.lifeRemaining / this._life * 100 ) / 100;

			// A gradient instead of white fill
			var gradient = ctx.createRadialGradient( this.x, this.y, 0, this.x, this.y, this._radius ),
          rgba = this._rgba( this.r, this.g, this.b, this.opacity );

			gradient.addColorStop( 0, rgba );
			gradient.addColorStop( 0.5, rgba );
			gradient.addColorStop( 1, this._rgba( this.r, this.g, this.b, 0 ) );

      ctx.fillStyle = gradient;
			ctx.arc( this.x, this.y, this._radius, Math.PI*2, false );
			ctx.fill();

			//lets move the particles
			this.lifeRemaining--;
			this._radius--;
			this.x += this.direction.x;
			this.y += this.direction.y;
    },

    /**
     * @method update
     * @param {Number} x
     * @param {Number} y
     * Update the X/Y location attributes
     */
    update: function ( x, y ) {
      this.x = x || 0;
      this.y = y || 0;
    },

    /**
     * @method _rgba
     * @private
     * @param {Number} R
     * @param {Number} G
     * @param {Number} B
     * @param {Number} A
     * @returns {String} formatted RGBA
     * Return a formatted RGBA string
     */
    _rgba: function( r, g, b, a ) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    }
  } );

  global.th.Particle = Particle;

})( this );
