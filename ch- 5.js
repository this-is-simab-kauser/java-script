// console.log("hello world")

// "abc" . toUpperCase()

// "xyz" .toUpperCase()

// [1,2,3].push(4);


// function -> 2 number , sum

// function sum(x,y) {
// //     console.log(x+y);
//  s = x + y;
// //  console.log("before return");
// //  console.log("after return");
//   console.log(x); 
//   return s;
// }

// let val = sum (3,4);
// console.log(x);
// console.log(val);

// function myFunction(msg) {
//     //parameter -> input
//     conole.log(msg* n);

// }
// // Function -> number,s sum

// function sum(x,y) {
//     console.log(x+y)
// }

//// function -> 2 numbers, sum 

// function sum (x,y) {
//     //local variable -> scope
//     s = x+y;
//     console.log(x);
//   return s;
    
// }

//  let value =sum(3,4);
//  console.log(x);
//  console.log(val);
 
///sum function 
// function sum(a, b) {
// return a+b ;

// }

//modern JS
// const arrowSum = (a,b) => {
//     console .log (a+b);
// };


//  //multiplication function 
//  function mul(a,b){
//     return a * b;
//  }
//  let  arrowMul = (a,b) => {
//     console.log (a*b)
//  }

// const printHello = () => {
//     console.log("hello");

// };

//Q1- 
// function countVowels(str) {
//     //"ApnaCollege", count = 4
//     let count = 0;
//     for(const char of str ){
//         // console.log(char);
//          if(char ==="a" || char === "e" || char === "i" || char ==="o" || char ==="u")
    
//         {
//        count++;
//     }
// }
//     console.log(count);
// }


// Q2-
const countVow = (str) => {
    //"ApnaCollege", count = 4
    let count = 0;
    for(const char of str ) {
       // console.log(char);
         if(
            char ==="a" || 
            char === "e" || 
            char === "i" || 
            char ==="o" || 
            char ==="u"
        ) {
       count++;
    }
}

 return count;
}
    // console.log(count);




