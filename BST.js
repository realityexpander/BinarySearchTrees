// QUESTION 1

// From memory, write a code snippet that binary-searches an array.

// QUESTION 2

// From memory, write code snippets for BFS and DFS of a BST.

// q1:

function searchBT(arr, search) {
  if(arr.length ===0)
      return null;
  if( arr[item] === search )
    return item;
  if( arr[item] > search ) {
    return searchBT(arr.splice(item, arr.length-1));
  }
  if(arr[item] < search ) {
    return searchBT(arr.splice(0, item-1)); 
  }
}

// q2:

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
           queue.push(root[node.left])
        }
        if(node.right) {
           queue.push(root[node.right])
        }
     }
  }
  return null 
}

function depthFirstSearch(root, search) {
  let stack = []
  stack.push(root[0]);
  while( stack.length !== 0 ) {
    for(let i=0; i<stack.length; i++) {
      let node = stack.pop();
      if(node.value === search) {
        return node
      }
      if(node.right) {
        stack.push(root[node.right]) 
      }
      if(node.left) {
        stack.push(root[node.left])
      }
    }
  }
  return null;
}


// A correct answer:
// QUESTION 1

// https://gist.github.com/tim-hr/3795c84a7d8b53110d6a91f6812bd5fe

// QUESTION 2

// First, traversal, since that’s the heart of the matter:

// Depth First (recursive) - https://gist.github.com/tim-hr/f589b6fa4c1d5572cbe29f00b6b305cc

// Depth First (iterative) - https://gist.github.com/tim-hr/02fa9d004420ddc2e6cfbc91f7159053

// Breadth First - https://gist.github.com/tim-hr/90f9b649f63e58f6dab73be062ab32ad

// Now, actual search:

// DFS - https://gist.github.com/tim-hr/d1609306da2ed58f662f669f2aa574d1

// BFS - https://gist.github.com/tim-hr/6bfd67c97f8fe9ecac1db1b9d8ce517a
