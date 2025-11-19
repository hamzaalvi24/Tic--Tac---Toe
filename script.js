// "DATA TYPES AND VARIABLES;"

// const student = {
//     name : 'hamza',
//     class : 'twelveth',
//     marks: 70,
//     grade : 'A+',
//     ispass : true,
//     age:18,
// };
// student["name"] = "BABAR" ;
// console.log(student.name);

// const product = {
// name : "pen",
// rating :4 ,
// offer : 5,
// prize :300,
// };
// console.log (product);

// OPERATORS & CONDITIONAL STATEMENT ;
// +,-,*,/ ( % , ** ,++ , --) 

// x = 25
// y = 25
// console.log (x >= y) 

// LOGICAL OPERATORS

// a = 5
// b = 10
// console.log ( !("5!=10") , (a!=b) )

//  CONDITIONAL STATMENTS 
//  IF ,
  
// let age = 20
// if ( age <18) {
//    console.log (" can drive");
// }
// else {
//     console.log("can not drive");
// } 

// num = 12
// if ( num %2 === 0 ) {
//     console.log ("this is even no");
// } 
// else {
//     console.log ("this is odd");
// }

// marks = 50
// if ( marks >= 80) {
//     console.log ( "Grade A");
// }
// else if (marks >= 70 ) {
//     console.log ( "Grade B");
// }
// else {
//     console.log("Grade C")
// }

//  TERNARY OPERATORS ;

// let num = prompt(" enter number:");
// if (num %2 ===0){
//     console.log (  num," is even") 
// }
// else {
//     console.log ( num, "is odd") 
// }

// marks = prompt("enter no 1 -100:");

// if ( marks >=80  ) {
//     console.log ("A");
// }
// else if ( marks >=70 ) {
//     console.log ("B");
// }
// else if ( marks >=60 ) {
//     console.log ("C");
// }
// else if ( marks >=50 ) {
//     console.log ("D");
// }
// else {
//     console.log ("fail");
// }

// LOOPS & STRINGS
// FOR LOOPS;


// for ( i = 1; i <= 5 ; i = i+1) {
//     console.log ("Hello World");
// }
// console.log( "loop has ended");

// let num = 0
// for ( let i = 1 ; i <= 100 ; i= i+1){
//     num = num +i;
//     console.log(num)
// }

// FOR OF LOOP ;
 
// let lang = "English";
// length = 0 ;
// for (let i of lang){
//     console.log(i);
//     length = length +1;
// }
// console.log ("length is =", length);

// FOR IN LOOP: 

// let student = {
//     name :"Hamza",
//     class: 11,
//     age : 18 ,
//     roll_no : 1122,
//     ispass : true
// };
// for (let key in student) {
//     console.log(  "key:", key ,"value:", student[key]);

// let num = 0
// for (i = 1 ; i<=100 ; i= i+1) {
//     result = num + i 
//     if ( result%2 === 0) {
//         console.log("num:",result);
//     }
// }

// " GUESS THE NUM (GAME)"
// game_num = 99;
// user_num = prompt("Guess the correct num:");
// while (  user_num  != game_num) {
//     user_num = prompt(" Alass! You entered wrong num:");
// }
// console.log ("Congratulstions , you entered right num:");
// let i = 1
// while ( i<=10) {
//     console.log(i);
//     i= i+1
// }
// for(i=1 ; i<=10 ; i++) {
//     console.log(i);
// }

//  "STRINGS";

// str = "Hamzaaaaa";
// console.log(str[0]);

//  let obj = {
//     item : "pen",
//     price : 10
//  }
//  let rzlt = `the total cost of ${obj.item} is ${obj.price} rupees..`
//  console.log(rzlt);
 

// str.ToUpperCase
// let x = "hamza babar alvi" ;
// console.log(x.toUpperCase());

// // str.ToLowerCase;
// let x = "HAMZA BABAR";
// console.log(x());

// str.trim
// x = "hafiz hamza babar alvi";
// console.log(x.trim());

// for (let i = 1 ; i<= 5 ; i++) {
//     console.log("this is javascript")
// }
// console.log("loop has ended");


// sum = 0
// i = 1 
// while ( i<=5){
//     sum = sum + i ;
//     i++ ; 
//     console.log("sum of 1-5 number is ;", sum);
// }

// for ( i = 1 ; i <=100 ; i++) {
//     if ( i%3 === 0) {
//         console.log(i)
//     }
// }

// let name = prompt("Enter your full name:"); 
// let username  = "@" + name + name.length ;
// console.log(username);


// ARRAY'S 
// console.log(name);


//  loops in array's:
// for (let i = 0; i<name.length; i++){
//      console.log(name[i]);
// }

// array in forloops;

// let name = ["Hamza", "Babar" ,"Alvi"]

//  for(let el of name) {
//     console.log(el)
//  }
// let marks = [85,97,44,37,76,60] ;
// let sum = 0; 
//  for ( let value of marks ){
//      sum = sum + value ;
//      console.log(sum);
//     let avg = 0 ;
//     avg = sum / marks.length;
//     console.log("avg marks of class =",avg);}
 
