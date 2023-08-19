"use strict";
// var a:number=2;
// var b:number=2;
// //let num1:number=13
// var result:boolean=(a==b)
// console.log(result)
// var username:string="is a bad boy"
// //Template litteral example
// var username1:string=`ihsan ul haq ${username} `
// console.log(username1);
// //To check the data type of syntax
// let a=10;
// console.log(typeof a)
// //too calculate exponential
// let userName1:number=2;
// let userName2:number=2;
// console.log(userName1**userName2)
//Modulus operator
// let userName:number=2;
// let userName1:number=2;
// let result:number=userName**userName1;
// console.log(userName%userName1);//
// ////Modulus operator
// // Use of Increment and Decrement Operator
// let user:number=2;
//  user -=15
// console.log(user)
// let user1:number=2;
//  user1 +=15
// console.log(user1)
// Equal operator
// let a1:Number=3;
// let a2:Number=3;
// let any:boolean=a1==a2;
// console.log(any)
// // not Equal operator
// let b1:Number=3;
// let b2:Number=4;
// let any1:boolean=b1!=b2;
// console.log(any1)
// let z1:number=18;
// console.log(z1>=18)
// let a1:Number=3;
// let a2:Number=4;
// let any:boolean=a1===a2;
// console.log(any)
// practical example of logic operator
// let age:number=18;
// let nationality:string="pakistani";
// let votingRight:string="you can vote";
// let z1:boolean= (age>=18) && (nationality =="pakistani") && votingRight=='you can vote';
// console.log(z1);
// let user:string="pakistani";
// let r1:string=`you can vote &{user}`;
// let age:number=18;
// let result= age<18 && r1;
// console.log(result);
// let a:number=2;
// let a1:number=5;
// a -=10;
// a1 +=8;
// console.log(a1)
// console.log(a)
// console.log(a==a1)
// console.log(a!=a1)
// console.log(a<=a1)
// console.log(a>=a1)
/*let a1:number=2;
let a2:number=5;
let a3:number=5;
let a4:number=5;
let a5:number=5;
let result1:number=a1+a2+a3+a4+a5;
let result2:number=a1-a2-a3-a4-a5;
let result3:number=a2%a4;
let result4:number=(a1+a5)/2;
console .log(result1,result2,result3,result4)*/
// let country=prompt(`where do you live `)
// let age:number=Number(prompt(`enter your age`))
// if(country=='pakistan')
//     if(age>=18){
//         console.log(`you can vote`)
//     }
//     else{
//         console.error(`you cannot vote`)
//     } else{
//         console.log(`you age is invalid`)
//     }
// let a:number=2;
// let b:number=2;
// let u1:number=8;
// let u2:number=9;
// console.log(a==b || u1==u2)
// console.log(a==b && u1==u2)
// to calculate the area of rectangle
/*let lengthOfRectangle:number=2;
let widthOfRectangle:number=4;
let area:number=lengthOfRectangle*widthOfRectangle;
console.log(area);
// to calculate the volume of cube
let lengthOfCube:number=2;
let widthOfCube:number=4;
let heightOfCube:number=6;
let volume:number= lengthOfCube*widthOfCube*heightOfCube;
console.log(volume)
// To check given number is positive or negative
let a:number=-1;
let positive:string="it is a positive number"
let negative:string="it is a negative number"

if(a>0)
{
    console.log(positive)
}
else
{
    console.log(negative)
}
//To check given number is even or odd
let a1:number=5;
let even:string="it is a even number"
let odd:string="it is a odd number"
 let total:number=(a1%2)
if(total==0)
{
    console.log(even)
}
else
{
    console.log(odd)
}
//to check you can vote or not
let age:number=17;
let c1:string="you can vote"
let c2:string="you cannot vote"
if(age>=18){
    console.log(c1)
}
else{
    console.log(c2)
}
//for mathematical calculation
// let a2:number=10;
// let a3:number=5;
// let a4:number=3;
// let a5:number=2;
// let a6:number=4;
// let a7:number=7;
// let result:number=((a2+a3)*a3-a5)/((a6%a4)-a7);
// console.log(result)
// console.log(((10 + 5) * 3 - 2) / (4 % 3)  - 7)
// // Voting right in pakistan
// let age1:number=19;
// let pakistani:string="yes"
// // let nationality:string="I am pakistani"
// let domicile:string="pakistan"
// let idCard:string="Yes"
// let identification:string="Yes i have  id card"
// if(age1>=18){
//     console.log(nationality)}
    // if(nationality==pakistani){
        // // console.log(nationality)}
        // if(idCard==domicile){
        //     console.log(identification)
        // }
// switch case statement used only for comparison operator
let section:string="B"
switch (section) {
    case "A":
        console.log("your section is A")
        break;

    default:
        console.log("Your section is not A")
        break;
}
*/
function sum(num1, num2) {
    // let num1:number=20;
    // let num2:number=30;
    let result = num1 + num2;
    console.log("result is", result);
    return result;
}
sum(2, 3);
let addResult = sum(1, 2);
addResult = addResult + 10;
console.log(addResult);
// let c:number=1;
// let d:number=5;
// while(d>5){
//     c*=d;
//     d--;
// }
