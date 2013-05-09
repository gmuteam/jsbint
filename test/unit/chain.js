(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // 测试链式函数断行问题。
    exports.testChain = function( test ){
        var result = jsbint('chain.js'),
            errorPos = [
                {line:18, character:25},
                {line:33, character:28},
                {line:42, character:9},
                {line:43, character:9},
                {line:44, character:9}
            ];

        result = result.filter(function( error ) {
            return ~['W015', 'W086'].indexOf( error.code );
        });

        test.expect(11);

        test.equal(result.length, errorPos.length, 'ok');

        result.forEach(function( error, index ) {
            var expected = errorPos[index];
            test.equal(expected.line, error.line, 'ok');
            test.equal(expected.character, error.character, 'ok');
        });

        test.done();
    }
})();