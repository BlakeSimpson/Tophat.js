describe( "Text", function() {

  var text;

  beforeEach( function() {
    entity = new th.Text();
    mockCTX();
  } );

  afterEach( function() {
    cleanCTXMock();
  } );

  it( "should set content", function() {
    expect( entity.content ).toEqual( "" );
    entity.setContent( "Planet Express" );
    expect( entity.content ).toEqual( "Planet Express" );
  } );

  it( "should update position", function() {
    expect( entity.update ).toBeFunction();

    spyOn( entity, "update" );
    entity.update( 101, 251 );

    expect( entity.update ).toHaveBeenCalledWith( 101, 251 );
  } );

  it( "should draw text", function() {
    expect( entity.draw ).toBeFunction();

    spyOn( entity, "draw" );
    entity.tick();

    expect( entity.draw ).toHaveBeenCalled();
  } );

  it( "should set cycles", function() {
    var cycleText = new th.Text( {
      maxCycles: 2
    } );

    cycleText.tick();
    expect( cycleText.active ).toBe( true );

    cycleText.tick();
    expect( cycleText.active ).toBe( false );
  } );

} );
