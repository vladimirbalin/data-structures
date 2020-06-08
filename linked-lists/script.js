// 1 --> 10 --> 5 --> 16
// to insert between 10 and 5 -- 55;

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
    const lastNodeIndex = this.length - 1;
    if(index === 0){
      return this.prepend(value);
    } else if(index === lastNodeIndex){
      return this.append(value);
    } else if(index > lastNodeIndex || index < 0){
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
    this.length++;
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
  remove(index){
    const lastNodeIndex = this.length - 1;
    if(index === 0){
      this.head = this.head.next;
      this.length--;
      return this;
    } else if(index === lastNodeIndex){
      let lastNode = this.traverseToIndex(this.length - 2);
      lastNode.next = null;      
      this.length--;
      return this;
    } else if(index > lastNodeIndex || index < 0){
      console.log('wrong index');      
      return this;
    }
    let prevNode = this.traverseToIndex(index - 1);
    let deletingNode = prevNode.next;
    prevNode.next = deletingNode.next;
    this.length--;
    return this;
  }
  reverse(){
    if(!this.head.next){
      return this;
    }
    let tempOne = this.head;
    this.tail = this.head;
    let tempTwo = tempOne.next;
    while(tempTwo){
      const tempThree = tempTwo.next;
      tempTwo.next = tempOne;
      tempOne = tempTwo;
      tempTwo = tempThree;
    }
    this.head.next = null;
    this.head = tempOne;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.append(235);
myLinkedList.insert(4, 79);
console.log(myLinkedList.insert(2, 55));
console.log(myLinkedList.printList());
// myLinkedList.remove(4);


myLinkedList.reverse();

console.log(myLinkedList.printList());
