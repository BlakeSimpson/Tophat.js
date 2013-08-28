(function( global ) {

  var Entity = global.th.Klass.extend( {
    init: function ( options ) {
      this.active = true;
      this.color = null;
      this.image = null;
      this.width = 0;
      this.height = 0;
      this.x = 0;
      this.y = 0;

      // Animation attributes
      this.animate = false;
      this.delay = 1;
      this.frames = 1;
      this.currentFrame = 0;
      this.currentDelay = 0;
      this.loop = true;

      this.set( options );
    },

    /**
     * @method tick
     * Action for every game loop
     */
    tick: function () {
      if ( !this.active ) { return;}

      this.draw();

      if ( this.frames > 1 ) {
        this._updateFrame();
      }
    },

    /**
     * @method draw
     * Draw current entity to canvas
     */
    draw: function () {
      var ctx = window.ctx;

      if ( this.color ) {
        this._drawShape( ctx );
      } else {
        this._drawImage( ctx );
      }
    },

    /**
     * @method update
     * @param {Number} x
     * @param {Number} y
     * Update the X/Y location attributes
     */
    update: function( x, y ) {
      this.x = x;
      this.y = y;
    },

    /**
     * @method setImage
     * @param {String} image path
     */
    setImage: function ( path ) {
      this.image = ( this.image instanceof Image ) ? this.image : new Image();
      this.image.src = path;
    },

    /**
     * @method _drawImage
     * @private
     * @param {Object} canvas context
     * Draw the image to the canvas taking into
     * account possible clipping for animation
     */
    _drawImage: function ( ctx ) {
      var left = this.currentFrame * this.width;

      ctx.drawImage( this.image, // Image path
                     left, // sx - X coord to start clipping
                     0, // sy - Y coord to start clipping
                     this.width, // sw - clipping width
                     this.height, // sh - clipping height
                     this.x, // X coord
                     this.y, // Y coord
                     this.width, // width of image
                     this.height // height of image
                   );
    },

    /**
     * @method _drawShape
     * @private
     * @param {Object} canvas context
     * Draw a rectangle to the canvas in the given color
     */
    _drawShape: function ( ctx ) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect( this.x, this.y, this.width, this.height );
      ctx.closePath();
    },

    /**
     * @method _updateFrame
     * @private
     * Move the current animation frame forward
     */
    _updateFrame: function () {
      this.currentDelay += 1;

      if ( this.currentDelay !== this.delay ) { return;}

      if ( this.currentFrame === ( this.frames - 1) ) {
        if ( this.loop ) {
          this.currentFrame = 0;
        } else {
          this.active = false;
        }
      } else {
        this.currentFrame += 1;
      }

      this.currentDelay = 0;
    }
  } );

  global.th.Entity = Entity;

})( this );
