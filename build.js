#!/usr/bin/env node
(function () {
    'use strict';
require("nodeunit").reporters.minimal
    var cli = require('commander'),
        glob = require('glob');

    cli
        .command('test')
        .description('测试代码')
        .action(function() {
            var i = 0,
                len = cli.args.length,
                files = [],
                nodeunit;

            //如果node build dist后面还带其他参数，则只收集指定的文件。
            for( ; i < len-1; i++ ) {
                files.push( cli.args[i].replace(/(\.|\$\-)/, '\\$1') + '*.js');
            }

            if(!files.length) {
                files = ['**.js'];
            }

            files = files
                    .map(function( item ){
                        return glob.sync('./test/unit/'+item);
                    })

                    // 摊平数组
                    .reduce(function (prefix, now) {
                        return prefix.concat(now);
                    })

                    //  去重
                    .filter(function(a, i, all){
                        return all.indexOf(a) === i;
                    });

            nodeunit = require("nodeunit").reporters.minimal;

            console.log("Running tests...", "\n");
            nodeunit.run(files, null, function (err) {
                
                if( err ) {
                    console.log( err );
                    process.exit(1);
                }
            });
        });

    cli.parse(process.argv);

    // 如果什么都没有输入就显示帮助
    if (!cli.args.length) {
        cli.outputHelp();
        process.exit(0);
    }

})();