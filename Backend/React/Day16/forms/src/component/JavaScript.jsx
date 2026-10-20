import React from 'react'

const JavaScript = () => {
      //task-1
//  Find Second Largest Number
// let arr=[10,45,20,45,30]
// let Largest=0
// let second=0
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>=Largest){
//     second=Largest
//     let temp=second
//     Largest=arr[i]
//   }else if(Largest >=second){
//   second=arr[i]
//   }

// }
// console.log(second);
// console.log(Largest);

//task-2
// Remove Duplicate Numbers
// let num=[1,2,2,3,4,4,5]
// let result=[]
// for(let a=0;a<num.length;a++){
//   let count=0
// for(let b=a;b<=num.length;b++){
//   if(arr[a]===arr[b]){
//     count++
//   }
 
// }
//  if(count===1){
//     result.push(num[a])
//   }
// }
// console.log(result);

//task-3
//Count vowels
// let char="banana"
// let ans=""
// for(let d=0;d<char.length;d++){
//   ans=char[d]
//   if(ans==="a"||"e"||"i"||"o"||"u"){
//      ans=ans+char[d]
//   }
// }
// console.log(ans);

//task-3
// Count Character Frequency
//  let char = "banana";

// for (let d = 0; d < char.length; d++) {
//   let count = 0;
//   let found = false;
//   for (let k = 0; k < d; k++) {
//     if (char[d] === char[k]) {
//       found = true;
//       break;
//     }
//   }
//   if (!found) {
//     for (let c = 0; c < char.length; c++) {
//       if (char[d] === char[c]) {
//         count++;
//       }
//     }

//     console.log(char[d], count);
//   }
// }

//task -4
// Employee Salary Filter
// let arr=[{name:"Devil",salary:30000},
//   {name:"Jack",salary:40000},
//   {name:"John",salary:20000},
//   {name:"Mick",salary:10000}
// ]
// let highSalary=arr.filter((e)=>e.salary>=30000)
// let tSalary=0
// let totalSalary=arr.map((e)=>tSalary+=e.salary)

//task-5
//Reverse Words Without reverse()
// let name="I Love JavaScript"
// let letter=""
// let result=""
// for(let i=0;i<name.length;i++){
//   if(name[i]!==" "){
//     letter+=name[i]
//   }else {
//     if(result===""){
//     result=letter
//   }else{
//     result=letter+" "+result
//   }
//   letter=""
// }
// }
// if(result===""){
//   result=letter
// }else{
//   result=letter+" "+result
// }
// console.log(result)
  return (
    <>
    {/* <h1>Task-4</h1>
   {highSalary.map((e,i)=>(
    <div>

      <h1>Name:{e.name}</h1>
      <h1>Salary:{e.salary}</h1>
    </div>
   ))}
   <h1>Total Salary:{tSalary}</h1> */}
    
    </>
  )
}

export default JavaScript