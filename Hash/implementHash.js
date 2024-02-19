// Hash Table

// A Hash Table, also known as hash map, is a data structure that is used to store key-value pairs

// Given a , you can associate a value with that key for very fast lookup



// Hash Table contd.

// We store the key value pair in a fix sized array

// Arrays have a numeric index

// How do we go from using a string as a index to number as an index?

// A hashing function accepts the string key, converts it into a hash code using a defined logic 
// and then maps it into a numeric index that is within the bounds of the array

// Using the index, store the value

// The same hashing function is reused to retreive the value given a key

// Set to store a key-value pair
// Get to retreive a key-value pair
// Remove to delete a  key-value pair


// Usage

// Hash Tables are typically implemented where constant time lookup in insertion are required 

// Database indexing

// Caches


class HashTable {
    constructor (size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
         total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key , value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key) 
        this.table[index] = undefined 
    }

    display(){
        for(let i =0; i<table.length; i++){
            if(this.table[i]){
                console.log(i ,this.table[i])
            }
        }
    }
}

const table = new HashTable(50)