(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // 测试块状代码
    exports.testDoubleIndent = function( test ){
        var result = jsbint('block.js'),
            errorPos = [
                {line:29, character:9},
                {line:33, character:9},
                {line:55, character:9},
                {line:57, character:5},
                {line:58, character:9},
                {line:71, character:22},
                {line:74, character:20},
                {line:88, character:9},
                {line:89, character:9},
                {line:93, character:5},
                {line:93, character:5},
                {line:94, character:5}
            ];

        //debug(result, true);
        
        result = result.filter(function( error ) {
            return ~['W503', 'W504', 'W014', 'W086', 'W015'].indexOf( error.code );
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