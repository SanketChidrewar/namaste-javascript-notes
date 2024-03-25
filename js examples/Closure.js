//Function along with it's lexical scope forms a closure (i.e. here a  is stored as a closure in memory space of y in it's lexical memory scope)

// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }

// x();




// in this case when y was returned after execution of x() => the execution context of x in removed from stack & it just has the value of y function storing in z variable.
// so in y function we are printing value of variable a and it is able to print it because when it create function it store the lexical environemnt of it's parent a in it on it's memoery section. 
// this is one of the best example of closure in real life. (and as js in functional programming language where we use higher order functions it makes it very important feature)

//-----function along with it's lexical scope bundled together forms a closure -------------------//

// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);






// here z form closure with x for variable a & with y for variable b.

// function x(){
//     var a = 10;
//     function y(){
//         var b = 20;
//         function z(){
//             console.log(a, b);
//         }
//         z(); 
//     }
//     y(); 
// }
// x();




//------------------------------- Uses of closure -------------------------------------
// 1- Module design pattern
// 2- Currying 
// 3- Function like once
// 4 - memoize
// 5 - maintaining state in async world.
// 6 - setTimeouts
// 7 - Iterators
// 8 - any many more.....





//------------------------------- Closure most asked Interview Questions -------------------------------------

// function x(){
//     var i = 1;
//     setTimeout(function(){ 
//         console.log(i);
//     }, 1000);
// }
// x();


function x(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            const c = i;
            console.log('Loop variable: ', c);
        }, i * 1000)
        }
    }
    x();
