// import {massage} from "./library.js";
// import {user} from "./library.js";
import {massage as msg, user, test, massage} from "./library.js"; //one way imprt all modules
// import * as all from "./library.js" // all modules import
// import {default as df} from "./library.js";
import  df from "./library.js";


// console.log(massage);
console.log(msg);  //massage new name is msg
document.body.innerHTML = msg;
// document.body.innerHTML = massage;
 user("dosto");

 let a = new test();
 df();