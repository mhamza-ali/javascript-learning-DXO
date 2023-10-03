
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

// let a = 3; //global

// function local(){
//     let b = 4; //local
//     console.log(b)

// }
// local();
// console.log(a)
// console.log(b)

//anonymous func

// let fun = function(){
//     console.log("Hello")
// }
// fun();

//self invoke imediately

// (function(){
//     console.log("JS")
// })()

// arrow fn

// let a = (a,b)=>{
//     return a+b
// }
// console.log(a(2,3));

// let b = ()=>{
//     console.log("JS")
// }
// b();

// arrays

// let name = ["john", "jane", "js", 1, true, null]
// name.push("cena") //addding at the end of array
// name.splice(1,2) //removing with index start and end value
// name.splice(1,0, "html") // also for adding
// console.log(name)
// console.log(name.length)
// console.log(name[1]) //index 1 element

// let num = [10,20,30,40,50,60];
// console.log(num);
// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// let num = [10,20,30,40,50,60];
// num.forEach((val,index,array) => {
//     console.log(val,index,array)
// })
// in this below case it doesnt return the value if we store in other variable 
// to solve this problem we use map which create new array 

// let num = [10,20,30,40,50,60];
// let a= num.forEach((val,index,array) => {
//     return val
// })
// console.log(a)

// let num = [10,20,30,40,50,60];
// let a= num.map((val,index,array) => {
//     return val
// })
// console.log(a) // here old array remains same and it creates new array

// let num = [10,20,30,40,50,60];
// let num2 = [11,21,30,70,110,90];
// console.log(num.concat(num2))
// console.log(num.indexOf(30))
// console.log(num.reverse())
// console.log(num.sort())

//more array methods

// let num = [10,20,30,40,50,60];
// let a = num.slice(1,4);
// console.log(a)
// console.log(num)

// let num = [10,20,30,40,50,60];
// let a = num.filter((val,index,arr)=>{
//     if(val>=10 && val <=25){
//         return val
//     }
// })
// console.log(a)

// let num2 = [11,21,30,70,110,90];
// console.log(num2.toString())

// let num = '10,20,30'
// let arr = num.split(',')
// arr.forEach(element => {
//     console.log(element)
// });

// let jo = arr.join(",")
// console.log(jo)

// let num = [10,20,30,40,50,60];
// for(let n in num){ //print index directly
//     console.log(num[n])
// }

// let num = [10,20,30,40,50,60];
// for(let n of num){ //print directly values
//     console.log(n)
// }


// //nested array
// let arr = [
//     ["john", 30],
//     ["Can", 28],
//     ["rob", 22]
// ]
// console.log(arr)

// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//         console.log(i)
//         console.log(j)
//         console.log(arr[i][j])
//     }
// }

// arr.forEach((data)=>{
//     data.forEach((val)=>{
//         console.log(val)
//     })

// })

// for(let ar of arr){
//     for(i of ar){
//         console.log(i)
//     }
// }

// let arr1 = ["john", 32, true]
// let arr2 = arr1
// arr2.push("log") //normal push krne pr arr1 ma bhi value ja rhe thats why we use spread operator
// let arr2 = arr1.slice(0)
//let arr2 = arr1.slice(0).concat(["dogesh"])
//arr2.push("berg")
//arr1.push("Berg")


// let arr2 = [...arr1]
// console.log(arr1)
// arr2.push("DD")
// console.log(arr2)

// let a = 3;
// let b = a;

// console.log(a)
// console.log(b)
// b = 4;
// console.log(b)
// console.log(a)

// let array1 = ["thomas", "dogesh","Neo","Hi","DEH","JESh"]
// // let item1 = array1[0] //not good practice
// // let item2 = array1[1]

// let [item1,item2,...item3] = array1 //goood practice
// console.log(item1)
// console.log(item2)
// console.log(item3)

// objects

// let obj = {
//     name:"Bero",
//     age:21,
//     "last name":"jon",
//     fun: function(){
//         console.log("i am fn")
//     },
//     arr: [10,0,30]
// }
// console.log(obj.name)
// console.log(obj["last name"])
// console.log(obj.fun())
// console.log(obj.arr)
// obj.key = "item"
// let a = "key2"
// obj[a] = "item2"

// console.log(obj)

// for(let i in obj){
//     console.log(obj[i])
// }

// for(let i in Object.keys(obj)){
//     console.log(obj[i])
// }

