let emp = {
    name: "Sanket",
    personal: {
        address: "Latur",
        office: {
            address: "Pune",
            home:"pcmc"
        },
        tal: "udgir",
        test: {
            address: "Pune",
            home:"pcmc"
        }
    },
    tal: "udgir",
    test: {
        address: "Pune",
        home:"pcmc"
    }
};

let finalobj = {};

let magicFun = function (val, parent){
    for(let key in val){
        if(typeof val[key] === 'object' ){
            magicFun(val[key], parent + "_" + key);
        }else{
            finalobj[parent + "_" + key] = val[key];
        }
        // console.log( val);
    }
}

magicFun(emp, "emp");

console.log(finalobj);

