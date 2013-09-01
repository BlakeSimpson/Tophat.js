describe( "Game", function() {

  var game;

  beforeEach( function() {
    mockCTX();
    game = new th.Game();
  } );

  afterEach( function() {
    cleanCTXMock();
  } );

  it( "should have core methods", function() {
    expect( game.loop ).toBeFunction();
    expect( game.start ).toBeFunction();
    expect( game.stop ).toBeFunction();
  } );

  it( "should call loop function", function() {
    var called = false;
    var func = function() {
      called = true;
    };

    expect( called ).toBe( false );
    game.set({ loopFunction: func });
    game.start();
    game.loop();
    game.stop();
    expect( called ).toBe( true );
  } );

  it( "start should activate and loop", function() {
    spyOn( game, "loop" );
    expect( game.active ).toBe( false );
    game.start();
    expect( game.active ).toBe( true );
    expect( game.loop ).toHaveBeenCalled();
  } );

  it( "stop should deactivate", function() {
    game.start();
    expect( game.active ).toBe( true );
    game.stop();
    expect( game.active ).toBe( false );
  } );

} );
