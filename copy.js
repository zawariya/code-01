"use strict";
// let num:number[]=[1,2,-3,4,5,-6,7,8]
// let value=0
// while(value<num.length){
//   if(num[value]<0){
//     num.splice(value,1) 
//    }
//   value++
// }
// console.log(num);
// let shopping:string[]=['super','tuc','peanut','special','zeera plus',]
// var cart=(itemIndex:number,itemRemove:number,itemAdd:string)=>{
//     shopping.splice(itemIndex,itemRemove,itemAdd)
//     if(itemAdd){
//         console.log(`item_added is'${itemAdd},new item is,${shopping}`)
//     }
//     else if(itemRemove){
//         console.log(`item_remove is ${itemRemove} remaining item is ${shopping}`)
//     }
//     console.log(`updated quantities is ${shopping.length}`)
//    return shopping
// }
// cart(2,4,"")
// let sum4=(array:number[])=>{
// array.length
// let z:number=0;
// while(z<array.length){
// // z+=array
// }
// }
// array.length
// while(array.length<=10){
//     array.length++
// }
// console.log(array.length)
// let sumArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sumAll = (sum: number[]) => {
//   let allSum: number = 0;
//   let i = 0;
//   while (i < sum.length) {
//     allSum += sum[i];
//     i++;
//   }
//   return allSum;
// };
// console.log(sumAll(sumArray));
function factorial(d) {
    if (d < 0) {
        console.log("factorial of negative number is not possible");
    }
    if (d == 0 || d == 1) {
        console.log("factorial is", 1);
    }
    let c = 1;
    while (d > 0) {
        c *= d;
        c++; //decrement operator
    }
    console.log(c); //if we call the result outside the loop it will keep multiplying the number untill 
} //condition reach 
factorial(5);
//   
// function processArray(numbers: number[]): number {
//    let sum = 0;
//    for (const num of numbers) {
//        sum += num;
//    }
//    return sum;
// }
// processArray() 
