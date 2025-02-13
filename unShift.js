//unShift 
// Signature : returns the new length, modified the current array, add multiple values in starting of index

Array.prototype.myUnShift = function(...elements){
    if(elements.length===0) return this.length
    let elementsArray = elements.length
    
    for(let i = this.length-1;i>=0; i--){
       
        this[i + elementsArray] = this[i]
        
    }

    for(let k=0;k<elementsArray;k++){
        this[k] = elements[k]
    }
     
    return this.length

}

 const arr = [1,2,3]
 const length = arr.myUnShift(2,4)
 console.log("Length",length)
 console.log("arr",arr)

 






