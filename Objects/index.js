const obj = {
    name : 'Heisenberg',
    age : 24,
    "Key-three" : true,
    sayMyName : function (){
        console.log(this.name)
    }
}

obj.hobby = 'football'
delete obj.hobby


console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])

obj.sayMyName()

//  Object.key , values , pair





// Set

// A Set is data structure  that can hold a collection of values. The values however be unique

// Set can contain a mix of different data types. You can stor string, boolean , number or even objects all in the same set

// Sets are dynamically sized. You don't have to declare the size of a set befire creating it

// Sets do not maintain order

// Sets are iterable. They can be used with for of loop



// Set vs Array

// Arrays can  contain duplicate  values  whereas Sets cannot

// Insertion order  is maintained in arrays but it is not in canse with sets

// Searching and deleting an element in the set is faster compared to arrays 


const set  = new Set([1,2,3])
set.add(4)  // to add
set.has(4)  // to chech if the value is in set

set.delete(4)  // to delete 

console.log(set.size)  // to check the size


set.clear()  // to clear all the value in set

for(const item of set){
    console.log(item)
}








//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Map Data structure

// A Map is an unorder  collection of key-value pairs. Both keys and values can be of any data type

// To retrieve  a value, you can use the corresponding key

// Maps are iterables. They can be used with a for loop


// Object vs Maps


// Objects are unordered whereas maps are ordered

// Keys in object can only be in a string or symbol type  whereas in maps, they can be any of type

// An object  has a prototype and may contain a few default keys  which may collide with your own keys if you're not carefull.

// A map on the othere hand does not contain any keys by default

// Objects are not iterables where as maps are iterables

// The number of items in an object must be determined manually where it is readily available with the size property in a map

// Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data


const map = new Map(['a' , 1], ['b', 2])

map.set('c' ,3)  // to add new values

console.log(map.has('a'))   // to check map has key or not

for (const [key , value] of mao){
        console.log(`${key} : ${value}`)
}