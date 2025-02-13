// indexOf
// SIgnature : reuturn the first index at which given elemnet can be found or -1 if its not present , value as input

Array.prototype.myIndexOf = function(value,start=0){

    start = start < 0 ? Math.max(this.length + start, 0) : start

    for(let i=start;i<this.length;i++){
        if(this[i]===value){
            return i
        }
    }

    return -1
}

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.myIndexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.myIndexOf("bison", 2));
// Expected output: 4

console.log(beasts.myIndexOf("giraffe"));
// Expected output: -1