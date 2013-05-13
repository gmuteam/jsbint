(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // 测试注释
    exports.testComment = function( test ){
        var result = jsbint('comment.js'),
            errorPos = [
                {line:11, character:7},
                {line:11, character:5},
                {line:12, character:17},
                {line:12, character:15},
                {line:13, character:1},
                {line:17, character:11},
                {line:17, character:9},
                {line:0, character:0}
            ];

        // debug(result, true);
        
        result = result.filter(function( error ) {
            return ~['W013', 'W015', 'W503', 'W508'].indexOf( error.code );
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