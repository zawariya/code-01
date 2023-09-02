"use strict";
// Assignment for the week:
//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
//  - Write a program that uses a function to find the largest element in an array of numbers.
// 01
/*let sumOfEven=(n:number)=>{
    let s:number=0;
    for(let i=0;i<=n;i++){
        if(i%2==0){
        s+=i;
    }
    }
    console.log(s)
    return s;
    }
    console.log(`sum of even numbers is ${sumOfEven(30)}`)
    //  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
    // 002
    let even:number[]=[1,3,5,6,7,8,9,10]
    for(let i=0;i<even.length;i++){
       if (even[i]%2!=0){
          even.splice(i,1)
          i--;
       }
    }
    console.log(`Array of even number is ${even}`)
    //  - Implement a program that uses a loop to iterate through an array of numbers
    //  and remove all the even numbers from them and just leave the odd ones
    // 003
    let odd:number[]=[1,2,4,5,6,7,8,9]
    for (let index = 0; index < odd.length; index++) {
    if(odd[index]%2==0){
       odd.splice(index,1);
       index--;
    }
    }
    console.log(`Array of odd number is ${odd}`)
    //  - Write a program that defines a function to calculate the area of a circle.
    // The function should take the radius as input and return the calculated area.
    // 004
    let Area=(radius1:number):number=>{
       // let radius2:number=radius1;
    let result:number=(22/7)*(radius1*radius1);
    console.log (result)
    return result
    }
    console.log(`Area of circle is ${Area(2)}`)
    //  - Develop a program that reads a list of grades and uses the splice method
    // to remove failing grades (below 50) from the array.
    // 005
    let result=(grades:number[])=>{
       for (let index = 0; index < grades.length; index++) {
          if(grades[index]<50){
          grades.splice(index,1)
             index--;
          }
       }
       console.log(grades)
       return grades;
    }
    console.log(result([70,60,50,49,47,65]))
//  - Write a program that uses a function to find the largest element in an array of numbers.
// 006
let largest=(digit:number[])=>{
   let s:number=digit[0]// we consider the first element of array is large
   for (let index = 0; index < digit.length; index++) {
      if(digit[index]>s){
         s=digit[index];
         index--;
      }
  }
  console.log(s);
  return s;
}
console.log(largest([5,2,7,3,8,9,-1,0]))
//  - Write a program that uses a function to find the largest element in an array of numbers.
// 007
let smallest=(digit:number[])=>{
   let s:number=digit[0]// we consider the first element of array is large
   for (let index = 0; index < digit.length; index++) {
      if(digit[index]<s){
         s=digit[index];
         index--;
      }
  }
  console.log(s);
  return s;
}
console.log(smallest([5,2,7,3,8,9,-1,0]))*/
//  - Write a program having an array of numbers 
//  if the number is negative it should remove the negative number from the array.
let negative1 = (neg) => {
    for (let index = 0; index < neg.length; index++) {
        if (neg[index] < 0) {
            neg.splice(index, 1);
            index--; // this will bring back index value to "0"
        }
    }
    console.log(neg);
    return neg;
};
console.log(negative1([-1, -2, 3, -4, -5, 6]));
// function remove(negative:[]) {
// }
