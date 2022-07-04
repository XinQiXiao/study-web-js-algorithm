const bt = {
    val: 5,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null,
            },
            right: null,
        }
    },
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null,
        }
    }
}

const inorder = (root)=>{
    if(!root){
        return
    }
    const stack = []
    let p = root
    while(stack.length || p){
        while(p){
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        console.log(n.val)
        p = n.right
    }
}

inorder(bt)