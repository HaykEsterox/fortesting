"use strict"

//result  == undefined
// let result = alert("true")

//confirm modal //this returns a true or false value esc == false
//  let adult = confirm("are u adult");
// alert(adult);
//
// prompt testing, this returns a value given to text or null /esc == null
// let askAge = prompt('How old are you?');
// let age = (Number(askAge))?askAge:15;
// alert(`you are ${age} years old`);

//if statement
// let question = prompt("tell me or 0 or 1");
//     if(Number(question)==true) {
//         alert(true);
//     }else if(Number(question) !=true){
//         alert(false)
//     }
//short if statement
// let bool = (5>2);
// let question =(bool) ?"true":"false";


//switch case
// let a = "4";
//
// switch (Number(a)) {
//     case (3):
//         alert( 'Too small' );
//         break;
//     case 4:
//         alert( 'Exactly!' );
//         break;
//     case 5:
//         alert( 'Too large' );
//         break;
//     default:
//         alert( "I don't know such values" );
// }

//this trick is for transfering a prompt response to a number


//arrow functions
// let number =n => n*5;
// number(5); //the answer is

//a normal function shoult return a value or the return is undefined

//objects
// let user = new Object();
// user.age = 30;
// user.name = "Armen";
// user.surname= "Sakavyan";

// user[Symbol.toPrimitive] = function (hint) {
//     alert("hint" + hint);
//     return (hint == "string") ? user.name : user.age;
// }
// console.log("age" in user);
// alert( user.noSuchProperty === undefined ); // true means "no such property"
// alert(+user);//hint answer is number

//for loop for objects
// for (let key in user){
//     console.log(user[key]);
// }
//
// let user ={
//     name:"Hayk",
//     surname:"GHazaryan",
//     marks:[5,4,3,2,1]
// }
// console.log(Array.isArray(user.marks));
// for(let key in user){
//     if(Array.isArray(user[key])){
//         for(let x=0;x<user[key].length;x++){
//             console.log(`Hello ${user[key][x]}`);
//
//         }
//     }else{
//         console.log(user[key])
//     }
//
// }
//copy the whole object be like

// let user = {
//     name: "john",
//     surname: "doe",
// };
// let user1 = {
//     age: 25,
//     parent: "diss",
// }
//
// let userClone = Object.assign({}, user, user1)
//
// function loopObj(obj) {
//     let objKeys = [],
//         x = 0;
//     for (let key in obj) {
//         objKeys[x] = obj[key];
//         x++;
//     }
//     return objKeys;
// }
//// console.log(loopObj(userClone));
let obj = {};
console.log(isEmpty(obj));
obj.name="object";
console.log(isEmpty(obj));

function isEmpty(object) {
    let x = 0;
    for (let key in object){
        x++
    }
    return (x>0)?true:false;
}

// let y = [1,2,3,1];
// for (let x = 0 ;x<y.length;x++){
//     console.log(y[x]);
// }


