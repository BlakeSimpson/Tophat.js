describe( "Klass", function() {

  it( "should be available", function() {
    expect( th ).toBeDefined();
    expect( th.Klass ).toBeDefined();
  } );

  it( "should have extend method", function() {
    expect( th.Klass.extend ).toBeFunction();
  } );

  it( "should allow instantiation", function() {
    var inst = new th.Klass();
    expect( inst instanceof th.Klass ).toBeTruthy();
  } );

  it( "should call `init` when initiated", function() {
    var Person = th.Klass.extend( {
      init: function( name ) {
        this.name = name;
      }
    } );

    var fry = new Person( "Fry" );

    expect( fry.name ).toBe( "Fry" );
  } );

  it( "should override default options through inheritance", function() {
    var Person = th.Klass.extend( {
      name: "Joe",
      age: 100
    } );

    var Fry = Person.extend( {
      name: "Fry"
    } );

    var joe = new Person();
    var fry = new Fry();

    expect( joe.name ).toBe( "Joe" );
    expect( fry.name ).toBe( "Fry" );
  } );

  it( "should `set` options", function() {
    var Person = th.Klass.extend( {
      init: function ( options ) {
        this.name = "";
        this.eyes = 2;
        this.height = 120;

        this.set( options );
      }
    } );

    var lila = new Person( {
      name: "Lila",
      eyes: 1,
      random: "xyz" // A non class defined property
    } );

    expect( lila.name ).toBe( "Lila" );
    expect( lila.eyes ).toBe( 1 );
    expect( lila.height ).toBe( 120 );
    expect( lila.random ).not.toBeDefined();
  } );

  it( "should allow sub classing", function() {
    var Mammal = th.Klass.extend( {
      breath: function() {}
    } );

    var Human = Mammal.extend( {
      walk: function() {}
    } );

    var fry = new Human();

    expect( fry.breath ).toBeFunction();
    expect( fry.walk ).toBeFunction();
  } );

} );
