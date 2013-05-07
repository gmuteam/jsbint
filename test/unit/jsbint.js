(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;

    exports.testIndent = function( test ){
        var result = jsbint('indent.js'),
            errorPos = [
                {line:3, character:7},
                {line:4, character:7},
                {line:7, character:11},
                {line:8, character:1}
            ];

        result = result.filter(function( error ) {
            return error.code === 'W015';
        });

        test.expect(9);

        test.equal(result.length, 4, 'ok');

        result.forEach(function( error, index ) {
            var expected = errorPos[index];
            test.equal(expected.line, error.line, 'ok');
            test.equal(expected.character, error.character, 'ok');
        });

        test.done();
    };
})();