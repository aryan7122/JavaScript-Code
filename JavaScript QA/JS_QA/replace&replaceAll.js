const re  = "hello everyone hello boy hello yar."
const ne = re.replace("hello", "hi"); //hi everyone hello boy hello yar.
console.log(ne);
const all = re.replace(/hello/g, "hi"); //hi everyone hi boy hi yar.
console.log(all);
