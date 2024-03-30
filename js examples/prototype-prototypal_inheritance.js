let sum = (a, b) => a + b;

let emp = {
    name: "Sanket",
    age: 26,
    city: "Pune"
}

let arr = [2, 3, 5, 8];

console.log(sum.__proto__);
console.log(emp.__proto__);
console.log(arr.__proto__);


// don't do this, it is just for demonstration (it will lead to huge performance issue).
let obj1 = {
    name: "Sanket",
    age: 26,
    city: "Pune",
    getDetails: function(){
        console.log(this.name + " is from " + this.city);
    }
}

let obj2 = {
    name: "Aditya"
}

obj2.__proto__ = obj1;

obj1.getDetails();

console.log(obj2.__proto__);
obj2.getDetails(); //here obj2 prototype value is attached as obje 1 function.