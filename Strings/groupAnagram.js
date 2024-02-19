function groupAnagram (strs){
    const map = {}

    for(const s of strs){
        const key = s.split('').sort().join('')

        if(map[key]){
            map[key].push(s)
        }else{
            map[key] = [s]
        }
    }
    return Object.values(map)
}


    console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))