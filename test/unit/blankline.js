(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // 测试命名
    exports.testNaming = function( test ){
        var result = jsbint('blankline.js'),
            errorPos = [
                {line:4, character:5},
                {line:6, character:5},
                {line:9, character:5}
            ];

        // debug(result, true);
        
        result = result.filter(function( error ) {
            return ~['W503'].indexOf( error.code );
        });

        // debug(result, true);

        /*result.forEach(function(error){
            console.log("{line:"+error.line+", character:"+error.character+"},");
        });
        debug(true);*/

        test.expect(errorPos.length*2+1);

        test.equal(result.length, errorPos.length, 'ok');

        result.forEach(function( error, index ) {
            var expected = errorPos[index];
            test.equal(expected.line, error.line, 'ok');
            test.equal(expected.character, error.character, 'ok');
        });

        test.done();
    }
})();