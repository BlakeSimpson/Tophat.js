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
  window.oldCTX = window.th.ctx;

  window.th.ctx = {
    drawImage: function() {},
    beginPath: function() {},
    fillRect: function() {},
    fillStyle: function() {},
    fillText: function() {},
    save: function() {},
    restore: function() {}
  };
};

function cleanCTXMock () {
  window.th.ctx = window.oldCTX;
}
