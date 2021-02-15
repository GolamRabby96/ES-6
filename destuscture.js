const person = { name: 'Jack Eilliam', age: 17, job:'facebook', gf:'Ema Watson', phone: '01717112211'};

const gfName = person.gf;
const phoneNumber = person.phone; // if needed then you can do this 
const {phone} = person // alternative for upper line
const {job, gf} = person // you can add more no need to maintain order you can chose which your want
// ai formate k destructors bole 

//console.log(gfName)
//console.log(job, gf);


// . . . .  . . .Array destructor . . . . . . .  ..  . 
const friend = ['Amir Khan', 'Salman Khan', 'Sharuk Khan'];
// const [choto,next] = friend;
const [choto,next, ...remaining] = friend;

console.log(choto, next);
console.log(remaining);

// what is destructor ... 
// ans --> kono akta object ba array then projon moto property k ber kore nia asha k destructor bole
// kano lage??
// ata sadharonoto aki object k bar bar used kora hole sai khatre destructor kora hoi