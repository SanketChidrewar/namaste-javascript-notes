
// //bubbling example (events propogate from child -> parent -> grand-parent)
// document.querySelector("#grand-parent").addEventListener("click", () => {
//     console.log("Grand Parent Clicked");
// })

// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent Clicked");
// })

// document.querySelector("#child").addEventListener("click", () => {
//     console.log(" Clicked");
// })




// //capturing example (events propogate from grand-parent -> parent -> child ). => the third parameter is true means it's capturing mode (by default value is false for third parameter)
// document.querySelector("#grand-parent").addEventListener("click", () => {
//     console.log("Grand Parent Clicked");
// }, true)

// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent Clicked");
// }, true)

// document.querySelector("#child").addEventListener("click", () => {
//     console.log(" Clicked");
// }, true)





//we can stop propogation at some point in herarchy if required using stopPropogation() method of event.

document.querySelector("#grand-parent").addEventListener("click", () => {
    console.log("Grand Parent Clicked");
}, false);

document.querySelector("#parent").addEventListener("click", (event) => {
    console.log("Parent Clicked");
    event.stopPropagation();
}, false);

document.querySelector("#child").addEventListener("click", () => {
    console.log(" Clicked");
}, false);




// Note: in execution cycle where mixed event listener having bubbling & capturing are present then as per ES6 rules firstly capturing (top to bottom) phase will execute then bubbling will get executed (bottom to top).

