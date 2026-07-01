///#ARRAY

//create array

// let marks = [ 97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman","thor","shaktiman","spiderman"]
// console.log(heroes);

//#looping over an array
// let heroes = ["ironman", "thor","hulk","shaktiman","sipderman","antman"];

// console.log(heroes[0]);
// console.log(heroes[1]);

/// for loop 
// for(let i = 0; i < heroes.length; i++) {
    // console.log(heroes[i]);
// }

///for of loop
// for(let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["delhi", "pune", "mumbai", "hydrabad", "gurgaon"];

// for(let city of cities) {
//     console.log(city);
// }

//Q-1 
// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log('avg marks of the class = ${avg}');

//Q - 2

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
// // console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for( let i = 0; i< items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

//ARRAY METHODS

///push() :add to end
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.push("chips", "burger","paneer");
// console.log(foodItems);


///pop() : delete from end & return
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem =  "potato");


///toString(): converts array to string
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// let marks = [ 97, 86, 54,36];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);


///concat():joins multiple arrays & returns result
// let marvel_heroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish" ]
// let heroes = marvel_heroes.concat(indianHeroes);
// console.log(heroes);


//unshift():add to start
// let marvel_heroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");

 
//shift():delete from start & run
let marvelHeroes = ["thor", "spiderman", "ironman"];
let val = marvelHeroes.shift("");
console.log("deleted ", val)