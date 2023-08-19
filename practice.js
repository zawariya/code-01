"use strict";
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
let user = (b, c, d) => {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    a.splice(b, c, d);
    console.log(a);
    return a;
};
user(6, 4, 8);
// // 2  Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
/*let shopping:string[]=['super','tuc','peanut','special','zeera plus',]//1st way
let cart=(itemIndex:number,itemRemove:number,itemAdd:string)=>{
    shopping.splice(itemIndex,itemRemove,itemAdd)
    console.log(shopping)
    console.log(shopping.length)
     return shopping
}
cart(2,0,'bread')*/
// // 2nd way
// let shopping1:string[]=['super','tuc','peanut','special','zeera plus',]//1st way
// let cart1=(itemIndex:number,itemRemove:number,itemAdd:string)=>{
//     if(shopping==itemAdd)
//     shopping.splice(itemIndex,itemRemove,itemAdd)
//     console.log(shopping)
//     console.log(shopping.length)
//     // return shopping
//}
// cart(2,0,'bread')
// // Write a program that uses a while loop to print the first 25 integers.
let c4 = 0;
while (c4 <= 25) {
    console.log("+_", c4);
    c4++;
}
// // - Write a program that uses a while loop to print the first 10 even numbers
let c1 = 1;
while (c1 <= 20) {
    if (c1 % 2 == 0) {
        console.log(c1);
    }
    c1++;
}
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
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
        d--; //decrement operator
    }
    console.log(c); //if we call the result outside the loop it will keep multiplying the number untill 
} //condition reach 
factorial(6);
let c = 1;
let d = 5;
while (d > 1) {
    c *= d; //for multiplication
    console.log(c); //if we call it from inside the loop it will display each multiplication result 
    d--; //seperately like 5,20,60,120
}
//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let s = [1, 2, -3, 3, 4, 5, -6, 7, -7];
