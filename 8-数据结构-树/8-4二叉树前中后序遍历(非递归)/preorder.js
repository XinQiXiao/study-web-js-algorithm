const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 5,
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
};

const preorder = (root)=>{
    if(!root){
        return;
    }
    const stack = [root];
    while(stack.length){
        const n =  stack.pop();
        console.log(n.val);
        if(n.right){
            stack.push(n.right);
        }
        if(n.left){
            stack.push(n.left)
        }
    }
    
};

preorder(bt);