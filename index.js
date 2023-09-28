
// console.log("Hello");
// console.log(1+2);

// // variables
// var a= 5;
// console.log(a);

// let b = "hello";
// console.log(b);

// const myName = "JS"
// console.log(myName);

// // difference between variables
// var name = "programming";
// var name = "coding";
// console.log(name);
 
//not possible in let to override
// let fname = "programming";
// let fname = "coding";
// console.log(fname);

//constant cant be changed
// const lname = "programming";
// const lname = "coding";
// console.log(lname);

// datatypes
// primitive
//  let num = 10;
//  console.log(typeof num);

//  let str = "hello";
//  console.log(typeof str);

//  let bool = false;
//  console.log(typeof bool);

//  let abc = null;
//  console.log(typeof abc)

//  let university;
// console.log(university);

//non primitive 

//type conversion

// let result = 3 + 'hello';
// console.log(result);
// console.log(typeof result)

//we can solve them by explicit type conversion
// let result = "3";
// let result1 = Number(result)
// console.log(result1);
// console.log(typeof result1)

// let result = 3.202;
// let result1 = parseInt(result)
// console.log(result1);
// console.log(typeof result1)

// operators
// arithmetic operators
// console.log(2+5)
// console.log(2-5)
// console.log(2*5)
// console.log(2%5)
// console.log(2/5)
// console.log(2**5)

// increment decrement operator
// let a= 1;
// console.log(a);
// console.log(++a); //prefix
// console.log(--a);
// console.log(a++);
// console.log(a); //postfix

// comparison operators

// let a = 9;
// let b = 4;
// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a===b);
// console.log(a<=b);
// console.log(a>=b);

// logical operators

// console.log(4>3 || 4<5); // or
// console.log(4>3 && 4>5); //and
// console.log(!false); // Not

// conditionals

// let age = 18;
// let name = "johns";
// if(age>=18){
//     if(name=="john"){
//     console.log("eligible");
//     }
//     else{
//         console.log("name not match")
//     }
// }
// else{
//     console.log("not eligible");
// }

// let a = 18;
// let b = 15;
// if(a>b){
//     console.log("A is greater")
// }
// else if(b>a){
//     console.log("B is greater than a")
// }
// else{
//     console.log("Both are equal")
// }

// let ch =2;
// switch(ch){
// case 1:
//     console.log("I am 1")
//     break
// case 2:
//     console.log("I am 2")
//     break
// case 3:
//     console.log("I am 3")
//     break
// default:
//     console.log("you pressed wrong choice")
// }

// loops

// for (var i = 0; i < 10; i++){
//     console.log("Hello")
// }

// for (var i = 0; i <= 10; i++){
//     console.log("2 x " +i+ "=" +2*i)
// }

// // backticks
// for (var i = 0; i <= 10; i++){
//     console.log(`2 x ${i} = ${2*i}`)
// }

//while

// var i = 1;
// while(i<=10){
//     console.log(`2 x ${i} = ${2*i}`);
//     i++;
// }

// do while

// var i = 1;
// do{
//     console.log(`2 x ${i} = ${2*i}`);
//     i++;
// }while(i<=10)

// functions

// function name(a){
//     console.log(a);
// }

// name("JS");

// function add(b,c){
//     console.log(b+c);
// }
// add(4,5);

let a = 3; //global

function local(){
    let b = 4; //local
    console.log(b)

}
local();
console.log(a)
console.log(b)
































