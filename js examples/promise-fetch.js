// const url = "https://api.github.com/users/sanketchidrewar"

// const user =  fetch(url);
// console.log(user);

// user.then(data => 
//         console.log(data)
//     ).catch(error => 
//         console.log(error) 
//     );


    // const cart = ["shoes", "kurta", "Paijama"];
    
    // //Adding item to the
    // var promis = createOrder(cart);
    // // console.log(promis);

    // function createOrder(cartItems){
    //     const pr = new Promise((resolve, reject) =>{
    //         if(validateCart(cartItems)){
    //             const orderId = "12345";
    //             setTimeout(() =>{
    //                 resolve(orderId);
    //             },5000);
    //         }else{
    //             const error = new Error("Invalid cart item");
    //             reject(error);
    //         }
    //     });
    //     return pr;
    // }

    // function validateCart(cartItems){
    //     return true;
    // }

    // promis.then((data) =>{
    //     console.log(data);
    //     console.log(promis);
    // }).catch(error =>{
    //     console.log(error.message);
    // });

//--------------------------------------------------------------------------------------------------
// Example of promis chaining
// createCart()
// proceedToPayment()
// orderSummary()
// updateWallet()

const cartItems = ["bottle", "bag", "pen"];

createCart(cartItems)
.then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
})
.then((paymentStatus) => {
    console.log(paymentStatus);
    return orderSummary(paymentStatus);
})
.then((summary) => {
    console.log(summary);
    console.log("Wallet updated successfully");
})
.catch(error =>{
    console.log(error.message);
})

function createCart(cartItems) {
    return  new Promise(function(resolve, reject) {
        if(validateCart(cartItems)){
            const orderId = "12345"
            resolve(orderId);
        }else{
            const error = new Error("Cart items are not valid");
            reject(error);
        }
    })
}

function validateCart(items){
    return true;
}

function proceedToPayment(orderId){
    return new Promise( (resolve,reject)=> {
        resolve("Payment Successful");
    });
}

function orderSummary(paymentStatus){
    return new Promise( (resolve,reject)=> {
        resolve("order summary is listed below:");
    });
}
