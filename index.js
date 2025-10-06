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

//11
function printTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);
}
printTime();
//15
function switchLetters(str){
    let newStr ='';
    let data = String(str).toLowerCase();
    let numOfChar = data.length;
    if (data ===' '){
        console.log("");
    }else if (numOfChar <= 1){
        console.log(str)
    }
    else{
        newStr+=data.charAt(numOfChar-1);
        for(let i =1;i < numOfChar-1;i++){
            newStr+= data.charAt(i);
        }
        newStr+=data.charAt(0);
        console.log(newStr);
    }
}
switchLetters("abc");
switchLetters("hello world");
switchLetters("a");
switchLetters('');
//16
function changeString(str){
    let newStr = '';
    let data =String(str).toLowerCase();
    let numOfChar = data.length;
    let abcs = "abcdefghijklmnopqrstuvwxyz"
    for(let i =0;i<numOfChar;i++){
        if(data.charAt(i)===String('z')){
            newStr +='a'
        }else{
            let indexInAbc = abcs.indexOf(data.charAt(i));
            newStr+=abcs.charAt(indexInAbc+1);  
        } 
    }
    console.log(newStr);
}
changeString("abc");
changeString("zab");
changeString("helloworld");

function largest(a,b,c){
    if (a > b && a > c){
        return a;}

        if (b > a && b > c){
            return b;}
        if (c > a && c > b){
            return c;
        }
        }

    

console.log(largest(4,6,8))
console.log(largest(30,22,17))
console.log(largest(41,108,86))

//12
function isLeapYear(year){
    //rules of a leap year divisiable by 4, 100 unless also divisible by 400
    if ((year % 4 ===0 && year % 100 !==0) || (year % 400 ===0)){
        return true
    }else{
        return false
    }
}
console.log(isLeapYear(2000))
console.log(isLeapYear(1900))
console.log(isLeapYear(2020))
console.log(isLeapYear(1999))

//13
function getExtention(filename){
    let parts = filename.split('.')
    //this seperates the filename into the different parts seperated bby the dots or periods
    return parts[parts.length - 1]
    //-1 makes it go to the last item, so this should be the extention
}
//add a period in the console.log to make it actually print out the expected, without it it would just print txt,js,md
console.log("." + getExtention("hello.txt"))     //returns ".txt"
console.log("." + getExtention("app.js"))        //returns ".js"
console.log("." + getExtention("README.md"))     //returns ".md"

//14
function absoluteNineteen(num) {
    let differ = Math.abs(num - 19)
    //Math.abs makes it into absolute value automatically
    if (num > 19) {
        return differ * 3
        //if its above 19 it will multiply the difference by 3
    } else {
        return differ
    }
    }
    console.log(absoluteNineteen(8))  
    console.log(absoluteNineteen(26))  
    console.log(absoluteNineteen(7))   
    console.log(absoluteNineteen(30))  
    console.log(absoluteNineteen(11)) 
    console.log(absoluteNineteen(-20)) 
    console.log(absoluteNineteen(-2))
    //19 minus negitive 20 is just 19 plus 20 so 39(line 137)
    //19 minus negitive 2 is just 19 plus 2 so 21(line 138)
    
    
