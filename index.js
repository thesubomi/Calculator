// OBJECTS

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// Factory Functions

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// Constructor function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// Dynamic Nature of objects

// const circle = {
//   radius: 1,
// };

// circle.color = "yellow";
// circle.draw = function () {};

// delete circle.draw;
// delete circle.color;

// console.log(circle);

// const Circle1 = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   }
//   `
// );

// const circle = new Circle1(1);

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// const another = {};
// for (let key in circle) another[key] = circle[key];
// const another = Object.assign({}, circle);
// const another = { ...circle };

// console.log(another);

// for (let key in circle) console.log(key, circle[key]);
// for (let key of Object.keys(circle)) console.log(key);
// for (let entry of Object.entries(circle)) console.log(entry);
// if ("radius" in circle) console.log("yes");

// Template literals

// const name = "John";
// const another = `Hi ${name} ${5 * 5},

// Thank you for joining my mailing list.

// Regards,
// Ola
// `;

// console.log(another);

// Address Exercise

// const address = {
//   street: "a",
//   city: "b",
//   zipCode: 2,
// };

// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
// }

// showAddress(address);

// Factory and Constructor functions

// const address = new Address("a", "b", 2);
// console.log(address);

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// let address1 = new Address("a", "b", "c");
// let address2 = new Address("a", "b", "c");

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLive: true,
// };

// const post = new Post("a", "b", "c");
// console.log(post);

// function Post(title, body, author) {
//   (this.title = title), (this.body = body);
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// Price Range

// let priceRange = [
//   { label: "$", toolTip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
//   { label: "$S", toolTip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
//   { label: "$SS", toolTip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
// ];

// let restaurants = [{ averagePerPerson: 5 }];

// Array

// const numbers = [1, 2, 3, 4];

// console.log(numbers.indexOf("1"));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(5) !== -1);
// console.log(numbers.includes(1));

// numbers.push(5, 6);
// numbers.unshift(1, 2);
// numbers.splice(2, 0, "a", "b");
// console.log(numbers);

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];
// const course = courses.find((course) => course.name === "a");

// console.log(course);

// const numbers = [1, 2, 3];
// const joined = numbers.join("x");
// console.log(joined);

// Where you stopped!

// Moving an element

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 1);

// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) console.error("Invalid offset");
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// The this keyword

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// video.stop = function () {
//   console.log(this);
// };

// video.stop();

// Sum of Arguments

function sum() {}

// Count occurrences

// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(numbers, 1);
// console.log(count);

// function countOccurrences(array, searchElement) {
//   // let count = 0;
//   // for (let element of array) if (element === searchElement) count++;
//   // return count;
//   array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     return accumulator + occurrence;
//   }, 0);
// }

// GetMax

// const numbers = [1, 2, 3, 4];
// const max = getMax(numbers);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   return array.reduce((a, b) => (a > b ? a : b));

// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];

// const titles = movies
//   .filter((m) => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map((m) => m.title);

// console.log(titles);

// Function declaration

// function walk() {
//   console.log("walk");
// }

// // Function expression

// let run = function () {
//   console.log("run");
// };

// run();
// walk();

// let max = array[0];

// for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

// return max;
// }

// const course = courses.find(function (course) {
//   return course.name === "a";
// });

// Arrow function /// --->

// Prime numbers

// showPrimes(10);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;

//   return true;
// }

// Stars

// showStars(1);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// Calculating Grade

// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   const average = calculateAverage(marks);

//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// function calculateAverage(array) {
//   let sum = 0;
//   for (let value of array) sum += value;
//   return sum / array.length;
// }

// Sum of multiples of 3 and 5

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

//   return sum;
// }

// String Properties

// const movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
// }

// Count Truthy

// const array = [1, 2, 3, null, 6];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// Even Odd Numbers
// showNumbers(20);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");

//     const message = i % 2 === 0 ? "EVEN" : "ODD";
//     console.log(i, message);
//   }
// }

// Demerit points

// checkSpeed(73);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   if (speed < speedLimit + kmPerPoint) {
//     console.log("Ok");
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("License suspended");
//   else console.log("Points:", points);
// }

// FizzBuzz
// output = fizzBuzz();
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   return input;
// }

// Landscape or portrait
// let image = isLandScape(1920, 2080);
// console.log("isLandScape ", image);

// function isLandScape(width, height) {
//   return width > height;
// }

// Max of two numbers

// function max(a, b) {
//   return a > b ? a : b;
// }
// console.log(max(10, 15));

// Break and continue

// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// for...of

// const colors = ["red", "green", "blue"];
// for (let color of colors) console.log(color);

// for...in

// const person = {
//   name: "mosh",
//   age: 30,
// };

// for (let key in person) console.log(key, person[key]);

// infinite loop

// let i = 0; {
//     while (i <= 5) console.log('Hello World')
//     i++ without this line
// }

// let i = 0;
// do {
//   if (i % 2 !== 0) console.log("Hello world", i);
//   i++;
// } while (i <= 5);

// While loop

// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log("Hello world", i);
//   i++;
// }

// For Loop
// i === initialExpression

// for (i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log("Hello world", i);
// }

// If...Else

// let role = "moderator";

// if (role === "guest") console.log("guestx");
// else if (role === "moderator") console.log("moderatorx");
// else console.log("unknownx");

// Switch & case

// switch (role) {
//   case "guest":
//     console.log("guest user");
//     break;

//   case "moderator":
//     console.log("moderator user");
//     break;

//   default:
//     console.log("unknown");
// }

// Hour Check

// let hour = 11;

// if (hour >= 6 && hour < 12) console.log("Good morning");
// else if (hour <= 18) console.log("Good afternoon");
// else console.log("Good evening");

// Swapping Variables

// let a = "red";
// let b = "blue";

// let x = a;
// a = b;
// b = x;

// console.log(a);
// console.log(b);
