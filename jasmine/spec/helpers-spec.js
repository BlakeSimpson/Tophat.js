describe( "helpers", function() {
  var helpers = th.helpers;

  it( "requestAnimFrame()", function() {
    expect( helpers.requestAnimationFrame ).toBeFunction();
  } );

  it( "collision()", function() {
    expect( helpers.collision ).toBeFunction();

    var a = {
      active: true,
      width: 10,
      height: 10,
      x: 1,
      y: 1
    };

    var b = {
      active: true,
      width: 10,
      height: 10,
      x: 9,
      y: 9
    };

    expect( helpers.collision( a, b ) ).toBe( true );

    b.active = false;
    expect( helpers.collision( a, b ) ).toBe( false );

    b.active = true;
    b.x = 12;
    b.y = 12;
    expect( helpers.collision( a, b ) ).toBe( false );
  } );

  it( "random()", function() {
    expect( helpers.random ).toBeFunction();

    expect( helpers.random( 1, 1 ) ).toEqual( 1 );
    expect( helpers.random( 5, 10 ) ).toBeInRange( 5, 10 );
  } );

} );
