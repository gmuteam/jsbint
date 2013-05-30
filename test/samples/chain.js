(function() {

    // 函数链式调用
    var $item = $( '<div></div>' ).attr( 'id', 'test' )
            .attr( 'id', 'what ever' )
            .addClass( 'className' )
            .html( 'xxxx' );

    $item.html();
})();

(function(){
    
    // 如果某个方法的参数中带有匿名方法，则这个方法的调用之前应当换行。
    var $item = $( '<div></div>' )
            .attr( 'id', function() {
                doSomething();
            } ).addClass('className')
            .html( 'xxxx' );

    $item.html();

})();

(function(){
    // 非赋值语句
    $( '<div></div>' ).attr( 'id', 'test' )
            .attr( 'id', 'what ever' )
            .addClass( 'className' )
            .html( 'xxxx' );
            
    // 错误的示例
    $( '<div></div>' ).attr( 'id', function() {
                doSomething();
            } )
            .attr( 'id', 'what ever' )
            .addClass( 'className' )
            .html( 'xxxx' );

    //以下缩进少了
    $( '<div></div>' ).attr( 'id', 'test' )
        .attr( 'id', 'what ever' )
        .addClass( 'className' )
        .html( 'xxxx' );
})();

(function() {
    $.ui.test({}).define( 'button', {
        a: 3,
        b: 4,

        // test
        init: function() {

        },

        destroy: function() {

        }
    } );

    $.ui.button.register(function() {
        var a = 0, 
            b = 2;

        console.log( a, b );
    });

    $.ui.test({})
            .define( 'button', {
                a: 3,
                b: 4,
                
                // test
                init: function() {

                },

                destroy: function() {

                }
            } );
})();