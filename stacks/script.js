class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top?.value ?? 'list is empty';
  }
  push(value) {
    if(!(this.top && this.bottom)){
      this.top = this.bottom = new Node(value);
      this.length++;      
    } else {
      const newEl = new Node(value);
      newEl.next = this.top;
      this.top = newEl;
      this.length++;
    }
    return this;
  }
  pop() {
    this.top = this.top.next;
    this.length--;
    return this;
  }
  printList(){
    let currentNode = this.top;
    let listArray = [];
    while(currentNode !== null){
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }
  isEmpty(){

  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('Discord');
myStack.push('Youtube');
myStack.push('Google');
console.log('stack is: ', myStack.printList());
console.log('top element: ', myStack.peek());

myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.printList());
console.log('top element: ', myStack.peek());

//Discord
//Youtube
//google
