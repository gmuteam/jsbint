(function() {
    var a,
        b,
        c,
        i,
        v;

    if(a===1){

        // statement
    }

    if (a&&b||c) {

        // statement
    }

    for(i in a){

        // statement
    }

    for(i=0;i<1000;i++){

        // statement
    }

    while(v){

        // statement
    }

    switch(v) {
        case'':
            console.log();
            break;
        default:
            console.log();
            break;
    }

    try{
        console.log(1);
    }catch(ex){
        console.log(ex);
    }

    try {
        console.log(1);
    }
    catch ( ex ) {
        console.log(ex);
    }

    a = [1, 2, 3];
    a = [ ];

    a=b[0];
    a&&b;
    a||b;
    a>b;
    a<b;
    a>=b;
    a<=b;
    a==b;
    a===b;
    a!==b;
    a!=b;

    function myFun(a,b,c){
        console.log(1,2,3);
    }

    myFun(1, 2, 3);

    (function(a,b,c) {

        // statement
    })();

    (function( ){

        // statement;
    })();

    myFun( );

    myFun( {
        a:1,
        b:1
    } );

    myFun( function(){

    } );

    myFun( [1, 2, 3] );



    // 当括号当做组合来用时，内部不需要空格
    if ( !( i = true ) ) {

    }

    v && ( b, c );

    a( ( b, c ), 4 );
});

(function() {
    var obj = [ 1, 2, 3 ];

    console.log( obj[ 0 ] );
})();

// 以下都是正确的
(function() {

    console.log('hello world');

    // 方法结束与右括号之间没有空格
    console.log( 'abcdefg', function() {

    });

    console.log( 'abcdefg', {
        a: 3
    });

    console.log(function() {

    }, 2 );


})();