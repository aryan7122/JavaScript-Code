export let massage = "E6 Modules";

export function user(a){
    console.log(`Hello ${a} log kya hal hai`)
}

export class test {
    constructor(){
        console.log("i am class");
    }
}
export default function(){
    console.log("hi export default");
}

// export {massage, user, test}; //all modules export