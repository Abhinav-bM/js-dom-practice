// const a = [[10,15,20],[[35,660,500],[100,200,300]]]

// console.log(a[1][0][1]);

// returning boolean from functions

// function booleanreturn(a, b){
//     return  a < b ;
// }

// console.log(booleanreturn(10, 2));

// accessing object data

// const cat = {
//     "name" : "meow",
//     age : 5,
//     friends : ["cat1","cat2"],
// }

// const check = cat.name;

// console.log(check);

// let a = [1,2,3,4,5]

// a.push(10);

// console.log(a);

// let myArray = ["a","b","c","d"]

// myArray.pop();

// console.log(myArray);

// let myArray = [1,2,3,4,5]

// myArray.unshift(10);

// console.log(myArray);

// let myArray = ["a","b","c"]

// myArray.splice(1,0); //used to remove

// myArray.splice(2,0, "j","k"); //used to add

// console.log(myArray);

// let myArray = [1,2,3,4]

// let newArray = myArray.slice(1); //can used to specify array index start

// console.log(newArray);

// let a = [4,3,2,1,10]

// a.sort(); //used to sort array

// console.log(a);

// let a = [1,2,3,4]

// a.reverse(); //use to reverse array

// console.log(a);

// let myObject = {
//     name : "john",
//     age : 45
// };

// delete myObject.name;

// console.log(myObject);

// let JohnAge = 25;

// if(JohnAge === 45){
//     console.log("you are old");   // used if and else
// }
// else{
//     console.log("you are young");
// }

// let johnAge = 46;

// if(johnAge === 45){
//     console.log("you are old");
// }
// else if (johnAge >=20 && johnAge <=30){
//     console.log("You are young");
// }                                           // used else if
// else if (johnAge >=10 && johnAge <=19){
//     console.log("You are a child");
// }
// else{
//     console.log("You are too old");
// }

/////////SWITCH statement

// let fruit = "banana";

// switch (fruit){
//     case "Apple":
//         console.log("I bought Apple");
//         break;

//     case "Orange":
//         case "Apple":
//             console.log("I bought Orange");
//             break;

//     default :
//         console.log("no fruits found");

////////loop

//for loop
//eg:

// let count = 10;

// for (let i=0; i<=10; i++){
//     console.log(i);
// }

//while loop

//eg:

// let count = 1;

// while (count <= 10){
//     console.log(count);
//     count ++;
// }

// let count = 0;

// do {
//     console.log(count);
//     count ++;
// }while (count <= 10);

// looping array using for loop
// let myArray = ["john","Doe","Jacob"]

// for (let i = 0 ; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

//object looping
// let myObj = {
//     firstname : "john",
//     secondName : "Doe",
//     age : 45
// };

// for (let x in myObj){
//     console.log(myObj[x]);
// }

// function myfunction(a,b){
//    const sum = a+b;
//     return sum;
// } just function tryed.

// console.log(myfunction(10,5));

//boolean true or false

// let x = 5;
// let y = 5;
// let z = 6;

// console.log(x==y);

// type of operator used to find the type of a js variable
// console.log(typeof ["fkjef","fhhfh"]);

// function
// function myfunction(a,b){
//     return a*b
// }

// console.log(myfunction(1,2));

//objects

// const myObj = {
//     firstName : "john",
//     secondName : "Doe",
//     age : 40
// };

// console.log(myObj);

// console.log(myObj.firstName); //accessing object -- objectName.propertyName

// console.log(myObj["secondName"]); //accessing object -- objectName["propertyName"]

// object methods

// const person = {
//     firstName : "john",
//     secondName : "doe",
//     age : 45,
//     fullName : function(){                         //method..............................................
//         return this.firstName+" "+this.secondName;
//     }
// };

// console.log(person.fullName())

// object for..in loop in object

// const person = {
//     firstName : "john",
//     secondName : "doe",
//     age : 45,
// }

// let text = "";

// for (let x in person){
//     text = text + person[x]+ " ";
// }

// console.log(text);

// adding new properties

// const person = {
//     firstName : "john",
//     secondName : "doe",
//     age : 45
// }

// person.id = 110;

// console.log(person);

// nested arrays and objects

// const person = {
//     firstName : "john",
//     lastName : "doe",
//     age : 15
// }

// console.log(Object.keys(person));  //return property names

// console.log(Object.values(person));   // return property values

// console.log(Object.entries(person));  // return an array containing all property of an keyvalue pairs

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// console.log(Object.assign(target,source)); //

//--------------Arrow function---------------------

// normal

// function check (){
//     return "hello world";
// }
// console.log(check());

//eg:arrow

// check = () => "hello world";

// console.log(check());

//eg:arrow

// sum = (a,b) => a + b ;

// console.log(sum(10,12));

// setTimeout(function (){
//     console.log("timer");
// },5000)

// function x (y){
//     console.log("x");
//     y()
// }

// x(function y(){
//     console.log("y");
// })

// setTimeout(function (){
//     console.log("timer");
// },5000)

