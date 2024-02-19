// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
  };
  
  MyQueue.prototype.enqueue = function (x) {
    this.stack1.push(x);
  };
  
  // stack1 = [9,10]
  // stack2 = []
  
  MyQueue.prototype.dequeue = function () {
  // So here we first check stack2 is empty if it is
    if (this.stack2.length === 0) {
        // we check stack1 has more then 0 element  then we push all element of stack1 to stack2 in reverse order
      while (this.stack1.length > 0) {
        // Here we have push all element in reverse order  [5,2,3] = [3,2,5]
        this.stack2.push(this.stack1.pop());
      }
    }
  // Now we remove last element like in stack so 5 will remove so in case of queue our first element will remove FIFO
    return this.stack2.pop();
  };
  
  MyQueue.prototype.front = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    // In case of front we just have to reverse as we did above and return the last element 
  
    return this.stack2[this.stack2.length - 1];
  };
  
  MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
  };
  
  [3, 6, 7];
  
  const queue = new MyQueue();
  queue.enqueue(3);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.dequeue();
  console.log(queue.front());