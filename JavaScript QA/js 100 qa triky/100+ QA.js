// 1. /////////////////////////////////\

// let a = [];
// let b = [];
// console.log(a==b);
// console.log(a===b);

//2. ============================================

// let a = []; 
// let b = a;
// console.log(a==b);
// console.log(a===b);

// 3. -----------------------------

let a = [20];
let b = [20];
console.log(a[0]==b[0]);
console.log(a[0]===b[0]);

// 4. +++++++++++++++++++++++++++++++++++++

// let  z = [1,2,3,4,5];
// let a = {name: "aryan"}; 
// console.log(...z); //tree ... se uskw element baher aa yate hai array ho ya object 

// // 5. *********************************

// console.log(typeof NaN); // "two"/3 = NaN

// 6. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let data = 10 - -10;
// console.log(data);
// let set = new Set([1,1,2,3,4]);
// console.log(set);

// 7. '''''''''''''''''''''''''''

// let a = {name: "Aryan"};
// console.log(delete a.name);
// console.log(a.name);
// console.log(a);

// 8. ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let data = {name: "Aryan"}
// console.log(delete data);
// console.log(delete data);
// console.log(data);

//9. :::::::::::::::::::::::::::::::::

// let data = ["A","b","c"];
// let [x] = data;
// console.log(x);
// let [y,d] = data;
// console.log(y,d);

// 10. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let data = ["A","b","c"];
// let [,x] = data;
// console.log(x);

// 11. @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222

// let data = {name:"Aryan",age:19,skill:"web"};
// console.log(data.name)
// let {skill} = data;
// console.log(skill);

// 12. ######################################

// how to merge
// let  data = {name:"Aryan"};
// let info = {mail:"aryan@gmail.com"};
// let allData = {...data,...info};
// console.log(allData);

// 13. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let  data = {name:"Aryan"};
// let info = {mail:"aryan@gmail.com"};
// let allData = {data,...info};
// console.log(allData);

// 14. %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// let  data = {name:"Aryan" , age:19};
// let info = {name:"Aryankushwaha",mail:"aryan@gmail.com"};
// let    alldata = {...data,...info};
// console.log(alldata);

// 15. ))))))))))))))))))))))))))))))))))))))))

// const name ='Anil';
// console.log(name());

// 16 

// const result = false || {} || 20 || null; // or operator first positive value returns
// if(result){
//     console.log('yas');
// }
// console.log(result);

// 17.

// const result = null|| '' || false || ''|| false; // jab koi positive vlue nhi milta tab last vali value utha leta hai
// console.log(result);

// 18.

// const result = [] || 0 || true;
// console.log(result);

// 19.

// console.log(Promise.resolve(5));

//20.

// console.log("💋"==="💋");

// 22.

// let name = "Aryan";

// function get(){
//     console.log(name);
//     let name ="sidhu"
// }
//get();

// 23. 

// let name = "Aryan";

// function get(){
//     console.log(name);
// }
// get()

//24.

// console.log(`${(x => x)('I Love')} to program`);

//25.

// function sumvalue(x,y,z){
//     return x+y+z;
// }
// whiat ia  rite?
// console.log(sumvalue([...1,2,3]));
// console.log(sumvalue([...[1,2,3]]));
// console.log(sumvalue(...[1,2,3]));
// console.log(sumvalue([1,2,3]));

//26.

// const name = 'i love coding ho';
// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');

//sabse pahe yha ! name ko false bna diya uske bad === compare hoga.

//27.

// const name = "like";
// const age = 19;
// console.log(isNaN(name));
// console.log(isNaN(age));

//28.

// let person = {name: "Anil"};
// Object.seal(person);
// // person.name = "hello"
// console.log(person);

//29.

//30.

// let data = [1,2,3,4,5,6];
// remove last value
// console.log(data);

//31.

// check any value is odd or even
// console.log(31%2);

//32.

// let data = {
//     name: "raja"
// };
// delete data.name;
// console.log(data);

// 33.

// let data = "true";
// console.log(typeof !data);
// console.log(!!data);

// 34.

// diffrence between map and forEach function
// ans: map function any value return bu foEach is not return 

// 35.

// let data = ["ram","sita","lachman"];
// delete data[2];
// console.log(data);

//36.

// let data = ["ram","sita","lachman"];
// delete data[2];
// console.log(data.length);

//37. 

// let a = [1,2,3,4];
// let b = [5,6,7,8]
// // let c =  a.concat(b);
// let c = [...a,...b];
// console.log(c);

//38.
// let a = [1,1,2,3,4];
// let b = [2,5,6,7,8]
// // let c =  a.concat(b);
// let c = [...a,...b];
// console.log(c);

// 39.

// let c = 3**3;
// console.log(c);

//40.

// let a = 2;
// setTimeout(()=>{
//     console.log(a);
// },0)
// a=100;

//41.

// let a10 = 'like';
// // let 10a = 'like';
// console.log(a10);

//42.

// let a = "like";
// let b  = `like`;
// console.log(a===b);

//43.
// let a = 1;
// let b = 2;
// console.log(a === --b);

//44.

// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c);

//45.

// console.log(3*3);
// console.log(3**3);
// console.log(3***3);

// 46.

