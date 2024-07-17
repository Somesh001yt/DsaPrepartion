
const findDuplicate = (nums) => {
    let slow = 0
    let fast = 0

    while(true){
        fast = nums[nums[fast]]
        slow = nums[fast]

        while(fast === slow){
            
        }
    }
}

console.log(findDuplicate)([1,2,4,2,3])