//slice()
//signature - returns new array , starting index and excluding ending index as input 


Array.prototype.secondSlice = function(start,end){
        
    let startIndex = start === undefined ? 0 : start
    let endIndex = end === undefined ? this.length : end
    if(startIndex === endIndex) return []

    if(start<0) {startIndex = this.length + start}
    if(end<0) {endIndex = this.length + end}

    if(startIndex>=endIndex) return [] 

    const result = []

    for(let i = startIndex;i<endIndex;i++){
        if(i>=0 && i<this.length){
        result.push(this[i])
        }
    }
   return result

}

const arr = [0, 1, 2, 3, 4]
const newArr = arr.secondSlice(-3,2)
const sliceArr = arr.slice(-3,2)
console.log(sliceArr)
console.log(newArr)

// Some Edge Cases are left