// console.log(a);
// var a;
// let a;
// const a;

//47.

// console.log(a);

// 48.

// console.log([[[[[]]]]]);

//49.

// let a = navigator.platform;
// console.log(a);

//50.

// let for = 100;

//51.

// function fruit(){
//     console.log(name);
//     console.log(price);
//     var name = "Apple"
//     let price = 20;
// }
// fruit();

//52.

// for(var i = 0; i<3; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1);
// }

//53.

// for(let i = 0; i<3; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1);
// }

//54.

// console.log(+true);
// console.log(typeof +true);
// console.log(+"true");
// console.log(typeof +"true");

//55.

// console.log(!"anil");
// console.log(typeof "anil");

//56.

// let data = "size";
// const bird ={
//     size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

//57.

// let c = {name: "peter"}
// let d;
// d = c;
// c.name = "anil";
// console.log(d.name);

//58.

// var x;
// var x = 10;
// console.log(x);

//59.

// var x;
// let x = 10;
// console.log(x);

//60.

// let a =3;
// let b = new Number(3);
// console.log(a==b);
// console.log(a===b);

//61.

// let name;
// nmae = {}; //typo
// console.log(name);
// console.log(nmae);


// 62.

// function fruit(){
//     console.log("Woof!");
// }
// fruit.name = "apple";
// fruit();

//63.

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,"3"));

//64.

// let number = 0;
//     console.log(number++);
//     console.log(++number);
//     console.log(number);

//65.

// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(20);

//66.

// function getage() {
//     'use strict'
//     age =20;
//     console.log(age);
// }
// getage();

//67.

// const sum = eval('10*10+10');
// console.log(sum);

//68.

// how long is cool_secret accessible?
// sessionStorage.setItem('cool_secret', 123);

//69.

// const obj = {1:"a",2:"b",3:"c"};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

//70.

// const obj = {a: "one", b: "two", a: "reprat"};
// console.log(obj);

//71.

    // for(let i = 1; i<5; i++){
    //     if(i === 3)continue;
    //     console.log(i);
    // }

//72.

// const foo = () => console.log('first');
// const bar = () => setTimeout(() => console.log('second'));
// const baz = () =>  console.log('third');
// bar();
// foo();
// baz();

//73.

/*
<div nclock="console.log('first div')">
    <div onclock="console.log('second div')">
        <button onclock="console.log('button')">clock</button>
</div>
</div>
*/

//74.

// const person ={name: 'anil'};
// function sayhi(age){
//     return `${this.name } is ${age}`
// }
// console.log(sayhi.call(person, 21));
// console.log(sayhi.bind(person, 21)());

//75.

// function sayhi(){
//     return (() => 2)();
// }
// console.log(typeof sayhi());

//76.

// function sayhi(){
//     return (() => 2);
// }
// console.log(typeof sayhi());

//77

// console.log(typeof typeof 1);

//78.

// const number = [1,2,3];
// number[6] = 11;
// console.log(number);

//79.

// const number = [1,2,3];
// number[9] = number;
// console.log(number);

//80.

//Everything in javascript is either a ...
//a) primitivee or object 
//b) function or object 
//c) trick or object only objects
//c) number or object

//81.

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

//82.

// console.log(setInterval(()=>console.log('hi'),1000));
// console.log(setInterval(()=>console.log('hi'),1000));
// console.log(setInterval(()=>console.log('hi'),1000));

//83.

// console.log([..."anil"]);

//84.

// const firstPromise = new Promise((res,rej)=>{
//     setTimeout(res,500,'one')
// })
// const secondPromise = new Promise((res,rej)=>{
//     setTimeout(res,100,'two')
// })
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

//86.

// let person = {name: 'peter'}
// const member = [person];
// person = null;
// console.log(member);

//87.

// const person ={ name:"batman", age:20};
// for(const item in person){
//     console.log(item);
// }

//88.

// let data = 3 + 4 + '5';
// console.log(typeof data);

//89.

// console.log(typeof 3 + 4 + '2');

// 90.

// console.log(typeof(3+4+'5'));

//91.

// console.log([]==[]);

//92.

// let data = [1,2,3].map(num=>{
//     if(typeof num === 'number')return;
//     return num *2;
// });
// console.log(data);

//93.

// function getInfo(member){
//     member.name = 'Anil';
// }
// const person = {name: 'serch'};
// getInfo(person);
// console.log(person);

//93.

// function car() {
//     this.make ='tata';
//     return{make:'kie'};
// }
// const mycar = new car();
// console.log(mycar.make);

//94.

// (()=>{
//     let x =(y = 10);
// })();
// console.log(typeof x);

//95.

// (()=>{
//     let x = y =10; // y is var
// })();
// console.log(typeof y);
// console.log(typeof x);

//96.

// (()=>{
//     let x = 10;
// })();

// (()=>{
//     let x = 10;
// })();
// console.log(typeof x);

//97.

// (()=>{
//     let x = y = 10;
// })();
// (()=>{
//     let x = y = 20;
// })();
// console.log(typeof y);

//98.

// let x = 100;
// (()=>{
//     let x = 20;
// })();
// console.log(x);

//99.

// console.log(! true - true);

//100.

// console.log(true + + "10");
