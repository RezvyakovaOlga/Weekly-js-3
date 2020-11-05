function foo1() {
    console.log({ user: 'Michael' });
    return { user: 'Michael' };
}
  
function foo2() {
    console.log({ user: 'Nastya' });
    return { user: 'Nastya' };
}
  
function foo3() {
    console.log({ user: 'Egor' });
    return { user: 'Egor' };
}

setTimeout(foo1, 222);
setTimeout(foo2, 3400);
setTimeout(foo3, 1293);

function FINAL_RESULT () {
    console.log("Finish") 
}

function DETECTION() {
    Promise.race ([p1,p2,p3]).then((value) => console.log(value + " is first"))
}

let p1 = new Promise ((resolve) => {
    setTimeout(resolve, 222, "foo1");
}, 222);
let p2 = new Promise ((resolve) => {
    setTimeout(resolve, 3400, "foo2");
}, 3400);
let p3 = new Promise ((resolve) => {
    setTimeout(resolve, 1293, "foo3");
}, 1293); 

Promise.all([p1, p2, p3]).then(() => FINAL_RESULT (), DETECTION());

