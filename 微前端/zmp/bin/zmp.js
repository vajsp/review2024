#!/usr/bin/env node
console.log('zmp123');
// 处理命令行参数和选项
const program = require('commander')
const cli = require('../cli')
const pkg = require('../package.json')

console.log(program);

// 设置当前的脚手架版本号
program.version(pkg.version,'-v,--version').usage('<command> [options]')

program.command('init')
.description('创建项目')
.option('-t,--template [template]','JSON数据 HTTP的地址或者是文件的相对或绝对路径')
.action((options) => {
  cli.exec('init',options)
})

program.parse(process.argv)
