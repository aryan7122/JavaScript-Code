// for in looop ony work for OBJRCT

/*
var student = {
    name: 'Aryan',
    class: 'bca',
    age: 20,
    rollNumber: 78782
    }

 for (const key in student) {
//  for (const key of student) { // for of object for not work
     console.log(key) // return:  nam  class age   rollNumber  
     console.log(student[key]) // return:  Aryan  BCA  age 78782    
}
*/

// for of use only string and Array

// for of -> use string
/*
let ak = "Aryan Kushwaha";

for (const key2 of ak) {
    // console.log(typeof(key2))  // string
    // console.log(key2) 
    console.log(ak[key2])// undefined
}

*/
// for of ->   use  Array


let arr = ['a', 1, 2, 3, 4,'t'];

for (const key3 of arr) {
        // console.log(key3)
        // console.log(arr[key3]) // string undefind but integer print
    }
 
for (let i = 0; i <= arr.length -1; i++){ // -1 na lgane pe last me undefind aaye ga
    console.log(arr[i]) // same as same for of 
}

