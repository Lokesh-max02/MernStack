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


//Find the second largest number without sort()
// const secondLarge=(arr)=>{
//     let maxNum=arr[0]
//     let secondNum=0
//     for(let a=1;a<arr.length;a++){
//         if(arr[a]>maxNum){
//        secondNum=maxNum
//        maxNum=arr[a]
//     } else if (arr[a] > secondNum) {
//             secondNum = arr[a]
//         }
    
//     }
//     console.log(maxNum);
//     console.log(secondNum);
    
    
// }
// secondLarge([23,45,78,102,101,34,90])
//1.start with for loop in a=1 and loop run until reach a< arr.length
//2.the if condition check arr[a]>maxNum like 45 > 23 check it true so store 45 in maxNum
//3.then else if condition check arr[a]>secondNum in between maxNum value store in secondNum and current value also store in largeNum
//4.It will check arr[a]>secondNum  means store arr[a] in secondNum
//return the second largest number and maximum Number

//Sorting a array 
// const moveZero=(num)=>{
    
// for(let t=0;t<num.length-1;t++){
//    for(let y=num.length-1-t;y>= 0;y--){
//     if(num[y]<num[y+1]){
//         let temp=num[y]
//         num[y]=num[y+1]
//         num[y+1]=temp
//     }
//    }
// }
// console.log(num);
// }
// moveZero([3,4,6,0,5,3,0,9,87,0])

//Move all zeros to the end
// const Zeros=(arr)=>{
//     let position=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             let temp=arr[position]
//             arr[position]=arr[i]
//             arr[i]=temp
//             position++
//         }
//     }
//     console.log(arr);
    
// }
// Zeros([3,5,8,0,2,3,5,0,67,55,0])
//1.start the loop index =0 and condition satisfy i<arr.length until run 
//2.then if condition arr[i]!==0 not equal to 0 it will swap the value
//3.the temp is temporary store the position like 0 then arr[position]=arr[i] if arr[i]=3 it store position
//4.after arr[i]=temp then position++ repeat the process and return arr

//container with most water
let arr = [3,5,7,9,3,4,7,8]
let capacity = 0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
         console.log(i,j);
        
        let min 

        console.log(min);
        
         if(arr[i]<arr[j]){
             min = arr[i]
            //  console.log(`capacity${capacity}`);
            
         }
         else{
              min = arr[j]
            //  console.log(`else capacity${capacity}`);

         }


         let base = j-i

         console.log('min',min);

         console.log('base',base);

         
        let area = base * min

      console.log('area',area);
      

         if(capacity<area){
             capacity=area
         }
         console.log(capacity);
         
    }
}

 console.log(capacity);