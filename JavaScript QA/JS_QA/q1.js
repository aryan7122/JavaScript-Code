console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "I am VarName";
console.log("varName", varName);

fn();
function fn() {
    console.log("hello fn()")
}
fn();
var fnc = function () {
    console.log("object")
}
fnc();