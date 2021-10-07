var flatten = function(root) {
     if (root == null ){
            return;
        }
        lastLeaf(root);
    }

    let lastLeaf = function( node) {
        let left = node.left;
        let right = node.right;
        if(left == null && right == null) {
            return node;
        }
        if(left != null) {
            let leaf = lastLeaf(left);
            leaf.right = right;
            node.right = left;  
            node.left = null;            
            node = leaf;
        }
        return right != null ? lastLeaf(right) : node;
    }

    
    
    /*
    Success
Details 
Runtime: 80 ms, faster than 92.22% of JavaScript online submissions for Flatten Binary Tree to Linked List.
Memory Usage: 40.9 MB, less than 70.30% of JavaScript online submissions for Flatten Binary Tree to Linked List.
*/
