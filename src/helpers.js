(function( global ) {

  var helpers = {
    requestAnimationFrame: function ( callback ) {
      var func = (
          window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( cb ) {
            window.setTimeout( cb, 1000 / 60 );
          }
      );

      return func( callback );
    },

    collision: function ( entityA, entityB ) {
      if ( typeof entityA === "undefined" ||
        typeof entityB === "undefined" ||
        !entityA.active ||
        !entityB.active ) {

        return false;
      }

      return entityA.x < ( entityB.x + entityB.width ) &&
        ( entityA.x + entityA.width ) > entityB.x &&
        entityA.y < ( entityB.y + entityB.height ) &&
        ( entityA.y + entityA.height ) > entityB.y;
    },

    clone: function ( obj ) {
      // Handle the 3 simple types, and null or undefined
      if ( null === obj || "object" !== typeof obj ) { return obj;}

      // Handle Date
      if (obj instanceof Date) {
          var copy = new Date();
          copy.setTime( obj.getTime() );
          return copy;
      }

      // Handle Array
      if (obj instanceof Array) {
          var copy = [];

          for ( var i = 0, len = obj.length; i < len; i++ ) {
              copy[ i ] = clone( obj[ i ] );
          }

          return copy;
      }

      // Handle Object
      if (obj instanceof Object) {
        var copy = {};

        for ( var attr in obj ) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = this.clone(obj[attr]);
          }
        }

        return copy;
      }
    },

    random: function ( min, max ) {
      return ~~( Math.random() * ( max - min + 1 ) ) + min;
    },

    randomColor: function () {
      return "#" + ( Math.random() * 0xFFFFFF << 0 ).toString( 16 );
    }
  };

  global.th.helpers = helpers;

})( this );
