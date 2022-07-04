/*
 * @Author: your name
 * @Date: 2022-04-19 10:46:32
 * @LastEditTime: 2022-04-19 10:47:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /js-algorithm/8-数据结构-树/8-2深度与广度优先遍历/bfs.js
 */
const tree = require('./tree')

const bfs = (root)=>{
    const q = [root];
    while(q.length > 0){
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
            q.push(child);
        })
    }
}

bfs(tree)