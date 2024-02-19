// Linked - list in js


class Node {
    constructor (data) {
    this.data = data
    this.next = null
    }
}


class LinkedList {
    constructor () {
        this.head = null
        this.size = 0
    }

// Inser First Node
    insertFirst (data){
    const newNode  = new Node(data)
     newNode.next = this.head
     this.head = newNode
     this.size++

    }

// Inser Last Node
    insertLast(data){
        const newNode = new Node(data)
     // So here first we check if there is something is linkedlist is there is not the the head is our new Node
        if(!this.head){
            this.head = newNode
            return
        }

        // if there is next element then we assing current to our first element
        let current  = this.head

        while(current.next){
            // and we traverse to each element and assign current to the next element untill we found the last 
            current = current.next
        }

        // when we found the last node we assing the current.next to our new Node
        current.next = newNode
        this.size++
        
    }

   

    //  Insert at Index

    insertAt(data , index) {
       if(index > 0 && index > this.size) return;

       // If first index 
       if(index === 0){
        const newNode  = new Node(data)
        newNode.next = this.head
        this.head = newNode
        return
       }

       const node = new Node(data)
       let current , previous
 
       current = this.head
       let count =0;

       while(count < index){
        previous = current   // Node before index
        count++
        current = current.next   // Node after index
       }

       node.next = current
       previous.next = node
        this.size++
    }

    // Get at Index

    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index){
                console.log(current.data)
            }
            count ++
            current = current.next;
        }
         return null
    }

    //  Remove at Index

    removeAt(index){
        if(index > 0 && index > this.size){
            return
        }

        let current = this.head
        let previous
        let count = 0

        if(index === 0){
            this.head = current.next
        }else {
            while(count < index){
                count ++
                previous =  current
                current = current.next
            }

            previous .next = current.next
        }

       this.size--
    }

    // Clear list
    
    clearList () {
        this.head = null
        this.size = 0
    }

    // Print list data

    printListData (){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}


const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)


 ll.removeAt(2)


 ll.printListData()

// console.log(ll)