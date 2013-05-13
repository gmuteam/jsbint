(function() {
    'use strict';

    var file = require('./file'),
        opts = file.loadConfig('test/samples/.jshintrc'),
        jsbint = require('../../src/lint/jsbint').JSBINT,
        globals;

    if( opts.globals ) {
        globals = opts.globals;
        delete opts.globals;
    }

    module.exports = function( filename ){

        var content = file.read( './test/samples/'+filename ),
            results = [];

        // Remove potential Unicode BOM.
        content = content.replace(/^\uFEFF/, "");


        opts.maxerr = 1000000;

        if ( !jsbint(content, opts, globals) ) {

            jsbint.errors.forEach(function (err) {

                if (err) {
                    results.push( err );
                }
            });
        }
        return results;
    }
})();