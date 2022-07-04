const bt = {
    val: 7,
    left: {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: {
            val: 3,
            left: {
                val: 2,
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
            val: 5,
            left: null,
            right: null,
        }
    }
}

const postorder = (root)=>{
    if(!root){
        return
    }
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}

postorder(bt)