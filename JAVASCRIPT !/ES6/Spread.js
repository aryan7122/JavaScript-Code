var names = ['aman','raj','tanya'];
function getName(n1,n2,n3){
    console.log(n1,n2,n3);
}
getName(names[0],names[1],names[2]);
getName(names);
getName(...names);//spread Operator