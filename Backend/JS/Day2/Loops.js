//task 1
for(let a=1;a<=10;a++){
    console.log(a);
    
}
// task 2
for(let n=1;n<=20;n++){
    if(n%2==0){
        console.log(n);
        
    }
}
// task 3
let num=5
let result=0
for(let b=1;b<=10;b++){
result=b*num
console.log(num+"*"+b+"="+result);

}
//task 4
for(let i=0;i<=5;i++){
    let row=""
    for(let j=1;j<=i;j++){
    row +="*";
}
console.log(row);

}
//task 5
// patern printing
for(let i=1;i<=5;i++){
    let num=""
    for(let j=1;j<=i;j++){
 num +=j 
}
console.log(num);
}
//num=""
// first i=1,
// check 1<=5 true,
// then run inner loop
// j =1,check 1<=1 true
// num+=1
// print 1
//num=""
// first i=2,
// check 2<=5 true,
// then run inner loop
// j =1,check 1<=2 true
// num+=1
//j=2,check 2<=2 true
// num+=2
// 1
// 12
//num=""
// first i=3,
// check 3<=5 true,
// then run inner loop
// j =1,check 1<=2 true
// num+=1
//j=2,check 2<=2 true
// num+=2
//j=3,check 3<=3 true
// num+=3
// 1
// 12
// 123
//it will until i=5 condition satisfy 5<=5 it will run
