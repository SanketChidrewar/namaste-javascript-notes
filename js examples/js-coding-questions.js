//1 - Write a function to check if a given string is a palindrome without using any built-in reverse functions.

const str = "123321";
let ispalindrome = false;
for(let i = 0; i < (str.length / 2); i++) {

    if(str[i] === str[str.length - 1 - i]) {
        ispalindrome = true;
    }else{
        ispalindrome = false;
        break;
    }
}
if(ispalindrome){
    console.log("Palindrome");
}else{
    console.log("No palindrome");
}

// 2 - Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

let num = 1;
while(num <= 100){

    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz")
    }else if(num % 3 == 0) {
        console.log('Fizz')
    }else if(num % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(num);
    }
    num++;
}

// 3 - Write a function to flatten a nested array using recursion or iteration.

const nestedArray = [1, [2, 3], [4, [5, 6]]];

function flattenNestedArr(arr) {
    return  arr.reduce((accumulator, arr) => {
        if(Array.isArray(arr)){
            accumulator.push(...flattenNestedArr(arr));
        } else {
            accumulator.push(arr);
        }
        return accumulator;
    },[])
};

console.log(flattenNestedArr(nestedArray)) // [1, 2, 3, 4, 5, 6]

// 4 - Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

const arr = [0, 1, 2, 3 ,5, 6, 7, 8, 9, 10];

function findMissingNumber(arr) {
    let totalSum = (arr.length * (arr.length + 1)) / 2;
    let sumOfElements = arr.reduce((acc, num ) => {
        return acc + num;
    },0);
    return totalSum - sumOfElements;
}

console.log(findMissingNumber(arr));

// 5 - Write a function to deeply clone an object, ensuring that nested objects and arrays are also cloned rather than referenced.

