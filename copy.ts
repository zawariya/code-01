// // Write a program that uses filter to remove all negative numbers from an array of numbers
// let arr:number[]=[1,-3,2,-4,-5,6,-7,8,9];
// let modified=arr.filter((value)=>{
//    return value>0;
// })
// console.log(modified)
// // Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
// // 002
// let arr1:number[]=[1,2,3,4,5]
// let modified1=arr1.map((value)=>{
// return value*2;
// })
// console.log(modified1)
// // Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
// //  use the filter method to create a new array containing only the fruits with more than 5 characters.
// // 003
// let arr2:string[]=['apple','banana','cherry','date','grape']
// let modified3=arr2.filter((value)=>{
//    return value.length>5
// })
// console.log(modified3)
// // Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //  use the map and filter methods together to create a new array containing the squares of even numbers.
// // 004
// let arr3:number[]=[1,2,3,4,5,6,7,8,9,10]
// let evenNumber=arr3.filter((value)=>{
//       return value%2==0;
//    })
//    let square=evenNumber.map((index)=>{
//       return index*index;
//    })
//    console.log(square)
//    // Given an array of numbers [3, 6, 9, 12, 15, 18],
//    //  use the map and filter methods together to create a new array containing the doubled values of odd numbers
//    // 005
//    let newArray:number[]=[3, 6, 9, 12, 15, 18]
//    let oddNumber=newArray.filter((value)=>{
//       return value%2!=0;
//    })
// let doubled=oddNumber.map((value)=>{
//    return value*2;
// })
// console.log(doubled);
// // Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array
// //  where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// // 006
// let celsius2:number[]=[0, 10, 20, 30, 40]
// let Fahrenheit=celsius2.map((value)=>{
//    return (value*9/5)+32;
// })
// console.log(Fahrenheit)
// // Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"],
// //  use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
// // 007
// let names:string[]=["Alice", "Bob", "Charlie", "David", "Emily"]
// let exclamation=names.map((value)=>{
//    return value +"!"
// })
// console.log(exclamation)