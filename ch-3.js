//calculate sum of 1 to 5
// for loop

// for(let count=1; count<=100000; count++) {
//     console.log("Apna College"); //5 execute
// }

//calculate sum of 1 to 5
// let sum = 0;
// let n = 100;
// for(let i = 1; i <= n; i++) {
//     sum = sum + i; 
// }
// console.log("sum = ", sum);
//  console.log("loop has ended");

// print 1 to 5 
// for (let i = 1; i <=5; i++) {
//     console.log("i=", i);
// }

// console.log(i);

///INFINITE LOOP (stopping condition never ends )
/// dont use infinite loop they will consume memory and it will crash your system//


///WHILE LOOP
// let i = 1 ;
// while(i<= 10) {
//     console.log("apna college");
//    i++; 
// }

///DO WHILE LOOP
//  let i = 1;
// do {
//      console.log("i=", i);
//     i++;
// } while (i <=5);

///FOR OF LOOP (used for string and arrays )
// let str = "simabkauser";

// let size = 0;
// for(let value of str) {
//     //iterator -> characters
//     console.log("value=",value);
//     size++;
// }
// console.log("string size = ", size);

///FOR IN LOOP (used for object and arrays )

// let student = {
//     name : "simab kauser",
//     age : 23,
//     cgpa : 7.5,
//     isPass : true,
// };

// for(let key in student) {
//     console.log("key=", key, "value", student[key]);
// }

//?? Q - print all even numbers from 0 to 100?
// for ( let num = 0; num <= 100; num++) {
//     if (num%2 !==0){
//         //odd number
//         console.log("num =", num);
//     }
// }

///Q -2 create a game where you start with any game number. ask the user to keep guessing the gane number until the user entera correct value.
// let gameNum = 25;

// let userNum = prompt("guess the game number : ");

// while(userNum != gameNum){
//   userNum = prompt ("you entered wrong number. guess again :");
// }
// console.log("congratulations, you entered the right number")

//STRINGS//
// create string // string length //sring indices
// let str = "simabkauser";
// let str2 = "kauser";

// console.log(str[8]);

// let obj = {
//     item : "pen",
//     price : 10,
// };

// let output = 'the cost of ${obj.item} is ${obj.price} rupees';
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");

//template literals ///String Interpolation

// console.log ("Apna\nCollege"); //(\n = next line
//  let str =  ("simab\tkauser");// (\t = tab sign for space)
// consolelog(str.length);

//String methods

//# toUpper case // toLowerCase
// let str = "ApnaCollege";
// str = str.toLowerCase();
// let newStr = str . toUpperCase();
// console.log(str);
// console.log(newStr);

//# trim
// let str =" Apna College JS";
// console.log(str.trim());

//STRING METHODS IN JS
//# str.Slice(start,end?)
// let str = "hello";
// console.log(str.slice(0))

//# str1.concat(str2) -(joins str2 with str1)
// let str1 = "apna";
// let str2 = "college";

// // let res ="i am learning coding from " +str1+str2;
// let res = "hello" + 123;
// console.log(res);

//# reaplace methods

// let str = "simab";
// console.log (str.replaceAll("ma","p" ));

//# str.charAt(idx)
// let str = "IloveJS";
// // console.log(str.charAt(6));
// str = str.replace("I", "S");
// console.log(str);

//Q-1?????

// let fullName = prompt("enter your fullname without spaces");

// let username = "@" + fullName + fullName.length;
// console.log(username);
