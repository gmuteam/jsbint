(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // 测试命名
    exports.testNaming = function( test ){
        var result = jsbint('naming.js'),
            errorPos = [
                {line:2, character:0},
                {line:3, character:0},
                {line:10, character:5},
                {line:11, character:5},
                {line:12, character:12},
                {line:12, character:5},
                {line:18, character:14}
            ];

        // debug(result, true);
        
        result = result.filter(function( error ) {
            return ~['W106', 'W505', 'W506'].indexOf( error.code );
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