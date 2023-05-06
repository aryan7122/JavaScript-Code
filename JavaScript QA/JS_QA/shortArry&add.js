// short array and mergr and remove duplication and print asending order
let arr1 = [1, 3, 4, 5, 5],
    arr2 = [2, 4, 6, 8, 9, 7];

let arr3 = [...arr1, ...arr2]; // add marge
arr3.sort((a, b) => a - b); // short asending order
arr3 = [new Set(arr3)];  //remove doublication 
console.log(arr3);