beforeEach( function() {

  var matchers = {
    toBeFunction: function() {
      return typeof this.actual === "function";
    },

    toBeInRange: function( start, end ) {
      return this.actual >= start && this.actual <= end;
    }
  };

  this.addMatchers(matchers);

} );

function mockCTX () {
  window.oldCTX = window.ctx;

  window.ctx = {
    drawImage: function() {},
    beginPath: function() {},
    fillRect: function() {},
    fillStyle: function() {}
  };
};

function cleanCTXMock () {
  window.ctx = window.oldCTX;
}