//objects inside array

// let arr = [
//     {use:1,name:"tate"},
//     {use:2,name:"tat"},
//     {use:3,name:"ta"},
// ]
// // console.log(arr[0])

// // for(let i in arr){
// //     console.log(i)
// //     console.log(arr[i])
// // }

// // let [item1, item2] = arr;
// // console.log(item1)

// let [{name}, item2,{name:name1}] = arr;
// console.log(name)
// console.log(name1)

//func inside func

// function fun(){
//     console.log("i am fn 1")
//     function fun2(){
//         console.log("I am fn 2")
//     }
//     fun2()
// }
// fun()

// function fun(){
//     var a = 1;
//     console.log("i am fn 1 " + a)
//     function fun2(){
//         var a = 2 // yaha nhi milta to upper lexical scope m dhundta
//         console.log("I am fn 2 " + a)
//     }
//     fun2()
// }
// fun()

// debugger
// function fun(){
//     //debugger;
//     for(let i=0;i<=5;i++){
//         console.log(i)
//     }
// }
// fun()

// // sets
// const arr = [10,20,30,30]
// console.log(arr)
// const s = new Set([10,20,30,30,40])
// console.log(s)
// s.add(70)
// console.log(s)
// console.log(arr.length)
// console.log(s.length) //doesnt give length

// // way to find len
// length = 0
// for(let element of s){
//     length++;
// }
// console.log(length)

// map

// let map1 = new Map([[1,"one"],
// ["fname","Mickey"]])
// console.log(map1)
// console.log(map1.get(1))
// console.log(map1.get("fname"))

// //for getting keys
// var k = map1.keys()
// for(var key of k){
//     console.log(key)
// }

// recursion

// print no 1 to 10 without recursion

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

// using recursion

// function printNumberRecursive(n){
//     if(n<=10){
//         console.log(n)
//         printNumberRecursive(n+1)
//     } 
// }
// printNumberRecursive(1)

// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(5))

// JS is synchronous
// learning ascynchronous

// console.log("This")
// setTimeout(fun,4000)

// function fun(){
//     console.log("lastt")
// }

// setTimeout(()=>{
//     console.log("Asynchronous")
// },1000)
// console.log("IS")
// console.log("Sync")

// callbacks

// function fun(val){
//     console.log(val)
// }

// function add(a,b,callback){
//     let sum = a + b
//     callback(sum)
// }

// add(5,10,fun)

// callback hell

//  function loading(callback){
//     setTimeout(()=>{
//         console.log("1. loading..")
//         callback()
//     },200)
    
//  }

//  function collecting(callback){
//     setTimeout(()=>{
//         console.log("2. Collecting..")
//         callback()
//     },5000)
   
//  }

//  function approving(){
//     console.log("3. Approving..")
//  }

// function approved(){
//     console.log("4. Approved")
// }

// loading(function(){
//     collecting(function(){
//         approving();
//         approved()    
    
//     })
    
// })

// promise

// function fun(task){
//     return new Promise((resolve,reject)=>{
//         if(task){
//             resolve("Completed")
    
//         }
//         else{
//             reject("Failed")
//         }
//     })
// }

// let onResolve = (res)=>{
//     console.log(res)
// }
// let onReject = (err)=>{
//     console.log(err)
// }

// fun(true).then(onResolve).catch(onReject)

//solving callback hell problem using promises

// function loadding(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("loading..")
//             resolve()
            
//         },2000)

//     })
// }

// function collecting(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("collecting..")
//             resolve()
            
//         },2000)

//     })
// }

// function approving(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("approving..")
//             reject("not fulfill")
            
//         },2000)

//     })
// }

// function approved(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("approved..")
            
//         },2000)

//     })
// }

// loadding().then(collecting).then(approving).then(approved).catch((err)=>{
//     console.log(err)
// })

// async await is a good way of writing promises

// async function Ex(){
//     await loadding();
//     await collecting();
//     await approving();
//     await approved();
// }

// Ex().catch((err)=>{
//     console.log(err)
// });


// setinterval and clear interval

//let num = 0;
// setInterval(fun,2000)
//     function fun(){
//         num = num+1
//         console.log(num)
//     }

// var inter = setInterval(fun,1000)

// function fun(){
//     let date = new Date().toLocaleTimeString()
//     console.log(date)
    
// }

// setTimeout(()=>{
//     clearInterval(inter)
// },10000)









