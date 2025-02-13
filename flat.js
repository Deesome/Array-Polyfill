//flat()
// return new arrat with all sub-array elements upto specified depth, depth as input

Array.prototype.myFlat = function(depth){
    if(depth===undefined) depth=1;
    let arrayCounter=0;
    const result = []

    for(let i=0;i<this.length;i++){
        if(isArray(this[i])){
            
        }
        arrayCounter++
         result.push(...this[i])

    }

    return result
}

