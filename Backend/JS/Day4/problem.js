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

// //leetcode 9
// let palindrome=(num)=>{
//     let result=0
//     let original=num 
//     if(num < 0){
//         return false
//     }
//     while(num > 0){
//         let digit=num%10
//         result=result*10+digit
//         num=Math.floor(num/10)
      

//     }
//     if(result===original){
//         return true 
//     }else{
//         return false; 
//     }
// }
// palindrome(10);


// //Find the missing number
// let arr=[2,3,5,6,8,9]
// let result=0
// for(let i=0;i<arr.length-1;i++){
// result=arr[i]+1
// if(result!==arr[i+1]){
//     console.log(result);
    
// }

//     }
    
// // 1.start the loop from index 0
// // 2.Then add arr[i]+1 means the i=2+1 store in result
// // 3.check if result not equal to arr[i+1] means result=3 and arr[i+1]=3
// // 4.repeat the process until condition satisfy



// //Count how many times a number appears
// let arrays=[2,5,2,8,2,10]
// let target=2
// let count=0
// for(let t=0;t<arrays.length;t++){
//     if(target===arrays[t]){
//         count++

//     }
// }
// console.log(count);
// // 1.start the array from index=0
// // 2.Then condition t < arrays.length to run 
// // 3.if arrays[i]==target like 2==2 count++
// // 4.return count=1

// //leetcode 1672
// let account=[[1,2,3],[4,5,6],[5,3,2]]
// let total=0
// let maxWealth=0
// for(let i=0;i<account.length;i++){
//     total=0
// for(let j=0;j<account[i].length;j++){
   
    
//  total+=account[i][j]
 
 
// }
// if(maxWealth < total){
//     maxWealth=total
   
    
// }

// }
// console.log(maxWealth);


//leetcode 28:find-the-index-of-the-first-occurrence-in-a-string
// const strStr=(string,copy)=>{
// for(let s=0;s<=string.length-copy.length;s++){
//     let r;
//     for(r=0;r<copy.length;r++){
//      if(string[s+r]!==copy[r]){
//       break
//      }
//     }
//   if(r===copy.length){
//     return s;
//   }
// }
// return -1;
// }

// strStr("a","a");
// 1. The outer loop checks every possible starting position s.
// 2. The inner loop uses r to compare each character of copy.
// 3. string[s + r] is compared with copy[r]. If they don't match, break stops the inner loop.
// 4. If r === copy.length, every character matched, so return s.
// 5. If the outer loop finishes without finding a match, return -1.
//Find the longest Consecutive sequence in array.
// const longest = (arr) => {
//     let count = 1
//     let longestCount = 1
//     for (let a = 0; a < arr.length - 1; a++) {
//         if (arr[a] + 1 === arr[a + 1]) {
//             count++
//             if (count > longestCount) {
//                 longestCount = count
//             }
//         } else {
//             count = 1
//         }
//     }
//     console.log(longestCount)
// }
// longest([1, 2, 3, 5, 6, 7, 9, 0])

// 1.The outer Loop check the condition upto a < arr.length-1 starting position a=0.
// 2.if condition checks index of array arr[a] + 1 is equals to arr[a + 1] means a+1 change 2 ... then count++.
// 3.if condition check which count is longest that can stored in longestCount else count equal to 1.
// 4. At last return the longestcount.
// //Find all duplicate elements
// let arr = [2, 5, 3, 2, 8, 5, 9, 3];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             console.log(arr[i]);
//         }
//     }
// }
// 1.start the outer loop run  i<arr.length then first i=0 0th index means arr[i]=2
// 2.then inner loop run start with i+1 mean i=0+1,j=1 check index 1
// 3.after the if condition check arr[i]===arr[j] mean return arr[i]