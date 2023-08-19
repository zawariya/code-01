// let num:number[]=[1,2,-3,4,5,-6,7,8]
// let value=0
// while(value<num.length){
//   if(num[value]<0){
//     num.splice(value,1) 
//    }
//   value++
// }
// console.log(num);
let shopping:string[]=['super','tuc','peanut','special','zeera plus',]//1st way
var cart=(itemIndex:number,itemRemove:number,itemAdd:string,)=>{
    // shopping.splice(itemIndex,itemRemove,itemAdd)
    // let itemUpdate:string=shopping
    if(itemAdd){
        shopping.splice(itemIndex,0,itemAdd) 
        console.log(`item_added is'${shopping},${itemAdd}`)
    }
    else if(itemRemove){
        shopping.splice(itemIndex,itemRemove) 
        console.log('item_remove is',shopping)
    }
   
    // console.log(shopping)
    // console.log(shopping.length)
   return shopping
}
cart(3,1,"0")