// ------------Var don't have block scope--------------
// var a = 100;

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a); //10
//     console.log(b); //20
//     console.log(c); //30
// }

//     console.log(a); //10

 // -----------let has block scope------------------
 
 let b = 200;
 const c = 300;
 {
    var a = 10;
    let b = 20;                // this b in block scope is showding the let b available outside block scope this is called as shadowing //
    const c = 30;               // this c in block scope is showding the const c available outside block scope this is called as shadowing //

    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(b); //100
console.log(c); //300

// ---------------Illegial shadowing --------------------

let a = 10;
{
    var a = 20; // this a in block scope and we are trying to shadow let a with var a in block scope => it gives syntax error saying "identifier a has already been declared".
}

// ---------------Lexical scope in let & const (let & const also follow lexical scope in block like var follow in case of function )---------------

let a = 10;
{
    let a = 100;
    {
        let a = 1000;
        console.log(a); //1000
    }
    console.log(a); //100
}
console.log(a); //10

//



