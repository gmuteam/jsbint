(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // void with eavl
    exports.testVoidWithEval = function( test ){
        var result = jsbint('voidwitheval.js'),
            errorPos = [
                {line:1, character:1},
                {line:5, character:1},
                {line:7, character:1},
                {line:9, character:1}
            ];

        // debug(result, true);
        
        result = result.filter(function( error ) {
            return ~['W061', 'W066', 'W085', 'W509'].indexOf( error.code );
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