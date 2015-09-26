#!/usr/bin/env node

'use strict';

var program = require('commander');
var packageJSON = require('./package.json');
var baidu = require('./lib/baidu');
var restore = require('./lib/restore')

program
    .command('gen [longurl]')
    .description('生成短连接')
    .option("--baidu", "使用百度短连接服务 http://dwz.cn/")
    .action(function(longurl, options) {
        var create = options.baidu || baidu;
        create(longurl, function(err, shortlink) {
            if (err) {
                console.log(err);
                return
            }
            console.log(shortlink)
        });
    });


program
    .command('restore [shorturl]')
    .description('还原短连接到长链接')
    .action(function(shorturl, options) {
        restore(shorturl, function(err, longurl){
            if (err) {
                console.log(err);
                return;
            }
            console.log(longurl)
        })
    });

program.parse(process.argv);
