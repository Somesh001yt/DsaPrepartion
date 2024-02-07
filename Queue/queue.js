//  queue implementation
// First In First Out


class Queue {
    constructor (){
        this.queue = []
    }

    enqueue (element){
        this.queue.push(element)
    }

    dequeu(){
        if(this.isEmpty()){
            return 
        }
        this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    front(){
        if(this.isEmpty()){
            return 
        }
        return this.queue[0]  
    }

    size(){
        return this.queue.length
    }


    printQueue(){
        let queueString = ''
        for(let i =0; i< this.size(); i++){
            queueString += this.queue[i] + " "
        }

        console.log("Queue: "+queueString)
    }
}


let myQueue = new Queue()

myQueue.enqueue(5)
myQueue.enqueue(8)
myQueue.enqueue(14)
myQueue.dequeu()

console.log(myQueue.printQueue())


