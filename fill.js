//Array.fill()
//Signature : return modified array (changes original Array),value fill from startIndex to excludingIndex

Array.prototype.myFill = function(value,start,end){
    let currentArray = this
    
    if(start===undefined) start = 0
    if(end === undefined) end = this.length

    if(start<0) start = this.length + start
    if(end<0) end = this.length + end

    if(start>=end) return currentArray

    for(let i=start;i<end;i++){
        if(i>=0 && i<this.length){
            currentArray[i] = value
        }
    }

    return currentArray


}

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

console.log(array1.fill(1,-2));
console.log(array1.fill(1,-2));