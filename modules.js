// const amount=12;

// if(amount<10){
// console.log('small number')
// }
// else{
//     console.log('large number')
// }

// // setInterval(()=>{
// // console.log('hello')
// // },1000)

// console.log(__dirname);   //path to current directory



const names=require('./names');
const sayHi=require('./utils');
require('./mind-grenade');  //require sum
// console.log(names);
//sayhI FUNCTION PRESENT IN utils and names variable present in names.js
sayHi('sanjna')
sayHi(names.john)
sayHi(names.peter)

//alternative syntax.js
const data=require('./alternativeSyntax');
// console.log(data);