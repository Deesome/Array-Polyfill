# Array Polyfill

## Overview

### This project implements custom polyfills for JavaScript array methods. Polyfills allow older browsers or JavaScript environments to support modern array methods by providing custom implementations.

## Features

### Custom implementations of common array methods like:

1. at

2. concat

3. every

4. fill

5. filter

6. find

7. findIndex

8. findLast

9. findLastIndex

10. flat

11. forEach

12. includes

13. indexOf

14. map (Work in Progress)

15. pop

16. push

17.shift

18.slice (Work in Progress)

19. unShift

## Helps understand how JavaScript array methods work internally.

## Installation

### No installation is required. Simply clone the repository and include the script in your project.

git clone https://github.com/Deesome/Array-Polyfill.git

## Usage

### You can use the polyfills in any JavaScript environment by including the script:

### require('./array-polyfills.js');

## Example usage:

### let arr = [1, 2, 3];
### arr.myPush(4, 5);
### console.log(arr); // [1, 2, 3, 4, 5]

## Methods Implemented

Array.prototype.myAt

Array.prototype.myConcat

Array.prototype.myEvery

Array.prototype.myFill

Array.prototype.myFilter

Array.prototype.myFind

Array.prototype.myFindIndex

Array.prototype.myFindLast

Array.prototype.myFindLastIndex

Array.prototype.myFlat

Array.prototype.myForEach

Array.prototype.myIncludes

Array.prototype.myIndexOf

Array.prototype.myMap (updated)

Array.prototype.myPop

Array.prototype.myPush

Array.prototype.myShift

Array.prototype.mySlice (Work in Progress)

Array.prototype.myUnShift

## Contributing

Feel free to contribute by submitting pull requests or reporting issues.

## License



## Author

Deepak Yadav