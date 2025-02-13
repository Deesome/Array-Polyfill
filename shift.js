// shift()
// Signature : remove the first element of an array and return the removed element

Array.prototype.myShift = function(){

    if(this.length === 0) return undefined

    let firstElement = this[0]
    for(let i =0; i<this.length;i++){
        this[i] = this[i+1]
    }

    this.length--

    return firstElement
    
    

}

const array1 = [1, 2, 3];

const firstElement = array1.myShift();

console.log(array1);
