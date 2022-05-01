class Node{
 constructor(data){
  this.left = null;
  this.right = null;
  this.data = data;
 }
}

class BinarySearchTree{
 constructor(){
  this.root  = null;
 }
 insert(data){
  if (this.root === null){
   this.root = new Node(data);
  }
  else{
   const node = this.root;
   const searchTree = node =>{
    if (data < node.value && node.left){
     searchTree(node.left)
    }
    else if(data < node.value){
     node.left = new Node(data);
    }
    else if(data > node.value  && node.right){
     searchTree(node.right)
    }
    else if(data > node.value){
     node.right = new Node(data);
    }
   }
   return searchTree(node);
  }
 }


}

const tree = new BinarySearchTree();

tree.insert('start')
tree.insert('child')
tree.insert('steak')
tree.insert('movie')
tree.insert('menu')
tree.insert('movie')
tree.insert('pizza')
tree.insert('steak')
tree.insert('child')
tree.insert('pizza')
tree.insert('steak')
tree.insert('start')
tree.insert('pizza')
tree.insert('menu')
tree.insert('steak')
tree.insert('map')
tree.insert('menu')
tree.insert('child')
tree.insert('steak')
tree.insert('map');

