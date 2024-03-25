const name = {
    firstName: "Sanket",
    lastName: "Chidrewar"
}

const name2 = {
    firstName: "Rohit",
    lastName: "Mane"
}

const printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " which is in " + state + " state ");
}

printFullName.call(name, "Latur", "Maharashtra");

//borrow function from other object & use it with the data of other object 
printFullName.call(name2, "Pune", "Maharashtra");


//in apply method we just pass arguments as a array list
printFullName.apply(name2, ["Pune", "Maharashtra"]);




