// three ... operations 

const ages = [11, 14, 16, 18, 20];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 32, 29];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3); // i can push custom array to add
// const allAges = ages.concat(ages2).concat(ages3);

// const totalArray = [ages, ages2, 5, ages3];  // result [ 11, 14, 16, 18, 20, [ 15, 16, 12 ], 5, [ 25, 36, 32, 29 ] ]
const totalArray = [...ages, ...ages2, 5, ...ages3]; // result [    11, 14, 16, 18, 20, 15,    16, 12,  5, 25, 36, 32,    29  ]

// console.log(totalArray);
// ........................................ 
const business = 650;
const minister = 450;
const sochib = 250;

const maximum = Math.max(business , minister, sochib);
// console.log(maximum);

// ........................................ 
const takaPoisa = [ 650, 450, 250];
const max = Math.max(takaPoisa); // result  NaN
const max = Math.max(...takaPoisa); result // 650
console.log(max);
