(function(){
    'use strict';

    var file = require('../util/file'),
        jsbint = require('../util/jsbint'),
        debug = require('../util/helper').debug;

    // 测试缩进
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

        test.equal(result.length, errorPos.length, 'ok');

        result.forEach(function( error, index ) {
            var expected = errorPos[index];
            test.equal(expected.line, error.line, 'ok');
            test.equal(expected.character, error.character, 'ok');
        });

        test.done();
    };

    // 测试分号
    exports.testSemicolon = function( test ){
        var result = jsbint('semicolon.js'),
            errorPos = [
                {line:4, character:10},
                {line:6, character:19},
                {line:8, character:19},
                {line:11, character:23},
                {line:15, character:6},
                {line:31, character:6}
            ];

        result = result.filter(function( error ) {
            return error.code === 'W033' || error.code === 'W032';
        });

        test.expect(13);

        test.equal(result.length, errorPos.length, 'ok');

        result.forEach(function( error, index ) {
            var expected = errorPos[index];
            test.equal(expected.line, error.line, 'ok');
            test.equal(expected.character, error.character, 'ok');
        });

        test.done();
    };

    // 测试大括号， 主要是对if, for, while的检测
    exports.testBrace = function( test ){
        var result = jsbint('brace.js'),
            errorPos = [
                {line:6, character:13},
                {line:8, character:16},
                {line:10, character:16}
            ];

        result = result.filter(function( error ) {
            return error.code === 'W116';
        });

        test.expect(7);

        test.equal(result.length, errorPos.length, 'ok');

        result.forEach(function( error, index ) {
            var expected = errorPos[index];
            test.equal(expected.line, error.line, 'ok');
            test.equal(expected.character, error.character, 'ok');
        });

        test.done();
    };

    // 测试var 一个作用域下只允许一个var, 且带默认值的总是在不带默认值的前面
    exports.testVar = function( test ){
        var result = jsbint('var.js'),
            errorPos = [
                {line:3, character:9},
                {line:4, character:9},
                {line:7, character:13},
                {line:10, character:14},
                {line:10, character:21},
                {line:26, character:15}
            ];
        // debug(result, true);

        result = result.filter(function( error ) {
            return ~['W081', 'W500', 'W501'].indexOf( error.code );
        });
        test.expect(13);

        test.equal(result.length, errorPos.length, 'ok');

        result.forEach(function( error, index ) {
            var expected = errorPos[index];
            test.equal(expected.line, error.line, 'ok');
            test.equal(expected.character, error.character, 'ok');
        });

        test.done();
    };

    // 测试字符连接
    exports.testString = function( test ){
        var result = jsbint('longstring.js'),
            errorPos = [
                {line:10, character:74},
                {line:11, character:70},
                {line:12, character:74},
                {line:13, character:68},
                {line:14, character:75}
            ];

        // debug(result, true);

        result = result.filter(function( error ) {
            return ~['W043'].indexOf( error.code );
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