//includes()
// Signature - return true or false , if the element exist in array or not,elemt could be Nan also, value and startingIndex as input, support negative index also

Array.prototype.myIncludes = function(value,start=0){

    start = start < 0 ? Math.max(this.length + start,0) : start


    if(start>=this.length) return false

    for(let i=start;i<this.length;i++){
       if(Number.isNaN(value) && Number.isNaN(this[i])){
        return true
       }

       if(this[i] === value){
        return true
       }
        
    }

    return false
}

const array1 = [1, 2, 3,NaN];

console.log(array1.myIncludes());
// Expected output: true

console.log(array1.myIncludes(NaN))
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.myIncludes("cat"));
// Expected output: true

console.log(pets.myIncludes("at"));

// Expected output: false

