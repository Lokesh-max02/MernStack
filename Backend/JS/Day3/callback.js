//task 1
const createBankAccount=()=>{
    let balance=5000
    return ()=> {
         console.log("Account Balance:", balance)
         }
    
}
let outsideBalance=50000
console.log("outside:",outsideBalance);
   
let balances=createBankAccount()
balances()

//task 2
const createAccount = () => {
     let balance = 1000;
      return (amount) => {
         balance = balance + amount
          console.log("Deposit Amount:", amount)
           console.log("Current Balance:", balance)
         }
         }
  

let amounts=createAccount()
amounts(500)
//task 3
const createCounter=()=>{
    let count=0
    const increament=()=>{
        count++
      
        
    }
     const decreament=()=>{
        count--
      
        
    }
    const getCounter=()=>{
        console.log(count);
        
    }
    return {increament,decreament,getCounter}
   
}
let count=1000
console.log(count+count);

let counter=createCounter()
counter.increament()
counter.increament()
counter.decreament()
counter.getCounter()
//tas 4
const createEmployee=(name,initalSalary)=>{
    
    const names=()=>{
        console.log(name);
        
    }
    const salary=()=>{
        console.log(initalSalary);
        
    }
    const increaseSalary=(amount)=>{
       if(initalSalary>=0){
        initalSalary +=amount
        console.log(initalSalary);
        
       }
    }
    return {names,salary,increaseSalary}
}
let employee=createEmployee("Lokesh",23000)
employee.names()
employee.salary()
employee.increaseSalary(5000)
//for loop to find square
// const square=(number)=>{
//    const find=()=>{
//     for(let i=0;i<=number;i++){
//         let result=i*i
//         console.log(result);
        
//     }
//    }
//     return find
// }
// let answer=square(7)
// answer()
// the loop start with i=0
// then i*i means 1*1=1
// And  2*2=4
// stop until the i<=number like 5<=5
// 1,4,9,16,25


