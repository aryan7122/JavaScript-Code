// pass by value VS pass by refrense
// pass by value is primative data type is self depend
let a = 5;
let b = a; //copy ho tha hai 
b = a+5;  // copy ho rha hai 
console.log(a)
console.log(b)

// pass by refrence is none primative data type

let obj1 = {
    mane: "aryan",
    pass: 123,
};
let other = obj1;
console.log(other);

let obj2 = obj1;
obj2.pass = 321; //refrence mil rha hai
console.log(other);

console.log(obj1);
console.log(obj2);
////////////////////////////////////////
let arr1 = [1,2,3,4,5];
console.log(arr1);
let arr2 = arr1;

arr2.push(6);
console.log(arr1);
console.log(arr2);