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
            var files = glob.sync('./test/unit/**.js'),
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