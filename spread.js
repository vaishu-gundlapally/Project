// copy by value -->using spread operator
var q1 = [100, 300];
var q3 = [...q1];
console.log(q3);
var e1 = [20, ...q1, 90, 43];
console.log(e1);
var f1 = [400, 500];
var f2 = [90, 80];
var f3 = [...f2, ...f1];
console.log(f3);
// for loops
marks = [13, 56, 84, 34, 22];
for (let i = 0; i < marks.length; i++) {
  console.log("marks: ", marks[i]);
}
// for in
for (let i in marks) {
  console.log("please print:", marks[i]);
}
//for of
for (let i of marks) {
  console.log("marks", i);
}
//Exercise 1.1
const cart = [
  { name: "apple", price: 0.5, quantity: 4 },
  { name: "banana", price: 0.25, quantity: 6 },
];
const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];
//value of the cart
//combine carts
var c = [...cart, ...newItems];
console.log(c);
// console.log(c[0]);
let a = 0;
for (let { price, quantity } of c) {
  // for(let item of c){ a+=item.price*item.quantity} here item. is repeated so it can be destructured.
  a += price * quantity;
}
console.log(a);

// Ex 2: Rating 4.7 and above | Recommendations List
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];
// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
//   console.log(typeof(books));
// console.log(books);
var b1 = [];
for (let i of books) {
  //we need values so we use for of loop
  if (i.rating >= 4.7) {
    b1.push(i.title);
  }
}
console.log(b1);
// Ex 3: If employee's grades 80 or above promote them
const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
var b2 = [];
for (let i of employes) {
  // console.log(i);
  if (i.grade >= 80) {
    b2.push({ id: i.id, status: "Promoted" });
  }
}
console.log(b2);
// Ex4: Top movie titles
const movies = [
  { title: "Inception", ratings: [5, 4, 5, 4, 5] },
  { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
  { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
  { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
  { title: "Memento", ratings: [4, 5, 4, 5, 4] },
];
// Expected Output:  The Dark Knight

// console.log(ad);
let arr = [];
for (let i of movies) {
  // console.log(i.ratings)
  let avg = 0;
  for (let j of i.ratings) {
    avg += j;
  }
  avg /= i.ratings.length;
  arr.push(avg);
}
console.log(arr);
let m = Math.max(...arr);
console.log(m);

for (let i in arr) {
  if (arr[i] == m) {
    console.log(movies[i].title);
  }
}
// console.log("Hello")
//Task-6
function transformSentence(sentence) {
  return sentence.split(" ").reverse().join(" ").toUpperCase();
}
let sentence = "Hello world from JavaScript";
let transformed = transformSentence(sentence);
console.log(transformed);
// Output: "JAVASCRIPT FROM WORLD HELLO"

// Task 7: Improving code quality
function processNames(names) {
  let result = [];
  for (let i of names) {
    let upperCaseName = names[i].toUpperCase();
    let nameParts = upperCaseName.split(" ");
    let joinedName = nameParts.join("_");
    result.push(joinedName);
  }
  return result;
}
function processNames1(names) {
  let result = [];
  for (let i of names) {
    result.push(i.toUpperCase().split(" ").join("_"));
  }
  return result;
}
const namesArray1 = ["john doe", "jane smith", "alice jones"];
console.log(processNames1(namesArray1));

function processNames2(names) {
  // let result = [];
  // for (let i of names) {
  return names.map((i) => i.toUpperCase().split(" ").join("_"));

  // return result;
}
const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames2(namesArray));
