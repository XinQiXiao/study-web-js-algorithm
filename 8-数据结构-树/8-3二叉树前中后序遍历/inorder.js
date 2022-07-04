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
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}

inorder(bt)