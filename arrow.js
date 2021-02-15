// function doubleIt(num){
//     return num * 2;
// }

// variable function 
// const doubleIt = function myfunc(num){
//     return num * 2;
// }


// arrow function 
const doubleIt = num => num*2;   // single akti line hole ati automatic return kore.. 
const result = doubleIt(5);

const add = (x,y)=> x+y;
const sum = add(5,50);
// console.log(sum);

// no parametter no operation just return value
const giveme = ()=> 5;
const collect = giveme()
// console.log(collect);

//

const doMath = (x,y)=>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result; // multiline hole by default return kore nah.. so manually return kora lagbe 
}

const resu = doMath(5,7);
console.log(resu);