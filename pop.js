//pop()
// Signature : removes the element From last index and return the last elemet and modify the current array

Array.prototype.myPop = function(){

    if(this.length===0) return undefined

    let lastElement = this[this.length-1]
      
    this.length--
     return  lastElement

}

const arr = [1,2,3,4,5]



console.log(arr.myPop())
console.log(arr.length)
console.log(arr)

