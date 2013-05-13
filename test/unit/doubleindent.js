(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // 测试双倍缩进
    exports.testDoubleIndent = function( test ){
        var result = jsbint('doubleindent.js'),
            errorPos = [
                {line:5, character:9},
                {line:8, character:13},
                {line:12, character:9},
                {line:15, character:9},
                {line:20, character:9},
                {line:25, character:5}
            ];

        // debug(result, true);

        result = result.filter(function( error ) {
            return ~['W015'].indexOf( error.code );
        });

        // debug(result, true);

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