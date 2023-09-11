class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class Tree {
  constructor(array) {
    if (array) {
      const sortedArray = this.sortArray(array)
      this.root = this.buildTree(sortedArray)
    }
  }

  //order the array
  sortArray(arr) {
    //set data structure removes the repeated numbers 
    const uniqueSet = new Set()
    arr.forEach((item) => {
      uniqueSet.add(item)
    })

    //transform it on an array again and sort it
    const uniqueArray = Array.from(uniqueSet)
    const sortedArray = uniqueArray.sort((a, b) => a - b)
    return sortedArray
  }

  buildTree(sortedArr) {
    if (sortedArr.length === 0) return null

    const midpoint = Math.floor(sortedArr.length / 2)
    //the midpoint is the value of the new node
    const newNode = new Node(sortedArr[midpoint])
    //the left child is from index 0 to midpoint
    newNode.left = this.buildTree(sortedArr.slice(0, midpoint))
    //the right child is from midpoint to end
    newNode.right = this.buildTree(sortedArr.slice(midpoint + 1))

    //and it repeats itself until there's just one number in each node value and they're perfectly divided from the midpoint to the farthest from the middle items
    return newNode
  }

  insert() {

  }

  delete() {

  }

  find() {

  }
}

//pretty visual representation of the tree in the console
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const myBinaryTree = new Tree([3,2,1,4,5,7,9,8,10,0,-1,11])
prettyPrint(myBinaryTree.root)