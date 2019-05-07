var sortedArray = [-10,-3,0,5,9];

function sortedArrayToBST(nums) {
    return buildBinaryTree(nums, 0, nums.length - 1);
}

function buildBinaryTree(nodes, start, end) { 
        // base case  
        if (start > end) 
        { 
            return null; 
        } 

        var mid = Math.floor((start + end) / 2); 
        var root = new treeNode(nodes[mid]); //Get the value of the root node (because our list is already ordered)
  
        root.left = buildBinaryTree(nodes, start, mid - 1);// Using index in Inorder traversal, construct left and right subtrees
        root.right = buildBinaryTree(nodes, mid + 1, end); 
        
        return root; 
}

function treeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST(sortedArray));

//1. Create the skewed binary tree using the inputs given (largest number at the top)
//2. Build the balanced binary tree