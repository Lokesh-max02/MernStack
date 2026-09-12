//task 1
const createEmployee=()=>{
    let salary=20000
    return (amount)=>{
       salary+=amount
       return salary
       
    }
}
let salarys=createEmployee()
console.log("updatedSalary:",salarys(3000));
console.log(salarys(4000));

//task 2
const createStock=()=>{
    let stock=10
    return{addStock:(add)=>{
        stock+=add
        console.log(stock);
        
    },sellStock:(sell)=>{
        if(sell>stock){
            console.log("Not Enough");
            
        }else{
  stock-=sell
  console.log(stock);
  
    }
}
}
}
let product=createStock()
product.addStock(10)
//Find all pairs whose sum equals the target
// let arr=[1,13,14,5,6,7,8]
// let target=9
// let result=0
// for(let a=0;a<=arr.length-1;a++){
//     for(let b=1;b<=arr.length-1;b++){
//         result=arr[a]+arr[b]
//         if(result===target){
//             console.log(arr[a]+"+"+arr[b]+"=",result);    
//         }
//     }   
// }
// outer loop run arr.length-1 and it take  first index value 0
// then inner loop run arr.length-1 like last value it take index value 1
// then check arr[a]+arr[b] =target check it 
// if it is equal return result
// loop run until length-1 of both loop

