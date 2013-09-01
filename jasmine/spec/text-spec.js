describe( "Text", function() {

  var text;

  beforeEach( function() {
    text = new th.Text();
    mockCTX();
  } );

  afterEach( function() {
    cleanCTXMock();
  } );

  it( "should set content", function() {
    expect( text.content ).toEqual( "" );
    text.setContent( "Planet Express" );
    expect( text.content ).toEqual( "Planet Express" );
  } );

  it( "should update position", function() {
    expect( text.update ).toBeFunction();

    spyOn( text, "update" );
    text.update( 101, 251 );

    expect( text.update ).toHaveBeenCalledWith( 101, 251 );
  } );

  it( "should draw text", function() {
    expect( text.draw ).toBeFunction();

    spyOn( text, "draw" );
    text.tick();

    expect( text.draw ).toHaveBeenCalled();
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
