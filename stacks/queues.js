class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0){
      this.first = this.last = newNode;
    } else if(this.length >= 1){
      this.last.next = newNode;
      this.last = newNode;
    } else {
      return;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if(this.length === 0){
      return this;
    } else if(this.length === 1){
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }
    
    this.length--;
    return this;
  }
  printList(){
    let currentNode = this.first;
    let listArray = [];
    while(currentNode !== null){
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(listArray);
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.printList();
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.printList();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());
//Joy
//Matt
//Pavel
//Samir
