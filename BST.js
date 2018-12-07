// QUESTION 1

// From memory, write a code snippet that binary-searches an array.

// QUESTION 2

// From memory, write code snippets for BFS and DFS of a BST.

q1:

function searchBT(arr, search) {

  if( arr[item] === search )
    return item;

  if( arr[item] > search ) {
    return searchBT(arr.splice(item, arr.length-1));
  }
}

