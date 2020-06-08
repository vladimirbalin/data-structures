// 1 --> 10 --> 5 --> 16

class LinkedList {
  constructor(value){
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newEl = {
      value,
      next: null
    };
    this.tail.next = newEl;
    this.tail = newEl;
    this.length++;
    return this;
  }
  prepend(value){
    const newEl = {
      value,
      next: this.head
    };
    this.head = newEl;
    this.length++;
    return this;
  }
  printList(){
    let currentNode = this.head;
    let linkedListArr = [];
    while(currentNode !== null){
      linkedListArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return linkedListArr;
  }
  insert(index, value){  
    if(index === 0){
      return this.prepend(value);
    } else if(index === this.length){
      return this.append(value);
    } else if(index > this.length || index < 0){
      console.log('wrong index');      
      return this;
    }
    let prevNode = this.traverseToIndex(index - 1);
    let nextNode = prevNode.next;
    const nodeToInsert = {
      value,
      next: nextNode
    }
    prevNode.next = nodeToInsert; 
    return this;
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 55));

console.log(myLinkedList.printList());
