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

    cloneObject: function ( source ) {
      var obj = {};

      if ( source ) {
        for ( var prop in source ) {
          obj[ prop ] = source[ prop ];
        }
      }

      return obj;
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
