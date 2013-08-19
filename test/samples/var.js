(function() {
    var a = 1;
    var b = 2;
    var c = 3;

    if( a ) {
        var d = 4;
    }

    for( var i = 0, len = 10; i<len; i++ ) {

    }

    (function(){
        var e;

        console.log( e );
    })();

})();

//以下是错误的，带赋值的应该提前申明
(function() {
    var a,
        b,
        c = 20;

    console.log(a, b, c);
})();

//todo var必须在顶部
(function( undefined ){
    if( undefined ) {
        return ;
    }

    var a,
        b,
        c;
})();