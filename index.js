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
multiplesOfThreeOrFive();