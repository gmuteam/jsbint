(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;


    // 测试空格
    exports.testWhite = function( test ){
        var result = jsbint('white.js'),
            errorPos = [
                {line:8, character:7},
                {line:8, character:8},
                {line:8, character:9},
                {line:8, character:12},
                {line:8, character:13},
                {line:8, character:14},
                {line:13, character:9},
                {line:13, character:10},
                {line:13, character:12},
                {line:13, character:13},
                {line:13, character:15},
                {line:13, character:16},
                {line:18, character:8},
                {line:18, character:9},
                {line:18, character:15},
                {line:18, character:16},
                {line:23, character:8},
                {line:23, character:9},
                {line:23, character:10},
                {line:23, character:11},
                {line:23, character:14},
                {line:23, character:15},
                {line:23, character:20},
                {line:23, character:23},
                {line:23, character:24},
                {line:28, character:10},
                {line:28, character:11},
                {line:28, character:12},
                {line:28, character:13},
                {line:33, character:11},
                {line:33, character:12},
                {line:33, character:13},
                {line:34, character:13},
                {line:42, character:8},
                {line:43, character:21},
                {line:43, character:22},
                {line:44, character:6},
                {line:44, character:11},
                {line:44, character:12},
                {line:44, character:14},
                {line:44, character:15},
                {line:45, character:21},
                {line:45, character:23},
                {line:49, character:21},
                {line:49, character:22},
                {line:52, character:21},
                {line:52, character:23},
                {line:55, character:10},
                {line:55, character:17},
                {line:56, character:10},
                {line:58, character:6},
                {line:58, character:7},
                {line:58, character:9},
                {line:58, character:10},
                {line:59, character:6},
                {line:59, character:8},
                {line:60, character:6},
                {line:60, character:8},
                {line:61, character:6},
                {line:61, character:7},
                {line:62, character:6},
                {line:62, character:7},
                {line:63, character:6},
                {line:63, character:8},
                {line:64, character:6},
                {line:64, character:8},
                {line:65, character:6},
                {line:65, character:8},
                {line:66, character:6},
                {line:66, character:9},
                {line:67, character:6},
                {line:67, character:9},
                {line:68, character:6},
                {line:68, character:8},
                {line:70, character:20},
                {line:70, character:22},
                {line:70, character:24},
                {line:70, character:25},
                {line:70, character:26},
                {line:71, character:23},
                {line:71, character:25},
                {line:71, character:21},
                {line:71, character:26},
                {line:74, character:11},
                {line:74, character:18},
                {line:76, character:15},
                {line:76, character:17},
                {line:76, character:19},
                {line:76, character:20},
                {line:81, character:15},
                {line:81, character:17},
                {line:86, character:11},
                {line:89, character:11},
                {line:90, character:11},
                {line:88, character:11},
                {line:91, character:6},
                {line:93, character:22},
                {line:93, character:11},
                {line:95, character:6},
                {line:97, character:13},
                {line:97, character:20},
                {line:97, character:11},
                {line:97, character:21},
                {line:102, character:12},
                {line:102, character:21},
                {line:106, character:11},
                {line:106, character:16},
                {line:108, character:9},
                {line:108, character:14}
            ];

        // debug(result, true);
        
        result = result.filter(function( error ) {
            return ~['W011', 'W013'].indexOf( error.code );
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