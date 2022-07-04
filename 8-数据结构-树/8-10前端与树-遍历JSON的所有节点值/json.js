/*
 * @Author: your name
 * @Date: 2022-04-21 10:08:05
 * @LastEditTime: 2022-04-21 10:09:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /js-algorithm/8-数据结构-树/8-10前端与树-遍历JSON的所有节点值/json.js
 */

const json = {
    a: {
        b: {
            c: 1,
        }
    },
    d: [1, 2],
}

const dfs = (n, path)=>{
    console.log(n, path)
    Object.keys(n).forEach(k => {
        dfs(n[k], path.concat(k))
    })
}

dfs(json, [])