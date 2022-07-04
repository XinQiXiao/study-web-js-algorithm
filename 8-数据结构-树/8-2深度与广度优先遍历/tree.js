/*
 * @Author: your name
 * @Date: 2022-04-19 10:39:41
 * @LastEditTime: 2022-04-19 10:45:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /js-algorithm/8-数据结构-树/8-2深度与广度优先遍历/tree.js
 */
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                }
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                }
            ],
        }
    ]
}

module.exports = tree
