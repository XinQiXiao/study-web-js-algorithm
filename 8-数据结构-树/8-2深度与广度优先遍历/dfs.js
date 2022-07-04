/*
 * @Author: your name
 * @Date: 2022-04-19 10:22:59
 * @LastEditTime: 2022-04-19 10:42:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /js-algorithm/8-数据结构-树/8-2深度与广度优先遍历/dfs.js
 */
const tree = require('./tree')

const dfs = (root)=>{
    console.log(root.val)
    root.children.forEach(dfs)
}

dfs(tree)