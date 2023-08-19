/*Write a program that calculates the percentage.
 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
 - Write a program that checks if the given year is leap year or not.
 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
Where the tax amount will be calculated by the amount of bill.*/
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// celsius=((fahrenhite-32)*5)/9
// fahrenhite=(celsius*9)/5+32
// By using nested if statement
let fahrenhite:number=10;
let celsius:number=20;
// let value="fahrenhite,celsius";
if(celsius){
    console.log(`temrature in celsius is`,((fahrenhite-32)*5)/9)

 if (fahrenhite)
{
    console.log(`temprature in fahrenhite is`,((celsius*9)/5+32))
}
}
///////// Write a program that calculates the percentage.
let a:number=100;
console.log(`the percentage of given number is` , (a/100),'percent')
// /////Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let price:number=99;
if(price>100){
    console.log(`your price of the product after getting 10% discount is`,(price-(price*0.1)))
}
else if(price<=100)
{

    console.log(`your price of the product after getting 5% discount is`,(price-(price*0.05)))
}
// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
let age:number=36;
if(age<=12){
    console.log("child")
}
else if(age>12 && age<=19){
    console.log("teenager")
}
else if(age>19)
{
    console.log("Adult")
}
// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

let tempt:number=-30;
if(tempt>=10 && tempt<=20){
    console.log("weather is pleasent outside ")
}
else if (tempt>20 && tempt<=35){
    console.log("weather is sunny outside ")
}
else if (tempt>35 && tempt<=60){
    console.log("weather is hot outside ")
}
else if (tempt>-55 && tempt<10){
    console.log("weather is cold outside ")
}
//  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let a1:number=17;
if(a1%3==0){
    console.log("the given number is divisible by 3")
}
else if(a1%5==0){
    console.log("the given number is divisible by 5")
}
else if( a1%3==0 && a1%5==0 ){
    console.log("the given number is divisible by both 3 and 5")
}
else if(a1%3!=0 && a1%5!=0){
    console.log("the given number is not divisible by both 3 and 5")
}
//  - Write a program that checks if the given year is leap year or not.
let year:number=29;
if(year%4==0)
{
    console.log("it is a leap year ")
}
else
{
    console.log("it is not a leap year")
}
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
let day:number=7;
if(day==1){
    console.log("it is a monday");
}
    else if(day==2){
  console.log("it is a tuesday");
    }
  else if(day==3){
    console.log("it is wednesday");
  }
   else if(day==4){
console.log("it is thursday");
   }
else  if(day==5){
 console.log("its friday");
 }
else if(day==6){
 console.log("its saturday");
   }
    else if(day==7){
  console.log("its sunday")
   }
    //  Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
let units:number=501;
if(units>100 && units<=200){
    console.log('the cost of electricity bill is',units*10.20+(units*10.20)*0.10 )
}
else if(units>200 && units<=500)
{
    console.log('the cost of electricity bill is',units*15.45+(units*15.45)*0.15)
}
if(units>500){
    console.log('the cost of electricity bill is',units*17.33+(units*17.33)*0.25)
}
///////// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
 let a2:number=2;
//  Math.trunc is used to remove ecimal point after division
let weeks:number=Math.trunc(a2/7);
let days:number=a2%7;
console.log(weeks,"weeks and" ,days,"day")
////