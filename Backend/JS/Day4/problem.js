//leetcode 123
// let maxProfit=(k,prices)=>{
//     let min=prices[0]
//     let minPrice=0
//     let maxprice=0
//     for(let i=0;i<prices.length;i++){
//         if(prices[i]<=min){
//           minPrice=prices[i]
       
          
          
          
//         }
//     }
//     for(let j=0;j<prices.length;j++){  
//         if(maxprice<=prices[j]){
//             maxprice=prices[j]
//         }
//     }

//     let profit=maxprice-minPrice
//     console.log(maxprice);
//     console.log(minPrice);
    
    
//  console.log(profit);
 
 
   
    

// }
// maxProfit(2,[10,20,5,6,78,9])


//leetcode 7
// const reverse=(num)=>{
//     let sign =1
//     let result=0
//     if(num < 0){
//    sign=-1
//    num=-num
//     }
// while (num > 0) {
//     let digit=num%10
//     result=result*10+digit
//     num=Math.floor(num/10)
   
    
//    console.log(result);   
// }   
//  result=result*sign
//   if (result < -2147483648 || result > 2147483647) {
//         return 0;
//     }
//  return result
// };



// reverse(-120)

//leetcode 9
let palindrome=(num)=>{
    let result=0
    let original=num 
    if(num < 0){
        return false
    }
    while(num > 0){
        let digit=num%10
        result=result*10+digit
        num=Math.floor(num/10)
      

    }
    if(result===original){
        return true 
    }else{
        return false; 
    }
}
palindrome(10);


//Find the missing number
let arr=[2,3,5,6,8,9]
let missing=0
let result=0
for(let i=0;i<arr.length;i++){
    for(let j=1;j<i;j++){
result=arr[i]+1

    }
    
    
}
console.log(result);

//Count how many times a number appears
let arrays=[2,5,2,8,2,10]
let target=2
let count=0
for(let t=0;t<arrays.length;t++){
    if(target===arrays[t]){
        count++

    }
}
console.log(count);
// 1.start the array from index=0
// 2.Then condition t < arrays.length to run 
// 3.if arrays[i]==target like 2==2 count++
// 4.return count=1


