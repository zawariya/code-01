/*import promptsync from 'prompt-sync';
// const prompt=promptsync();
// const name=prompt("enter your name ")
// console.log(`your name is,${name},and you can vote`)
let prompt= promptsync();
let units:number=prompt("");
if(units>100 && units<=200){
    console.log('the cost of electricity bill is',units*10.20+(units*10.20)*0.10 )
}
else if(units>200 && units<=500)
{
    console.log('the cost of electricity bill is',units*15.45+(units*15.45)*0.15)
}
if(units>500){
    console.log('the cost of electricity bill is',units*17.33+(units*17.33)*0.25)
// import readline from 'readline'

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter something: ', (userInput) => {
//   console.log('You entered:', userInput);
//   rl.close();
// });*/
// function sum(num1:number,num2:number){
//     // let num1:number=20;
//     // let num2:number=30;
//     let result:number=num1+num2;
//     console.log("result is",result)
//     return result
// }
// let addResult:number=sum(1,2);
// addResult=addResult+10;
// console.log(addResult)
// a function is used to call a program whenever and wherever you want 
// function name(parameter:type) {body of function
    
// }
/*function ihsan():number{
    let a:number=1;
    let b:number=2;
    let sum:number=a+b;
    console.log(sum)
    return sum
}
// for calling we use name of the program
ihsan()
// function ihsan1():string {
//     let ihsanProposal:string="heySadiaILoveYou"
//     // console.log(ihsanProposal)
//     return ihsanProposal
// }
// let answereToProposal:string=ihsan1();
// answereToProposal=answereToProposal+ "iLoveYouTo"
// console.log(answereToProposal)
// console.log(answereToProposal)
// function ihsan1() {
//     var ihsanProposal:string="heySadiaILoveYou"
//     // console.log(ihsanProposal)
//     return ihsanProposal
// }
// var answereToProposal:string=ihsan1();
// answereToProposal=answereToProposal+ "iLoveYouTo"
// // console.log(answereToProposal)
// Arrow Function
var multiply=(a:number , b:number):number=>{
    // var a:number=2;
    // var b:number=3;
  var result:number=(a*b);
  console.log(result)
  return result
}
multiply(2,3)
var multiplyadd:number=multiply(5,6);
multiplyadd=multiplyadd+9;
console.log(multiplyadd)*/
// //Array
// to declare multiple variable in asingle line Example
// let todos:string[]=["ihsan","mohsin","kashif","zaheer"];
// // // console.log(names[1]);
// // let a3:number[]=[1,2,3,4,5,6,7,8]
// // let result:number=(a3[1]+a3[4]);
// // console.log(result)
// // to add value at the end in result we use push
// // names.push("ihsan");
// // console.log(names[1]);
// // to remove value at the end in result we use push
// // variable name with Pop()
// // to add value at the first in result we use push
// // shift with variable name
// // to remove value at the first in result we use unshift
// todos.slice(2,0,"ali");
// let index:number=1;
// while(index<=10){
//     let result:number=5*index;
//     console.log("5",+5+ "index", +index+"="+result+)
//     index=index+1
// }
var hf:string[]=['ali','ahmad','azhar','zawariya','nushwa','abdullah']
// hf.push('raza');
hf.splice(2,1,'lunch')
// hf.push('ihsan')
console.log(hf)

// hf.pull() 
var todos:string[]=['ali','ahmad','azhar','zawariya','nushwa','abdullah']
todos.unshift("sadia")//to add value in first place
todos.shift();// to remove value from first place
console.log(todos.length)
if(todos.length%2==0){
    // to round off division Math.trunc,Math.round,Math.float is used
    let centerIndex:number=Math.trunc(todos.length/2)
    todos.splice(centerIndex,2);
    console.log(todos);
}
else
{
    let centerIndex:number=Math.trunc(todos.length/2);
    todos.splice(centerIndex,1);
    console.log(todos);
}
let b:number=1;
 while(b<=10){
    let a3:number=5;
let result:number=a3*b;
console.log(+a3+"*"+b+"="+result);
// console.log(`${a3}*${b}=${result}`)
b+=1;
 }
//  let enterYear:number=1947;
//  while(enterYear<=1971){
//     if(enterYear-1947==0){
//         console.log("its your 1st independence day")
//     }
//     else if(enterYear-1947==1){
//         console.log("its your 2nd independence day")
//     }
//     else{
//         console.log(enterYear,"its your",enterYear-1947+1,"indepndence day")
//         enterYear++
//     }
// let votingRight=(age:number)=> {   //Arrow function
//     if(age>=18){
// console.log("you can vote")
//     }
//     else{
//         console.log("you cannot vote")
//     }
// 