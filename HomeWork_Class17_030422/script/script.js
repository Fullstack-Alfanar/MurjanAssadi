// //EX 1 :
// function Name() {
//     let firstname , lastname ;
//     firstname=prompt("enter your first name");
//     lastname=prompt("enter your last name");
//     alert("Your name is : "+firstname+" "+lastname);
// }
// Name();
// Name();

// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Ex 2 :
// function avg(num1 , num2 , num3){
//     alert ("the avg : "+(num1+num2+num3)/3);
// }
// // hard coded :
// avg(2,4,6); 
// // random :
// var x,y,z;
// x=Math.floor(Math.random()*100);
// y=Math.floor(Math.random()*100);
// z=Math.floor(Math.random()*100);
// avg(x,y,z);
// //User number
// x=+prompt("enter number");
// y=+prompt("enter number");
// z=+prompt("enter number");
// avg(x,y,z);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Ex 3 :
// function len(num ,replay){
//     var stars="";
//     for(let i=0;i<num;i++){
//         stars+="*"
//     }
//     if(replay==1){//To print only once
//         alert("The sum of the stars in the line : "+num);
//         alert(stars)}
//     return(stars); 
// }
// function size(num){
//     sum="" 
//     var replay=1;  //To print only once
//     for(i=0;i<num;i++){
//         sum+=len(num , replay)+"\n";
//         replay+=1;
//     }
//     alert("the size : "+num*num);
//     alert(sum);
//     replay=1;
// }

// let num ;
// num=+prompt("enter number");
// size(num);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Ex 4 :
// function limit(num) {
//     var str = "", a = [];
//     for (var i = 1; i <= num; i++) {
//         str = str + i // print all the number 
//         a[i - 1] = i // set all numbet to array
//         alert(str); // Print the sequence for each added number
//     }
 
//     return (a)
// }
// function triangle(num) {
//     var a = [], toprint = "";
//     a = limit(num); 
//     for (var i = 0; i < a.length; i++) {
//         for (var j = 0; j < i + 1; j++) {
//             toprint = toprint + a[j] // put a number to text

//         }
//         toprint = toprint + "\n"; //drop a line in the text
//     }
//     alert(toprint);
// }

// let num = 1;
// while (num != 0) {
//     num = +prompt("enter the number if you want ro stop enter 0");
//     triangle(num)
// }
// alert("good bye");
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Ex 5 :
// function starLine(num) {
//     let str = "";
//     for (let j = 0; j < num; j++) {
//         str += "*";
//     }
//     alert(str);
//     return (str);
// }
// //----------------
// function triangle(num) {
//     var toprint = "";
//     for (let i = num; i > 0; i--) {
//         toprint = toprint + (starLine(i));
//         toprint = toprint + "\n"
//     }
//     alert(toprint);
// }
// //------------
// let num = 1;
// while (num != 0) {
//     num = +prompt("enter the number if you want ro stop enter 0");
//     triangle(num)
// }
// alert("good bye");
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// //EX 6:
// function starLine(num) {
//     let str = "";
//     for (let j = 0; j < num; j++) { // put number in the text
//         str += j + 1;
//     }
//     for (let j = 0; j < num; j++) {//put star after number in the text
//         str += "*";
//     }

//     alert(str);
//     return (str);
// }
// //-------
// function triangle(num) {
//     var toprint = "";
//     for (let i = num; i > 0; i--) {
//         toprint = toprint + (starLine(i));
//         toprint = toprint + "\n"
//     }
//     alert(toprint);
// }
// //--------
// let num = 1;
// while (num != 0) {
//     num = +prompt("enter the number if you want ro stop enter 0");
//     triangle(num)
// }
// alert("good bye");

// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Ex 7 :
// //***
// //** 
// //*
// function starLine(num) {
//     let str = "";
//     for (let j = 0; j < num; j++) {
//         str += "*";
//     }
//     return (str);
// }
// function triangle(num) {
//     var toprint = "";
//     for (let i = num; i > 0; i--) {
//         toprint = toprint + (starLine(i));
//         toprint = toprint + "\n"
//     }
//     return (toprint);
// }

// //*
// //** 
// //*** 
// function limit(num) {
//     var str = "", a = [];
//     for (var i = 1; i <= num; i++) {
//         str = str + "*" // print all the number 
//         a[i - 1] = "*" // set all numbet to array
//     }

//     return (a)
// }
// function triangle1(num) {
//     var a = [], print = "";
//     a = limit(num);
//     for (var i = 0; i < a.length; i++) {
//         for (var j = 0; j < i + 1; j++) {
//             print = print + a[j] // put a star to text

//         }
//         print = print + "\n"; //drop a line in the text
//     }
//     return (print);
// }
// ///////////////
// let num = 1;
// let finalprint = "";
// while (num != 0) {
//     num = +prompt("enter the number if you want ro stop enter 0");
//     finalprint = finalprint + (triangle(num) + "\n" + triangle1(num));
//     alert(finalprint);
//     finalprint = "";
// }
// alert("good bye");
