// Stack Example

// Methods

// Push()   Pop()  Peek()  isEmpty()  size()


// First in Last Out

// Basic Stack Implemetaion

class Stack  {
    constructor () {
    this.stack = [];
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 'stack is empty'
        }

        this.stack.pop()
    }

    peek(element){
        if(this.isEmpty()){
            return 'stack is empty'
        } 

        return this.stack[this.stack.length-1]
    }

    isEmpty(){
        return this.stack.length === 0
        
    }

    size(){
        if(this.isEmpty()){
            return 'stack is empty'
        } 

        return this.stack.length-1
    }
}

const newStack  = new Stack()

newStack.push(10)
newStack.push(20)

console.log(newStack.peek())
newStack.pop()
newStack.size()