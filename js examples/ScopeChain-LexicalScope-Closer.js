var b = 10;

function abc(){
    c();
    function c(){
        console.log(b);
    }
}

abc();