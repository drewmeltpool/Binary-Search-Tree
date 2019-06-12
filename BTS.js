
// Binary Search Tree
class Main{
  constructor(num) {
    this.num = num;
    this.left = null;
    this.right = null;
  }
}

class binaryTree{
  constructor() {
    this.root = null;
  }

  add(num){
    const main = this.root;
    if (main === null) {
      this.root = new Main (num);
      return;
    } else {
      const tree = function (main) {
        if (num < main.num){
          if (main.left === null){
            main.left = new Main(num);
            return;
          }else if (main.left !== null) {
            return tree(main.left);
          }
        } else if (num > main.num) {
            if (main.right === null) {
              main.right = new Main(num);
              return;
            }else if (main.right !== null) {
              return tree(main.right);
            }
          } else {
            return null;
          }
        }
      return tree(main);
    }

  }

  // find min
  min() {
    let curr = this.root;
    if (curr.left !== null) {
    while(curr.left !== null){
      curr = curr.left
    }
      return curr.num;
    }
  }

  //find max
  max() {
    let curr = this.root;
    while (curr.right !== null){
      curr = curr.right
    }
    return curr.num;
  }
  inOrder(){
    let result = [];
    const bypass = node => {
        node.left && bypass(node.left);
        result.push(node.num);
        node.right && bypass(node.right);
      }
      bypass(this.root);
      return result;
    }
  preOrder(){
    let result = [];
    const bypass = node => {
        result.push(node.num);
        node.left && bypass(node.left);
        node.right && bypass(node.right);
      }
      bypass(this.root);
      return result;
      }
  postOrder(){
    let result = [];
    const bypass = node => {
        node.left && bypass(node.left);
        node.right && bypass(node.right);
        result.push(node.num);
      }
      bypass(this.root);
      return result;
      }
  //verifies if num exist in tree
  //NEED TO DELETE
  manifest(num){
    let curr = this.root;
    while (curr.num !== num) {
      if (num < curr.num) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
      if (curr === null){
        return null;
      }
    }
    return curr;
  }
  find(num){
    let curr = this.root;
    while (curr.num !== num) {
      if (num < curr.num) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
      if (curr === null){
        return null;
      }
    }
    return curr;
  }
  //remove
  remove(num){
    let main = this.root;
    if (main.left !== null && main.right !== null){
      //console.log(main.left,main.right);
      main.num = null;
    }
    //return main;

  }


}

const b = new binaryTree();

b.add(9);
b.add(12);
b.add(43);
b.add(3);
b.add(5);
console.log(b.preOrder());
console.log(b.find(9));