//  let marks = [85,97,44,37,76,60] ;
//  let sum = 0;
//  for ( let i = 0 ; i< marks.length ; i++){
//       console.log(marks[i]);
//       sum = sum + marks[i];
//       console.log(sum);
//       let avg = sum / marks.length ;
//       console.log(avg);
//  }



// let price = [250,645,300,900,50]
// let i = 0
// for (let val of price){
//     console.log(`value of index ${i} = ${i}`);
//     let offer = val/10 ;
//     price[i]= price[i]-offer;
//     console.log(` value after offer = ${price[i]}`);
//     i++
// }

// let price = [250,645,300,900,50]
// for (let i = 0; i<price.length;i++ ){
//     // console.log(`price before offer ${price[i]}`);
//     let offer = price[i]/10 ; 
//     price[i] = price[i] - offer ;
//     console.log(`price after offer ${price[i]}`);
// }


//  ARRAY'S PROP

// .PUSH
// let num = [250,645,300,900,50];
// console.log(num);

// .POP()
// let num = [250,645,300,900,50];
// console.log(num);

// .concat
// let asianCountry = ["Pakistan","India","Japan"];
// let europianCountry = ["France","Italy","Poalnd"];
// let country =  asianCountry.concat(europianCountry);
// console.log(country);

// SLICE METHOD ;
// let num = [250,645,300,900,50];
// console.log(num);
// console.log(num.slice());

//  companies = ["Blooming","Microsoft" ,"Uber","Google","IBM","Netflix"]
//  console.log (companies.shift());
//  console.log(companies);
//  console.log(companies.push("Amazon"));
//  console.log(companies);
//  console.log(companies.splice(2,1,"OLA"));

// Functions & Methods:

// function functionname(){
//     console.log();
// }
// functionname();

//  " Functions k parameters are local variablesof func and they have block space"

// Arrow func; 

// let mul = (a,b) => {
//     console.log(a*b);   
// }
// mul(7,8);

// function strings(a,e,i,o,u) {
//     console.log(strings.length);
// }
// strings();

// let vowels = (a,e,i,o,u )=> {
//     console.log(vowels.length);
// }
// vowels();

// function myfunction(str){
//      let count = 0 ;
//     for (let val of str){
//         if (
//            val ==="a" || 
//            val ==="e" || 
//            val ==="i" ||
//            val ==="o" ||
//            val ==="u" 
//         ) {
//             count++;
//         }
//     }

//      console.log(count);
// }



// let vow = (str) => {
//     let count = 0 ;
//     for (let val of str){
//         if (
//            val ==="a" || 
//            val ==="e" || 
//            val ==="i" ||
//            val ==="o" ||
//            val ==="u" 
//         ) {
//             count++;
//         }
//     }

//      console.log(count);

// }

// FOR EACH LOOP IN ARRAY :

  // let num = [ 2,4,6,8,10];
  // num.forEach ( num => {
  //   console.log(num*num);
  // }
  // )

// let marks = [ 33,45,57,63,75,88,90,91,96,]
//  let newArray = marks.filter ((val)  => {
//   return val >= 90;
// })
// console.log(newArray);

// let n = prompt("enter your num :");
// let array = [] ;
// for (let i = 1 ; i<=n ; i++){
//      array[i-1] = i;
// }
//  console.log(array);

// newArray = array.reduce (( prev,curr ) =>{
// return prev * curr ; 
// })
// console.log(newArray);


// DOM


// let divs = document.querySelectorAll(".box");
//   let i = 0
// for (let div of divs){
//   i++
//   div.innerText = `value has changed ${i}`;
  
// }




//  let heading = document.createElement("h1");
//  heading.innerText = "this is heading"
//  let div = document.querySelector("div")
//  div.before(heading);

//  let heading = document.querySelector("h1");
//  heading.remove;

// let newbutton = document.createElement("button");
// newbutton.innerText = "Click me!"
// newbutton.style.backgroundColor = "red"
// newbutton.style.color = "white"
// console.log(newbutton);
// let body = document.querySelector("body");
// body.prepend(newbutton);
 
// Events :

//  let div  = document.querySelector("div")
//  div.ondblclick = () => {
//   console.log( "this is a div");
//   let a = 25;
//   a++;
//   console.log(a);
// //  }

// let div = document.querySelector("div");

// div.addEventListener ("click", () => {
//   console.log("you howered on div 01");
// }
// ) ;
// let remove = ( ) => {
//   console.log("button was click");
  
// }

//  ;
// div.addEventListener ("click", () => {
//   console.log("you howered on div 03");
// }
// ) ;
// div.addEventListener ("click", () => {
//   console.log("you howered on div 04");
// }
// ) ;
// div.removeEventListener ("click, remove" )

// let btn = document.querySelector("button");
// let currentMode = "lightMode"
// btn.addEventListener ( "click" , () => {
//   if ( currentMode === "lightMode") {
//     currentMode = "darkMode";
//     document.querySelector("body").style.backgroundColor = "black";
    
//   }
//   else {
//        currentMode = "lightMode";
//        document.querySelector("body").style.backgrounColor = "white";
//   }
//   console.log(currentMode);
// }
// )









 
