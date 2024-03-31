let counter = 0;
function getData(){
    console.log("received data ...", counter++, );
}


function debouncing(time){
    let timer ;
    return function() {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            getData.apply(context);
        }, time)
    }
}
debouncing(300)();

// console.log(a);
// console.log(b);
// var b = a = 5;

// console.log(b); // undefined
// var b = 5;

// console.log(b);  // ref error
// let b = 5;

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// let user = {
//     id: "123",
//     name: "Sanket"
// }
// Object.defineProperty(user, "id", {value: user.id, writable: false});
// user.id = "12345";

// console.log(user);