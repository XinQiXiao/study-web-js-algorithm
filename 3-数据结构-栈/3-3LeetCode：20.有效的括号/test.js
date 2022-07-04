/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true

 * @param {*} s 
 * @returns 
 */

let isValid = function(s){
    // 长度为奇数
    if(s.length %2 === 1){
        return false
    }
    // 创建栈
    const stack = []
    for(let i=0; i<s.length;i++){
        const c = s[i]
        if(c === '(' || c === '[' || c === '{'){
            // 是左括号则入栈
            stack.push(c)
        } else {
            //
            // 获取栈顶元素
            const t = stack[stack.length-1]
            if(
                (t === '(' && c === ')') ||
                (t === '[' && c === ']') ||
                (t === '{' && c === '}')
            ){
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length ===  0
}
console.log('"()"=>', isValid('()'))
console.log('"(())"=>', isValid('(())'))
console.log('"([])"=>', isValid('([])'))
console.log('"()()"=>', isValid('()()'))
console.log('"()("=>', isValid('()('))
console.log('"([)]"=>', isValid('([)]'))
console.log('"(((())"=>', isValid('(((())'))
