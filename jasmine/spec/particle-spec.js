describe( "Particle", function () {

  var particle;

  beforeEach( function() {
    particle = new th.Particle();
    mockCTX();
  } );

  afterEach( function() {
    cleanCTXMock();
  } );

  it( "should draw on tick", function() {
    spyOn( particle, "draw" );

    particle.tick();
    expect( particle.draw ).toHaveBeenCalled();
  } );

  it( "tick() should return false when dead", function() {
    particle.lifeRemaining = 1;
    expect( particle.tick() ).toBe( true );
    expect( particle.tick() ).toBe( false );
  } );

  it( "tick() should return false when no radius", function() {
    particle._radius = 1;
    expect( particle.tick() ).toBe( true );
    expect( particle.tick() ).toBe( false );
  } );


  it( "should format RGBA", function() {
    expect( particle._rgba( 1, 2, 3, 0 ) ).toBe( "rgba(1, 2, 3, 0)" );
  } );

} );
