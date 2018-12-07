// QUESTION 1

// From memory, write a code snippet that binary-searches an array.

// QUESTION 2

// From memory, write code snippets for BFS and DFS of a BST.

// q1:

function searchBT(arr, search) {

  if( arr[item] === search )
    return item;

  if( arr[item] > search ) {
    return searchBT(arr.splice(item, arr.length-1));
  }
}

// q2:

q2: 

function breadthFirstSearch(root, search) {
  let queue = []
  queue.push(root[0])

  while(queue.length !== 0) {
     for(let i=0; i<queue.length; i++) {
        let node = queue.shift();
        if(node.value === value) {
           return node;
        }
        if(node.left) {
           queue.push(tree[node.left])
        }
        if(node.right) {
           queue.push(tree[node.right])
        }
     }
  }
  return null 
}
