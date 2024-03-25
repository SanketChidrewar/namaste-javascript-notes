const users = [
    {firstName: "Sanket", lastName: "Chidrewar", age: "26"},
    {firstName: "Vaibhav", lastName: "Gholap", age: "27"},
    {firstName: "Mayur", lastName: "Pandav", age: "28"},
    {firstName: "Rohan", lastName: "Kshirsagar", age: "28"},
    {firstName: "Mandar", lastName: "Kawtakwar", age: "31"},
    {firstName: "Niraj", lastName: "Choudhary", age: "33"},
    {firstName: "Sudeep", lastName: "Goswami", age: "41"},
]

//list of full name of all users
var FullNames = users.map((user) => user.firstName + " " + user.lastName);
console.log(FullNames);

//what are different age with the number of that age people have

// 1- where we use array as accumulator

var agePeople = users.reduce((acc, user) =>{
    
    if(acc.find((u) => u.age === user.age) !== undefined)
    {
        acc.find((u)=> u.age === user.age).count += 1;
    }
    else
    {
        acc.push({age: user.age, count: 1});
    }
    return acc;
},[]);

console.log(agePeople); //[{age: 26 : 1}, {age: 27 : 1}, {age: 28: 2}]


// 2- where we use object as accumulator
var AgePeople = users.reduce((acc, user) =>{
    
    if(acc[user.age])
    {
        acc[user.age] = acc[user.age] + 1;
    }
    else
    {
        acc[user.age] = 1;
    }
    return acc;
},{});

console.log(AgePeople); // {26: 1, 27: 1, 28: 2}


// find firstName of all the people whose age is less than 30
// 1- using filter & map
let ageLessThanThirsty = users.filter(user => user.age < 30).map(u => u.firstName);
console.log(ageLessThanThirsty);


// 2- using reduce
let AgeLessThanThirsty = users.reduce((acc, user) =>{
    if(user.age < 30){
        if(acc.includes(user.firstName)){

        }else{
            acc.push(user.firstName);
        }
    }
    return acc;
}, [])
console.log(AgeLessThanThirsty);

