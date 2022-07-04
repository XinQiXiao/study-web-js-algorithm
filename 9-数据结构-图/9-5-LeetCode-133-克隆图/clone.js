/*
 * @Author: your name
 * @Date: 2022-04-24 18:01:19
 * @LastEditTime: 2022-04-28 14:52:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /js-algorithm/9-数据结构-图/9-5-LeetCode-133-克隆图/clone.js
 */
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node){
        return;
    };
    const visited = new Map();
    const dfs = (n)=>{
        const nCopy = new Node(n.val);
        visited.set(n, nCopy);
        (n.neighbors || []).forEach(ne => {
            if(!visited.has(ne)){
                dfs(ne);
            };
            nCopy.neighbors.push(visited.get(ne));
        });
    };
    dfs(node);
    return visited.get(node);
};