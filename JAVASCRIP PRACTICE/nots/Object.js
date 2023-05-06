// // Object.assign ----------------------->

// var object1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// var object2 = {
//     d: 1,
//     e: 2,
//     f: 3
// }
// var object3 = Object.assign({ a: 9, g: 8, h: 3 }, object1);
// var object4 = Object.assign({ f: 9, i: 8, j: 3 }, object1);
// console.log(object1, object3);
// console.log(object4);

// Objrct.create()---------------------->

// ! bina Object.create ke app add ya deleate kar sakte hai

// let obj = {
//     name: 'aryan',
//     ip: '784239',
//     id: '749'
// }
// console.log(obj.name);
// obj.data = [12, 32, 32]
// delete obj.id   //   id deleted
// console.log(obj)
// obj.class = 'bca';
// console.log('height' in obj); // answer is True or False


let obj2 = Object.create({ //Object.create lgane ke bad new proparty add ya delete nhi kya ja sakta hai
    name: 'aryan',
    ip: '784239',
    id: '749'
})
console.log(obj2)

obj2.data = [12, 32, 32]
delete obj2.ip //not delete
console.log(obj2)
        
// 