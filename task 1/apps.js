class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

function countOccurrence(root, K) {
  let s = [];
  let curr = root;

  let count = 0;

  while (curr != null || s.length != 0) {
    while (curr != null) {
      s.push(curr);
      curr = curr.left;
    }

    curr = s[s.length - 1];
    s.pop();

    // Increment count if element = K
    if (curr.data == K) count++;

    // Traverse the right subtree
    curr = curr.right;
  }

  return count;
}

// Driver code

// Binary tree as shown in example

let K = 'map';

// Function call

var root = new Node('start');
root.left = new Node('child');
root.right = new Node('steak');
root.left.left = new Node('movie');
root.left.right = new Node('menu');
root.right.left = new Node('movie');
root.right.right = new Node('pizza');
root.left.left.left = new Node('steak');
root.left.left.left = new Node('map');
root.left.right.left = new Node('pizza');
root.left.right.right = new Node('steak');
root.right.left.left = new Node('start');
root.right.left.right = new Node('map');
root.right.right.left = new Node('menu');
root.right.right.right = new Node('steak');
root.left.left.right = new Node('map');
root.left.left.right.right = new Node('menu');
root.right.left.left.right = new Node('child');
root.right.left.left.left = new Node('steak');
root.right.right.right.right = new Node('map');

console.log(
  'The word ' + K + ' appears ' + countOccurrence(root, K) + ' times'
);
