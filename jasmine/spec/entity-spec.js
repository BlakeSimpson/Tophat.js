describe( "Entity", function() {

  var entity, animation;

  beforeEach( function() {
    entity = new th.Entity();
    mockCTX();

    animation = new th.Entity( {
      animate: true,
      delay: 2,
      frames: 10
    } );
  } );

  afterEach( function() {
    cleanCTXMock();
  } );

  it( "should set its image correctly", function() {
    entity.setImage( "planet-express.png" );
    expect( entity.image ).toBe( "planet-express.png" );
  } );

  it( "should allow animation", function() {
    expect( animation.animate ).toBe( true );
    spyOn( animation, "_updateFrame" );

    animation.tick();
    expect( animation._updateFrame ).toHaveBeenCalled();
  } );

  it( "should update position", function() {
    expect( entity.update ).toBeFunction();

    spyOn( entity, "update" );
    entity.update( 100, 250 );

    expect( entity.update ).toHaveBeenCalledWith( 100, 250 );
  } );

  it( "should draw image", function() {
    expect( entity.draw ).toBeFunction();

    spyOn( entity, "_drawImage" );
    entity.setImage( "planet-express.png" );
    entity.tick();

    expect( entity._drawImage ).toHaveBeenCalled();
  } );

  it( "should draw shape", function() {
    expect( entity.draw ).toBeFunction();

    spyOn( entity, "_drawShape" );
    entity.set( {color: "#0f0"} );
    entity.tick();

    expect( entity._drawShape ).toHaveBeenCalled();
  } );


  it( "should not draw when not active", function() {
    spyOn( entity, "draw" );
    entity.set( {active: false} )
    entity.tick();

    expect( entity.draw ).not.toHaveBeenCalled();
  } );

} );
