// Assignment for the week is:
 /*- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
 - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
 - Write a program that uses a while loop to print the first 25 integers.
 - Write a program that uses a while loop to print the first 10 even numbers.
 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.*/
// 1 Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
/*let user=(b:number,c:number,d:number)=>{
    var a:number[]=[1,2,3,4,5,6,7,8,9,10];
    a.splice(b,c,d);
    console.log(a)
    return a
}
user(6,4,8)
// // // 2  Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let shopping1:string[]=['super','tuc','peanut','special','zeera plus',]//1st way
let addcart=(itemIndex:number,itemRemove:number,itemAdd:string)=>{
    shopping1.splice(itemIndex,itemRemove,itemAdd)
    console.log(shopping1)
    console.log(shopping1.length)
     return shopping1
}
// cart(2,0,'bread')
// // // 2nd way
let shopping2:string[]=['super','tuc','peanut','special','zeera plus',]
var cart=(itemIndex:number,itemRemove:number,itemAdd:string)=>{
    shopping2.splice(itemIndex,itemRemove,itemAdd)
    if(itemAdd){
        console.log(`item_added is'${itemAdd},new item is,${shopping2}`)
    }
    else if(itemRemove){
        console.log(`item_remove is ${itemRemove} remaining item is ${shopping2}`)
    }
   
    console.log(`updated quantities is ${shopping2.length}`)
   return shopping2
}
// // // Write a program that uses a while loop to print the first 25 integers.
let c4:number=0;
while (c4<=25){
   console.log("+_",c4) 
   c4++
}
// // // - Write a program that uses a while loop to print the first 10 even numbers
let c1:number=1;
while(c1<=20){
    if(c1%2==0){
        console.log(c1)
    }
    c1++
}
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 function factorial1(d:number){
   if (d<0){
      console.log("factorial of negative number is not possible")
   }
   if(d==0|| d==1){
      console.log("factorial is",1)
   }
   let c:number = 1;
   while (d> 0) {
       c*=d;
       d--;//decrement operator
   }
console.log(c)//if we call the result outside the loop it will keep multiplying the number untill 
 }//condition reach 
 factorial1(5)
 Sum of all number by using array function

 
let add:number=0;
let list:number[]=[]
for(let m=0; m<=100;m++){
    if(m%2==0){
    add=add+m;
    list.push(m)
    }
}
console.log(add,list)
// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
// function add1(todos:number[]) {
    // let add2:number=0;
    let k=(l:number[])=>{
    let add2:number=0;
    for(let s=0; s<l.length; s++)//here s is the value of index in array which began with 0
    {
        add2+= l[s];
     }
    
     console.log(add2);
     return add2
    }
    // add1(1,)
   console.log(k([1,2,3,4,5,6,7,8,9,10]));*/
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store
//  the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.*/
// let celsius1=(temp1:number)=>{
//     let Fahrenheit:number[]=[]
//     let c:number=0;
//     let result2:number= (c * 9/5) + 32
//     while(true){
//         Fahrenheit+=temp1[c]
//         if(c>-273 && c<273){
//             Fahrenheit+=temp1[c]
//             console.log(result2)
//              return result2
//         }
//         Fahrenheit.push(result2)
//     }
   
// }
// console.log(celsius1(5))
//  - Write a program having an array of numbers 
//  if the number is negative it should remove the negative number from the array.
let negative=(neg:number[])=>{
 for(let index=0;index<neg.length;index++) {
    if(neg[index]<0){
        neg.splice(index,1)
        index--// this will bring back index value to "0"
    }   
}
 console.log(neg)
return neg;
}
console.log(negative([-1,-2,3,-4,-5,6]))
// let remove:number[]=[-1,-2,3,-4,5,-6,7,8,-9]
// let index:number=0;
// for (let index = 0; index < remove.length; index++) {
//     if(remove[index]<0){
//         remove.splice(index,1)
//     }
// }
// console.log(remove)
// let num:number[]=[-1,-2,3,-4,-5,-6,7,8,-9]
// let value=0
// while(value<num.length){
//   if(num[value]<0){
//     num.splice(value,1) 
//    }
//   value++
// }
// console.log(num);