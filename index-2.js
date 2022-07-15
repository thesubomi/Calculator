// const movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(object) {
//   for (let key in object)
//     if (typeof object[key] === "string") console.log(key, object[key]);
// }

// const message = sum(10);
// console.log(message);

// function sum(limit) {
//   let count = 0;

//   for (let i = 0; i <= limit; i++)
//     if (i % 3 == 0 || i % 5 === 0) count = count + i;

//   return count;
// }

// const marks = [80, 80, 50];
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   let result = averageGrade(marks);
//   if (result < 60) return "F";
//   if (result < 70) return "D";
//   if (result < 80) return "C";
//   if (result < 90) return "B";
//   return "A";
// }

// function averageGrade(array) {
//   let sum = 0;
//   for (element of array) sum += element;
//   return Math.floor(sum / array.length);
// }

// showStars(15);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 1; i <= row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// 2 - 15;
// number - 2, factor - 2, showPrimes(15);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;

//   return true;
// }

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 2,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// function Circle(radius) {
//   (this.radius = radius),
//     (this.draw = function () {
//       console.log("draw");
//     });
// }

// const circle4 = new Circle(10);
// console.log(circle4);

// const box = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// for (let key in box) console.log(key, box[key]);
// for (let key of Object.keys(box)) console.log(key);
// for (let entry of Object.entries(box)) console.log(entry);
// if ("radius" in box) console.log("Yes");

// const another = `This is my
// 'first' message`;

// const address = new Address("x", "y", "z");
// console.log(address);

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// let address1 = new Address("x", "y", "c");
// let address2 = new Address("x", "y", "c");
// let address3 = address1;

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address3));

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

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

// let post = new Post("a", "b", "c");
// console.log(post);

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.isLive = false;
// }

// console.log(blogPost);

// const numbers = [1, 2, 3, 4, 1];

// // const result = numbers.includes(1);
// // const result = numbers.indexOf(6) !== -1;
// const result = numbers.lastIndexOf(1);

// adding elements: push, unshift, splice (x, y, z)
// removing elements: pop, shift, splice (x, y)
// emptying arrays: courses = []; courses.length = 0;
// combining arrays: [...first, ...second] combined.slice(start, end)
// iterating arrays: for (let number of numbers) console.log(number); numbers.forEach((number) => console.log(number));

// const numbers = [1, 2, 3];
// const joined = numbers.join("x");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const result = parts.join("-");
// console.log(result);

// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];

// const output = movies
//   .filter((m) => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map((m) => m.title);

// console.log(output);
// const items = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));

// console.log(items);

// const numbers = [1, 2, -3, 4, 5];
// const sum = numbers.reduce((a, b) => a + b);
// console.log(sum);

// const result = arrayFromRange(-6, 9);
// console.log(result);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

// const result = includes([1, 2, 3, 4], 4);
// console.log(result);

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

// function except(array, excluded) {
//   let output = [];
//   for (let element of array)
//     if (!excluded.includes(element)) output.push(element);
//   return output;
// }

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error("Invalid Offset");
//     return;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(index + offset, 0, element);
//   return output;
// }

// function countOccurences(array, searchElement) {
//   let count = [];
//   for (let element of array) if (element === searchElement) count.push(element);
//   return count.length;
// }

// const numbers = [1, 2, 3, 4];

// const max = getMax(numbers);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
//   return max;
// }

// console.log(arrayFromRange(-10, 4));

// function arrayFromRange(min, max) {
//   let output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

// let max = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (array[i] > max) max = array[i];
// }
// return max;

// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 4 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];

// const output = movies
//   .filter((m) => m.year === 2018 && m.rating > 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map((m) => m.title);

// console.log(output);

// const numbers = [1, 2, 3, 4, 9];

// const output = getMax(numbers);

// console.log(output);

// function getMax(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) max = array[i];
//   }
//   return max;
// }

// Functions

// function sum() {
//   let total = 0;
//   for (let value of arguments) total += value;
//   return total;
// }

// console.log(sum(1, 2, 3));

// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("Value is not a string");

//     const parts = value.split(" ");
//     if (parts.length !== 2) throw new Error("Enter a first and last name");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// try {
//   person.fullName = "";
// } catch (e) {
//   alert(e);
// }

// console.log(person);

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach((tag) => console.log(this.title, tag));
//   },
// };

// video.showTags();

// function playVideo(a, b) {
//   console.log(this, a, b);
// }

// playVideo.call({ name: "Mosh" }, 1, 2);
// playVideo.apply({ name: "Mosh" }, [1, 2]);
// playVideo.bind({ name: "Mosh" })();
// const numbers = [1, 2, 3, 4];

// console.log(sum(numbers));

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
//   return items.reduce((a, b) => a + b);
// }

// const circle = {
//   radius: 1,
//   get area() {
//     return Math.PI * (this.radius * this.radius);
//   },
// };

// console.log(circle.area);

// try {
//   const numbers = [1, 2, 3, 4];
//   const count = countOccurrences(null, 1);
//   console.log(count);
// } catch (e) {
//   console.log(e.message);
// }

// function countOccurrences(array, searchElement) {
//   if (!Array.isArray(array)) throw new Error("Invalid array");

//   return array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     return accumulator + occurrence;
//   }, 0);
// }

// Encapsulation, Abstraction, Inheritance & Polymorphism
