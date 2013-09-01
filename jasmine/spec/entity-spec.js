describe( "Entity", function() {

  var entity, animation;

  beforeEach( function() {
    entity = new th.Entity();
    mockCTX();

    animation = new th.Entity( {
      delay: 2,
      frames: 10
    } );
  } );

  afterEach( function() {
    cleanCTXMock();
  } );

  it( "should set its image correctly", function() {
    entity.setImage( "planet-express.png" );
    expect( entity.image instanceof Image ).toBeTruthy();
  } );

  it( "should allow animation", function() {
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
    spyOn( entity, "_updateFrame" );
    entity.setImage( "planet-express.png" );
    entity.tick();

    expect( entity._drawImage ).toHaveBeenCalled();
    expect( entity._updateFrame ).not.toHaveBeenCalled();
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

describe( "Entity positions", function() {

  var entity;

  beforeEach( function() {
    entity = new th.Entity( {
      width: 10,
      height: 10,
      color: "#f00"
    } );

    th.canvas = {
      width: 100,
      height: 100
    };
  } );

  it( "should have a global", function() {
    expect( th.POSITIONS ).toBeTruthy();
  } );

  it( "should correctly positon center", function() {
    entity.position( th.POSITIONS.center );
    expect( entity.x ).toBe( 45 );
    expect( entity.y ).toBe( 45 );
  } );

  it( "should correctly positon center top", function() {
    entity.position( th.POSITIONS.centerTop );
    expect( entity.x ).toBe( 45 );
    expect( entity.y ).toBe( 0 );
  } );

  it( "should correctly positon center bottom", function() {
    entity.position( th.POSITIONS.centerBottom );
    expect( entity.x ).toBe( 45 );
    expect( entity.y ).toBe( 90 );
  } );

  it( "should correctly positon left center", function() {
    entity.position( th.POSITIONS.leftCenter );
    expect( entity.x ).toBe( 0 );
    expect( entity.y ).toBe( 45 );
  } );

  it( "should correctly positon right center", function() {
    entity.position( th.POSITIONS.rightCenter );
    expect( entity.x ).toBe( 90 );
    expect( entity.y ).toBe( 45 );
  } );

  it( "should correctly positon left top", function() {
    entity.position( th.POSITIONS.leftTop );
    expect( entity.x ).toBe( 0 );
    expect( entity.y ).toBe( 0 );
  } );

  it( "should correctly positon right top", function() {
    entity.position( th.POSITIONS.rightTop );
    expect( entity.x ).toBe( 90 );
    expect( entity.y ).toBe( 0 );
  } );

  it( "should correctly positon left bottom", function() {
    entity.position( th.POSITIONS.leftBottom );
    expect( entity.x ).toBe( 0 );
    expect( entity.y ).toBe( 90 );
  } );

  it( "should correctly positon right bottom", function() {
    entity.position( th.POSITIONS.rightBottom );
    expect( entity.x ).toBe( 90 );
    expect( entity.y ).toBe( 90 );
  } );
} );
