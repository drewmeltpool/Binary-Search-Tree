'use strict';

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
  //show Tree
  show_tree(){
    return this.root;
  }
  //verifies if num exist in tree
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
}

const b = new binaryTree();
