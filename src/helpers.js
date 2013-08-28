(function( global ) {

  var helpers = {
    requestAnimationFrame: function() {
      return (
          window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ) {
              window.setTimeout( callback, 1000 / 60 );
          }
      );
    },

    collision: function( entityA, entityB ) {
      if ( typeof entityA === "undefined"
          || typeof entityB === "undefined"
          || !entityA.active
          || !entityB.active ) {
        return false;
      }

      return entityA.x < ( entityB.x + entityB.width ) &&
        ( entityA.x + entityA.width ) > entityB.x &&
        entityA.y < ( entityB.y + entityB.height ) &&
        ( entityA.y + entityA.height ) > entityB.y;
    },

    random: function( min, max ) {
      return ~~( Math.random() * ( max - min + 1 ) ) + min;
    }
  };

  global.th.helpers = helpers;

})( this );
