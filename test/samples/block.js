(function() {
    
    function myFunc() {
        var v1 = 1,
            v2 = 2,
            v3 = 3;

        if ( v1 === 1 ) {

            // statement
        }

        while ( v2 ) {

            // statement
        }

        if ( v3 ) {

            // statement
        }
    }

    // 错误
    function myFunc() {
        var v1 = 1,
            v2 = 2,
            v3 = 3;
        if ( v1 === 1 ) {

            // statement
        }
        while ( v2 ) {

            // statement
        }

    }

})();

(function() {
    var a = 1;

    if ( a === 1 ) {

        // statement
    } else if ( a === 2 ) {

        // statement
    }

    // 错误
    if ( a === 1 ) {
        // statement
    }
    else if ( a === 2 ) {
        // statement
    }
})();

(function() {
    var a = 1,
        obj = {};

    if ( a === 1 ) {

        // statement
    }

    if ( a === 1 ) { console.log(1); }

    //错误
    for ( a in obj )
    {
        
        //statement1
        //statement2
    }

})();

(function() {
    var a;

    switch ( a ) {
        case '1':
        console.log( 1 );
        break;

        case '2':
            break;
    default:
    break;
    }
});