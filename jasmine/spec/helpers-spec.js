describe( "Helpers", function() {
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

  it( "clone()", function() {
    expect( helpers.clone ).toBeFunction();

    var a = {
      x: {
        foo: "bar",
        grass: "green"
      },
      y: 1
    };

    var b = helpers.clone( a );

    expect( b.y ).toBe( 1 );
    expect( b.x.foo ).toBe( "bar" );

    b[ "z" ] = "new";
    delete b.x;

    expect( a.z ).toBeUndefined();
    expect( b.x ).toBeUndefined();
    expect( a.x ).toBeTruthy();
  } );

  it( "random()", function() {
    expect( helpers.random ).toBeFunction();

    expect( helpers.random( 1, 1 ) ).toEqual( 1 );
    expect( helpers.random( 5, 10 ) ).toBeInRange( 5, 10 );
  } );

  it( "randomColor()", function() {
    expect( helpers.randomColor ).toBeFunction();
    expect( helpers.randomColor() ).toMatch( /^#[0-9a-f]{3,6}$/i );
  } );

} );
