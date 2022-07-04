/*
 * @Author: your name
 * @Date: 2022-04-22 10:16:37
 * @LastEditTime: 2022-04-22 10:22:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /js-algorithm/9-数据结构-图/9-2图的深度广度优先遍历/bfs.js
 */
const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
}

const visited = new Set()

visited.add(2)

const q = [2]

while(q.length){
    const n = q.shift()
    console.log(n)
    graph[n].forEach(c=>{
        if(!visited.has(c)){
            q.push(c)
            visited.add(c)
        }
    })
}
