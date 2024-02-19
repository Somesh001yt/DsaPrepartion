const str = 'hi i am somesh'

const newStr = str.split(' ')

const newArra = newStr.map((str) =>{
  return str.charAt(0).toUpperCase()+str.slice(1)
})


console.log(newArra)