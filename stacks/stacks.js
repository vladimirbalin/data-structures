class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    this.stack.push(value);
    return this;
  }
  pop() {
    this.stack.pop();
    return this;
  }
  printList(){
    return this.stack;
  }
  isEmpty(){

  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('Discord');
myStack.push('Youtube');
console.log(myStack.push('Google'));
console.log('stack is: ', myStack.printList());
console.log('top element: ', myStack.peek());

myStack.pop();
myStack.pop();
console.log(myStack.pop());
myStack.pop();
 
console.log(myStack.printList());
console.log('top element: ', myStack.peek());

//Discord
//Youtube
//google
