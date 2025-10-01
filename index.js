//1
//Code your solutions in this file
function fiveToOneHundred(){
    for(let i= 5;i<101;i++){
        console.log(i);
    }
}
fiveToOneHundred();
//2
// Write a function `multiplesOfThree` that console logs all positive numbers to 100 that is a multiple of 3.
// > Multiples of 3 are: `3, 6, 9, 12, 15, ...`
function multiplesOfThree(){
    for(let i=3 ; i <= 100; i+=3){
        console.log(i)
    }}
multiplesOfThree();
//3
function multiplesOfThreeOrFive(){
    for(let i =0;i<=100;i++){
        if(i%3===0 || i%5===0){
            console.log(i);
        }
    }
}
//4
multiplesOfThreeOrFive();


function untilNum(num){
    for(let i = 0; i <= num; i++){
        console.log(i);
    
    }
}
untilNum(41);
//5
function multiply(a,b){
    return a*b;
}
console.log(multiply(5,5));
//6
function add(a,b){
    if (a===b)
    return ((a+b)*3);
    else return a+b;
}
console.log(add(6,6));
console.log(add(6,5));
//7
function isNegative(n){
    if (n>=0){
        return false;
    }else{
        return true;
    }
}
console.log (isNegative(3));
console.log(isNegative(-2));
//8
function triangleArea(b,h){
    return (b*h)/2;

    } 
     console.log(triangleArea(5,7));
    console.log(triangleArea(6,8));
//9
function betweenTwentyAndFourty(n){
 if(n >20 && n<40){
    return true;
 }else{
    return false;
 }
}
console.log(betweenTwentyAndFourty(20));
console.log(betweenTwentyAndFourty(39));
console.log(betweenTwentyAndFourty(40));
//11 15 16