// function x (y){
//     console.log("x");
//     y()
// }

// x(function y (){
//     console.log("y");
// })

// let count = 0;

// document.getElementById("Click")
// .addEventListener("click", function x (){
//     console.log("button clicked", count++);
// })

// let count = 0;

// function x (y){
//     console.log("x");
//     y()
// }

// x(function y (){
//     console.log("y", count++);
// })

// console.log("hello");

// setTimeout(function (){
//     console.log("Async");
// },0)

// console.log("hey")

// async function x (y){
//     console.log("x");
//     y()
// }

// x(function y (){
//     console.log("y");
// })

``;

// function y (a){
//     return new Promise((resolve, reject) => {
//         if(a > 10){
//             resolve("resolved")
//         }
//         else{
//             reject("Rejected")
//         }
//     })
// }

// async function x (){
//     try{
//         await y(11)
//         console.log("promise succesful")
//     }
//     catch(error){
//         console.error("Promise rejected")
//     }
//     finally{
//         console.log("program executed");
//     }
// }

// x()

// let radius = [3,1,2,4];

// function calcArea (radius){
//     const area = [];
//     for(i=0; i<radius.length; i++){
//         area.push(Math.PI * radius[i] * radius[i])
//     }
//     return area;
// }

// console.log(calcArea(radius));

// const arr = [5, 1, 3, 2, 6]

// function double (x){
//     return x*2
// }

// function triple (x){
//     return x*3
// }

// function binary (x){
//     return x.toString(2)
// }

// let mapedOutput = arr.map((x)=>x*2)

// console.log(mapedOutput);

// let myMap = new Map();

// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');

// console.log(myMap.get('key1')); // Output: 'value1'
// console.log(myMap.size); // Output: 2

// let x = new Map()

// x.set('key1', 'value-x')
// x.set('key2', 'value-y')

// console.log(x.get('key1'));

// let array = [1, 2, 3, 4, 5, 6]
// let odd = array.filter((x) => x % 2 === 0)

// console.log(odd);

// api.createOrder(function (){

//         api.paymentExecution( function (){

//             api.paymentSummary()

//         })
//     }
// )

// let arr = [1, 2, 3, 4, 5]

// console.log(trimmed);

// let cart = ["shoe", "shirt"]

// let promise = createOrder(cart)

// promise.then((x)=>{
//     proceedtoPayment(orderId)
// })

// const GITHUB_API = "http://api.github.com/users/Abhinav-bM";

// const user = fetch(GITHUB_API);
// user.then(function (data){
//     console.log(data);
// })

// const cart = ["shoe", "shirt", "pants"]

// function validate(){
//     return true;
// }

// function createOrder (cart){
//     const pr = new Promise (function (resolve, reject){
//         if (!validate(cart)){
//             const err = new Error("Car is not valid")
//             reject(err)
//         }

//         const id = "1234";
//         if(id){
//             resolve(id)
//         }
        
//     });

//     return pr;
// }   

// const promise = createOrder(cart);

// promise.then(function (orderId){
//     console.log(orderId);
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const cart = ["shoe", "shirt"]



// function validate (cart){
//     return false;
// }



// function createOrder (cart){
//     const pr = new Promise (function (resolve, reject){
        
//         if(!validate(cart)){
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }

//         const orderId = "1234";
//         if(orderId){
//             resolve(orderId)
//         }
//     })
//     return pr
// }

// const promise = createOrder(cart)

// promise.then(function(orderId){
//     console.log(orderId);
// })
// .catch(function(err){
//     console.log(err.message);
// })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function returnPromise (num){
//     const pr = new Promise(function (resolve, reject){
//         if(num > 10){
//             const err = new Error ("Greater than 10")
//             reject(err)
//         }

//         if(num < 10){
//             resolve(" error : Less than 10")
//         }
//     })

//     return pr;
// }


// const promise = returnPromise(3);

// promise
// .then(function(resolve){
//     console.log(resolve);
// })
// .catch(function(err){
//     console.log(err.message);
// })


// function promiseCheck (){
//     return new Promise (function (resolve, reject){
//         // resolve("Resolved");
//         const err = new Error("rejected")
//         reject(err)
//     })
// }

// promiseCheck()
// .then(function(resolve){
//     return resolve
// })
// .then(function(resolve){
//     console.log(resolve);
// })
// .catch(function (reject){
//     console.log(reject.message);
// })

// async function greet (){
//     return "namaste"
// }

// greet()
// .then(function(result){
//     console.log(result);
// })'

// let p = new Promise (function (resolve, reject){
//     setTimeout(()=>{
//         resolve("resolved............")
//     },5000)
// })

// async function handlingPromises (){
//     console.log("Heloooo");

//     const data1 = await p;

//     console.log(data1)

//     console.log("heloo world");

// }

// handlingPromises()

// console.log("Outer asyn await");

// function err (){
//     throw new Error("Error occured")
// }

function chekError (){
    try{    
        
    }catch(err){
        console.log(err.message);
    }
}

chekError()