// ES6 Tasks
// Advance JS Task for Test
// Global Scope:-

// Q1
// var myVariable = "Hello World";

// Q2
// let variable = "Hello World";

// Q3
// const greet = "Hello World";

// Q4
// console.log(myVariable);
// console.log(variable);
// console.log(greet);

// Q5 Are they accessible globally?
// Yes..

// Function Scope:-

// Q1
// function myfunction(){
//     var myfun = "My Variable"
// }

// myfunction();

// Q2
// function myLet(){
//     let myLet = "My Variable"
// }

// myLet();

// Q3
// function myConst(){
//     const myConst = "My Variable"
// }

// myConst();

// Q4
// console.log(myfun); (This will result in an error)
// console.log(myLet);  (This will result in an error)
// console.log(myConst); (This will result in an error)

// Q5 What do you observe?
// var, let, and const are not global when declared inside a function.
// When you try to log myConst outside of the function, you again get the error: Uncaught ReferenceError: myConst is not defined.
// This happens because const creates a constant that is only accessible within the function and cannot be accessed outside of it.

// Block Scope:-

// Q1
// if(true){
//     var myfun = "Hello world"
// }

// Q2
// if(true){
//     let myLet = "Bye world"
// }

// Q3
// if(true){
// const myConst = "Good morning"
// }

// Q4
// console.log(myfun);    
// console.log(myLet);
// console.log(myConst);

// Q5 What do you observe?
// var: When declared inside a block, it is still accessible outside the block. This is because var is function-scoped or globally scoped, not block-scoped.
// let and const: Both let and const are block-scoped, meaning they are not accessible outside the block in which they were declared. Trying to log them outside the block results in a ReferenceError.

// Hoisting with var:-

// Q1
// console.log(myVar);  
// var myVar = "Hello World";
// console.log(myVar); 

// Q2 What value do you get?
// undefined
// Hello World

// Hoisting with let and const:-

// Q1
// console.log(myLet);
// let myLet = "Hello World";
// console.log(myLet);

// Q2
// console.log(myConst);  
// const myConst = "Hello World";
// console.log(myConst); 

// Q3 What kind of error do you get?
// 1. Uncaught ReferenceError: Cannot access 'myLet' before initialization.
// 2. Uncaught ReferenceError: Cannot access 'myConst' before initialization.

// Re-declaration:-

// Q1
// var myVar = "Hello";
// var myVar = "World"; 
// console.log(myVar); 

// Q2
// let myLet = "Hello";
// let myLet = "World";

// Q3
// const myLet = "Hello";
// const myLet = "World";

// Q4 What happens in each case?
// var case: No error, variable can be redeclared and reassigned,  the second declaration overwrites the first value.
// let case: Error when redeclared in the same scope, SyntaxError: Identifier 'myLet' has already been declared.
// const case: Error when redeclared in the same scope,	SyntaxError: Identifier 'myConst' has already been declared.

// Re-assignment:-

// Q1
// var myVar = "Hello";   
// myVar = "World";       
// console.log(myVar);  

// Q2
// let myLet = "Hello"
// myLet = 110
// console.log(myLet);

// Q3
// const myConst = "First value"
// myConst = 200
// console.log(myConst);

// Q4 What happens in each case?
// var case: Variable can be reassigned, No error reassignment is allowed.
// let case: Variable can be reassigned, No error reassignment is allowed.
// const case: Variable cannot be reassigned after initialization,	Uncaught TypeError: Assignment to constant variable.

// Temporal Dead Zone (TDZ):-

// Q1
// {
// console.log(myLet);
// let myLet = "Hello";
// }

// Q2
// {
// console.log(myConst);
// const myConst = "Hello"
// }

// Q3 What error do you get? Why?
// Uncaught ReferenceError: Cannot access 'myLet' before initialization.
// Uncaught ReferenceError: Cannot access 'myConst' before initialization.
// Both let and const variables are hoisted to the top of their scope (in this case, the block), but they are not accessible until they are initialized.
// let and const cannot be accessed before their declaration. Trying to do so results in a ReferenceError.

// When to use var, let, and const:-

// Q1
// function VarUsage() {
//     if (true) {
//         var message = "Hello from the block";
//     }
//     console.log(message);
// }

// VarUsage();  

// Q2
// function LetUsage() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i); 
//     }
// }

// LetUsage();

// Q3
// function ConstUsage() {
//     const PI = 3.14159;  
//     console.log(PI);

   
// }

// ConstUsage();

// String Interpolation:-

// Q1
// let firstName = "Taha"
// let lastName = "Arshad"

// Q2
// let fullName = `My name is ${firstName} ${lastName}`
// console.log(fullName);

// Multi-line Strings:-

// Q1
// let address = `
// L-430
// Sector 2
// North Karachi,
// Karachi.
// `;

// console.log(address);

// Simple Expressions:-

// Q1
// let num1 = 75;
// let num2 = 125;

// Q2
// let result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

// Q3
// console.log(result);


// Function Calls:-

// Q1
// function greet(num1, num2) {
//     return num1 + num2
// }

// Q2
// let result = `The sum of 50 & 80 is ${greet(50,80)} `

// console.log(result);

// Creating a Tagged Template:-

// Q1
//  function logTemplate(strings, ...values) {
// console.log("Template String:", strings);
//     console.log("Values:", values);
//  }

// Q2
//  let name = "Taha";
//  let age = 19;

// logTemplate`My name is ${name} and I am ${age} years old.`;

// Formatting:

// Q1
// function toUpperCaseTag(strings, ...values) {
//     let result = strings[0];
//     values.forEach((value, index) => {
//         result += value + strings[index + 1];
//     });

//     return result.toUpperCase();
// }

// Q2
// let name = "Taha";
// let greeting = "hello";

// let message = toUpperCaseTag`The greeting is "${greeting}", and the name is "${name}".`;

// console.log(message);


// Conditional Logic:-

// Q1
// let currentHour = new Date().getHours();

// Q2
// let message = `${currentHour < 12 ? 'Good Morning!' : 'Good Afternoon!'}`;

// console.log(message); 

// Loops within Template Literals:-

// Q1
// let shoppingList = ['Milk', 'Eggs', 'Bread', 'Butter', 'Cheese'];

// Q2
// let htmlList = `<ul>
//   <li>${shoppingList[0]}</li>
//   <li>${shoppingList[1]}</li>
//   <li>${shoppingList[2]}</li>
//   <li>${shoppingList[3]}</li>
//   <li>${shoppingList[4]}</li>
// </ul>`;

// console.log(htmlList);

// Escaping Backticks:-

// Q1
// let message = This is a string with a backtick character: \`;

// Q2
// console.log(message);


// Nested Template Literals:-

// Q1
// let table = `<table>
//   <tr>
//     <th>Name</th>
//     <th>Age</th>
//   </tr>
//   <tr>
//     <td>John</td>
//     <td>38/td>
//   </tr>
//   <tr>
//     <td>Jane</td>
//     <td>25</td>
//   </tr>
//   <tr>
//     <td>Mark</td>
//     <td>35</td>
//   </tr>
// </table>`;

//Q2
// console.log(table);

// Simple Condition:-
                        
//Q1
//  let age = 20;

// Q2
//  let canVote = age >= 18 ? "Yes" : "No"


// Q3
//  console.log(canVote);



// Even or Odd:-

// Q1
// let number = 19;

// Q2
// let evenOrOdd = (number % 2 === 0 ) ? "Even" : "Odd"

// Q3
// console.log(evenOrOdd);

// Grade Evaluation:-

// Q1
// let score = 70; 

// Q2
// let grade = score >= 90 ? 'A Grade' :
//            score >= 80 ? 'B Grade' :
//            score >= 70 ? 'C Grade' :
//            score >= 60 ? 'D Grade' :
//            score >= 50 ? 'E Grade' :
//            'You are FAIL';

// Q3           
// console.log(grade);

// Login Status:-

// Q1
// let isLoggedIn = true;

// Q2
// let statusMessage = isLoggedIn ? "Welcome Back" : "Please log in"

// Q3
// console.log(statusMessage);

// Discount Eligibility:-

// Q1
// let isMember = true;
// let purchaseAmount = 240;

// Q2
// let discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;

// Q3
// console.log(discount);

// Determine Max Value:-

// Q1
// function maxValue(a, b) {

//     return a > b ? a : b;

// }

// Q2
  
// let result = maxValue(80, 20);
// console.log(result);

// Greeting Message:-

// Q1
// function greet(name){
//     return name ? `Hello ${name}` : "Hello, guest"
// }

// Q2
// console.log(greet("Taha"));

// Mapping Values:-

// Q1
// let array = [10, 20, 30 , 40 , 50];

// Q2
// let modifiedNumbers = array.map(num => num % 2 === 0 ? num * 2 : num * 3);

// Q3
// console.log(modifiedNumbers);

// Filtering Values:-

// Q1
// let strings = ["apple", "cat", "banana", "dog",];

// Q2
// let filteredStrings = strings.filter(str => str.length > 3 ? true : false);

// Q3
// console.log(filteredStrings);

// Copying an Array:-

// Q1
// let originalArray = [1, 2, 3, 4, 5];

// Q2
// let copiedArray = [...originalArray];

// Q3
// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);

// console.log(originalArray === copiedArray);

// Adding Elements to an Array:-

// Q1
// let numbers = [2, 3, 4, 5];

// Q2
// let updatedNumbers = [1, ...numbers, 6];

// Q3
// console.log(updatedNumbers);

// Copying an Object:-

// Q1
// let originalObject = { name: "Taha", age: 19, city: "Karachi" };

// Q2
// let copiedObject = { ...originalObject };

// Q3
// console.log("Original Object:", originalObject);
// console.log("Copied Object:", copiedObject);


// console.log(originalObject === copiedObject);  

// Merging Objects:-

// Q1
// let object1 = { name: "Taha", age: 19, city: "Karachi" };
// let object2 = { age: 20, city: "Lahore", country: "Pakistan" };

// Q2
// let mergedObject = { ...object1, ...object2 };

// Q3
// console.log(mergedObject);

// Updating Object Properties:-

// Q1
// let user = { 
//     name: "Taha", 
//     age: 19, 
//     email: "taha113@gmail.com" 
//   };
  
// Q2
// let updatedUser = {
//     ...user, 
//     email: "tahaarshad225@gmail.com", 
//     address: "L-430 SECTOR 2, NORTH KARACHI" 
// };
  
// Q3
// console.log(updatedUser);
  
// Passing Array Elements as Arguments:-

// Q1
// function sum(a, b, c){
//     return a + b + c;
// }

// Q2
// let number = [40, 20 ,80];

// Q3
// let result = sum(...number);

// Q4
// console.log(result);

// Combining Multiple Arrays:-

// Q1
// function combineArrays(...array) {

//     return [].concat(...array);

// }

// Q2
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// Q3
// let combinedArray = combineArrays(array1, array2, array3);
// console.log(combinedArray);

// Rest Parameter with Spread Operator:-

// Q1
// function multiply(num, ...arrys) {

//     return arrys.map(arrys => arrys * num);

//   }
  
// Q2
// let result = multiply(2, 1, 3, 5, 7);
  
// Q3
// console.log(result);
  
// Spread Operator with Nested Structures:-

// Q1
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let copiedArray = [...nestedArray];

// Q2
// copiedArray[0][0] = 10;
// copiedArray[1][1] = 20;

// Q3
// console.log('Original Array:', nestedArray);
// console.log('Copied Array:', copiedArray);

// Sum Function:-

// Q1
// function sum(...args) {

//     return args.reduce((acc, currentValue) => acc + currentValue, 0);

//   }
  
// Q2
//   console.log(sum(1, 2, 3));       
//   console.log(sum(5, 10, 15, 20));  
//   console.log(sum(7, 3));          
//   console.log(sum(100));            
//   console.log(sum());           
  
//Average Function:-

// Q1
// function average(...numbers) {

//     const sum = numbers.reduce((acc, num) => acc + num, 0);


// Q2
//     return sum / numbers.length
// } 


// Q3
// console.log(average(1, 2, 3, 4, 5));  
// console.log(average(10, 20, 30));     
// console.log(average(7, 8));


// First and Rest:-

// Q1
// let numbersArr = [10,20,55,69,80,30]

// Q2
// let = [first , ...rest] = numbersArr

// Q3
// console.log(First Element ${first});
// console.log(Remaining elements: ${rest}); 




// Skip and Rest:-

// Q1
// let colorsArr = ["red,","yellow","blue","orange","purple","black"]

// Q2
// let = [, ,...remainingValues] = colorsArr

// Q3
// console.log(remainingValues);



// Basic Destructuring:-

// Q1
// let person = {
//     name: 'imran',
//     age: 30,
//     email: 'imran235@example.com',
//     address: '123 Main Street'
//   };
  
// Q2
//   let { name, email, ...rest } = person;
  
//   console.log(name);   
//   console.log(email);   
//   console.log(rest);    
   
// Nested Destructuring:-

// Q1
// let student = {
//     id: 123,
//     name: 'Ali',
//     grades: [90, 85, 92],
//     info: {
//       age: 20,
//       major: 'Computer Science'
//     }
//   };

// Q2  
//   let { id, name, info: { major }, ...rest } = student;
  
//   console.log(id);       
//   console.log(name);     
//   console.log(major);    
//   console.log(rest);

// Filter Even Numbers:-

// Q1
// function filterEven(...args) {

//     return args.filter(num => num % 2 === 0);

//   }
  
// Q2
//   console.log(filterEven(1, 2, 3, 4, 5));           
//   console.log(filterEven(10, 15, 20, 25, 30));      
//   console.log(filterEven(7, 11, 14, 18, 22, 27));  
//   console.log(filterEven(1, 3, 5, 7));              
//   console.log(filterEven());     

// Combine and Sort Arrays:-

// Q1
// function combineAndSort(...arrays) {
   
//     return [].concat(...arrays).sort((a, b) => a - b);

//   }
  
// Q2
//   console.log(combineAndSort([3, 1, 4], [5, 2], [7, 6])); 
//   console.log(combineAndSort([10, 2, 30], [4, 15], [20, 25]));  
//   console.log(combineAndSort([9, 8], [7, 6], [5, 4], [3, 2, 1]));  
//   console.log(combineAndSort([3], [2], [1]));  

// Basic Destructuring:-

// Q1
// const fruits = ["apple", "banana", "cherry"];

// Q2
// const [firstFruit, secondFruit, thirdFruit] = fruits;

// Q3
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

// Skipping Elements:-

// Q1
// const colors = ["red", "green", "blue", "yellow"];

// Q2
// const [primaryColor, , tertiaryColor] = colors;

// Q3
// console.log(primaryColor);
// console.log(tertiaryColor);

// Rest Operator:-

// Q1
// const numbers = [1, 2, 3, 4, 5];

// Q2
// const [firstNumber, ...remainingNumbers] = numbers;

// Q3
// console.log(firstNumber);
// console.log(remainingNumbers);

// Basic Destructuring:-

// Q1
// const person = { name: "John", age: 30, city: "New York" };

// Q2
// const { name, age, city } = person;

// Q3
// console.log(name);
// console.log(age);
// console.log(city);

// Renaming Variables:-

// Q1
// const car = { make: "Toyota", model: "Corolla", year: 2020 };

// Q2
// const { make: carMake, model: carModel, year: carYear } = car;

// Q3
// console.log(carMake);
// console.log(carModel);
// console.log(carYear);

// Default Values:-

// Q1
// const settings = { theme: "dark", language: "Spanish" };

// Q2
// const { theme, language = "English" } = settings;

// Q3
// console.log(theme);
// console.log(language);

// Array of Arrays:-

// Q1
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// Q2
// const [[a], [b], [c]] = nestedArray;

// Q3
// console.log(a);
// console.log(b);
// console.log(c);

// Object within an Object:-

// Q1
// const profile = {
//     username: "john_doe",
//     details: {
//       email: "john@example.com",
//       address: "123 Main St"
//     }
//   };
  
// Q2
//   const { username, details: { email, address } } = profile;

// Q3
//   console.log(username);
//   console.log(email);
//   console.log(address);

// Mix of Arrays and Objects:-

// Q1
// const data = {
// //     id: 1,
// //     info: [
// //       { name: "Alice" },
// //       { age: 25 }
// //     ]
// //   };
  
// // Q2
// //   const { id, info: [{ name }, { age }] } = data;

// // Q3
// //   console.log(id);
// //   console.log(name);
// //   console.log(age);
  
// Array Parameters:-

// Q1
// function printCoordinates([x, y]) {
//     console.log(x);
//     console.log(y);
//   }

// Q2
// printCoordinates([10, 20]);
// printCoordinates([30, 40]);
  
// Object Parameters:-

// Q1
// function displayUser({ name, age }) {
//     console.log(name);
//     console.log(age);
// }

// Q2  
// displayUser({ name: "Alice", age: 30 });
// displayUser({ name: "Bob", age: 25 });
  
// List Property Names:-

// Q1
// const book = { title: "1984", author: "George Orwell", year: 1949 };

// Q2
// const keys = Object.keys(book);

// Q3
// console.log(keys);

// Count Properties:-

// Q1
// const student = { name: "John", age: 16, grade: "10th", school: "ABC High" };

// Q2
// const keys = Object.keys(student);

// Q3
// console.log(keys.length);

// Iterate Over Keys:-

// Q1
// const product = { name: "Laptop", price: 1200, category: "Electronics" };
// const keys = Object.keys(product);

// keys.forEach(key => {
//   console.log(`${key}: ${product[key]}`);
// });

// List Property Values:-

// Q1
// const movie = { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" };

// Q2
// const values = Object.values(movie);

// Q3
// console.log(values);

// Sum Values:-

// Q1
// const scores = { math: 85, science: 90, english: 88 };
// const values = Object.values(scores);

// Q2
// const total = values.reduce((sum, value) => sum + value, 0);

// Q3
// console.log(total);

// Iterate Over Values:-

// Q1
// const user = { username: "john_doe", email: "john@example.com", location: "New York" };
// const values = Object.values(user);

// Q2
// values.forEach(value => {
//   console.log(value);
// });

// List Entries:-

// Q1
// const car = { make: "Toyota", model: "Corolla", year: 2020 };

// Q2
// const entries = Object.entries(car);

// Q3
// console.log(entries);

// Convert Object to Array:-

// Q1
// const person = { firstName: "John", lastName: "Doe", age: 30 };

// Q2
// const entries = Object.entries(person);

// Q3
// console.log(entries);

// Iterate Over Entries:-

// Q1
// const settings = { theme: "dark", notifications: true, privacy: "high" };
// const entries = Object.entries(settings);

// Q2
// entries.forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// Filter Keys:-

// Q1
// const inventory = { apples: 15, bananas: 5, oranges: 20, grapes: 8 };

// Q2
// const keys = Object.keys(inventory).filter(key => inventory[key] > 10);

// Q3
// console.log(keys);

// Transform Values:-

// Q1
// const temperatures = { morning: 15, afternoon: 25, evening: 10 };

// Q2
// const fahrenheitTemperatures = Object.entries(temperatures)
//   .map(([time, temp]) => [time, temp * 9 / 5 + 32]);

// Q3
// const newTemperatures = Object.fromEntries(fahrenheitTemperatures);

// Q4
// console.log(newTemperatures);

// Key-Value Swap:-

// Q1
// const roles = { admin: "Alice", editor: "Bob", viewer: "Charlie" };

// Q2
// const swappedRoles = Object.entries(roles)
//   .map(([key, value]) => [value, key]);

// Q3
// const newRoles = Object.fromEntries(swappedRoles);

// Q4
// console.log(newRoles);

// Filter and Map:
// 1.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2.
// function filterAndMap(arr, filterFunc, mapFunc) {
//   return arr.filter(filterFunc).map(mapFunc);
// }

// 3.
// const result = filterAndMap(
//   numbers,num => num % 2 !== 0,num => num * num               
// );

// 4.
// console.log(result);  



                                  // Sort and Reduce:
// 1.
// const words = ["apple", "banana", "cherry","date"];
 
// // 2.
// function sortAndReduce(arr,sortFunc,reduceFunc){
//  return arr.sort(sortFunc).reduce(reduceFunc)
// }
// // 3.
// const result = sortAndReduce( words,(a, b) => a.localeCompare(b),(acc, current) => acc + current )

// // 4.
// console.log(result);


                            //  Simple Callback:
// 1.
// function printGreeting(message) {
//     console.log(message);  
//   }

// // 2.
//   function greet(name, callback) {
//     const message = Hello, ${name}!;     
//     callback(message);  
//   }
  
// //   3
//   greet("Ali", printGreeting); 
   

                      //   Asynchronous Callback

// function displayData(data) {
//     console.log(data);  
//   }
  
//   function fetchData(callback) {
//     setTimeout(() => {
//       const data = { id: 1, name: "ali", age: 30 }; 
//       callback(data);  
//     }, 2000);  
//   }
  
//   fetchData(displayData);  
  

                            //Simple Arrow Function:
// const addArrow = (a, b) => a + b;  
// console.log(addArrow(3, 5));                            



                                              // Arrow Function with Array Methods:
// const numbers = [1,2,3,4,5]

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);


                                              // Variable Scope:
// function outer() {
//     const x = 10;  
  
//     function inner() {
//       console.log(x); 
//     }
  
//     inner(); 
//   }
  
//    outer();  
  

                                              // Closure:
// function createCounter() {
//     let counter = 0;  
//     return function() {
//       counter++;  
//       console.log(counter);  
//     };
//   }
  
//   const counter1 = createCounter();  
//   const counter2 = createCounter();  
  
//   counter1();  
//   counter1();  
//   counter2();  
//   counter2();  
//   counter1(); 
  

                                            // Simple Default Parameters:
// 1.
// function greet(name, greeting = "Hello") {
//     console.log(${greeting}, ${name}!); 
//   }
  
  
//   greet("Ali", "Good Morning"); 
  
//   greet("ahmed");  
  

                                            // Default Parameters with Other Arguments:

// function calculateArea(width = 10, height = 5) {
//     return width * height; 
//   }
  
  
//   const area1 = calculateArea(15, 8);  
//   console.log(area1);  
  
//   const area2 = calculateArea();  
//   console.log(area2);  


                                           // Square Numbers:
// 1.
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);  


                                          // Convert to Uppercase:
// 1.
// const words = ["apple", "banana", "cherry"];

// const uppercaseWords = words.map(word => word.toUpperCase());

// console.log(uppercaseWords);

// Filter Even Numbers:
// 1.
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumber = number.filter(num => num % 2 === 0)

// console.log(evenNumber);


                                            // Filter Long Words:
// 1.
// const words = ["apple", "banana", "cherry", "date"];

// 2.
// const longWords = words.filter(words => words.length > 5)

// 3.
// console.log(longWords);  


                                            // Log Numbers:
// 1.
// const numbers = [1, 2, 3, 4, 5];

// // 2.
// numbers.forEach(function(number) {

// // 3.
//   console.log(number);

// });

                                               // Log Word Lengths:
// 1.
// const words = ["apple","banana","cherry"];

// // 2.
// words.forEach(function(words) {

// // 3.
// console.log(words);

// })



                                               //Sum of Numbers: 
// 1.
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {

//   return accumulator + currentValue;
// }, 0); 

// console.log(sum);  


                                                // Concatenate Strings:

// const result = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue, "");

// console.log(result);  


                                                // Check for Even Number:
// const numbers = [1, 3, 5, 7, 8];

// const hasEvenNumber = numbers.some(function(number) {
//   return number % 2 === 0;  

// });

// console.log(hasEvenNumber);  


// Check for Long Word:
// 1.
// const words = ["apple", "banana", "cherry", "date"];

// const hasLongWord = words.some(function(word) {
//   return word.length > 5; 
// });

// console.log(hasLongWord);

// Check All Even Numbers:-

// Q1
// const numbers = [2, 4, 6, 8, 10];

// Q2
// const allEven = numbers.every(num => num % 2 === 0);

// Q3
// console.log(allEven);

// Check All Long Words:-

// Q1
// const words = ["elephant", "giraffe", "hippopotamus"];

// Q2
// const allLongWords = words.every(word => word.length > 5);

// Q3
// console.log(allLongWords);

// Find First Even Number:-

// Q1
// const numbers = [1, 3, 5, 7, 8];

// Q3
// const firstEven = numbers.find(num => num % 2 === 0);

// Q3
// console.log(firstEven);

// Find Long Word:-

// Q1
// const words = ["apple", "banana", "cherry", "date"];

// Q2
// const firstLongWord = words.find(word => word.length > 5);

// Q3
// console.log(firstLongWord);

// Find Index of First Even Number:-

// Q1
// const numbers = [1, 3, 5, 7, 8];

// Q2
// const indexOfFirstEven = numbers.findIndex(num => num % 2 === 0);

// Q3
// console.log(indexOfFirstEven);

// Find Index of Long Word:-

// Q1
// const words = ["apple", "banana", "cherry", "date"];

// Q2
// const indexOfLongWord = words.findIndex(word => word.length > 5);

// Q3
// console.log(indexOfLongWord);

// Simple Promise:-

// Q1
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   Q2
//   delay(2000).then(() => console.log("Hello, world!"));

// Promise Chain:-

// Q1
// function fetchData() {
//     return new Promise(resolve => resolve({ name: "John", age: 30 }));
//   }
 
// Q2
// fetchData().then(data => console.log(data));
  
// Error Handling:-

// Q1
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       const userData = { name: "Alice" };
//       if (!userData.age) {
//         reject("Age is missing");
//       } else {
//         resolve(userData);
//       }
//     });
//   }
  
// // Q2
//   fetchUserData()
//     .catch(error => console.log(error));

// Simulate Network Request:

// Q1
// function getWeather() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const error = false;
//         if (error) {
//           reject("Network error");
//         } else {
//           resolve({ temperature: 22 });
//         }
//       }, 1000);
//     });
//   }
  
// //   Q2
//   getWeather()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
  
// Simple async Function:-

// Q1
// async function sayHello() {
//     await delay(2000);
//     console.log("Hello, world!");
//   }

// Q2
// sayHello();

// Fetch Data with async/await:-

// Q1
// async function getUserData() {
//     const userData = await fetchUserData();
//     console.log(userData);
//   }
  
// Q2
// getUserData().catch(error => console.log(error));

// Fetch and Process Data:-

// Q1
// function fetchUser() {
//     return new Promise(resolve => resolve({ name: "John", age: 30 }));
//   }
  
//   function fetchPosts() {
//     return new Promise(resolve => resolve([{ postId: 1, content: "Hello world" }]));
//   }
  
// Q2
//   async function getUserAndPosts() {
//     const user = await fetchUser();
//     const posts = await fetchPosts();
//     console.log(user, posts);
//   }
  
// Q3
// getUserAndPosts();

// Error Handling in async/await:-

// Q1
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//       const user = null;
//       if (!user) {
//         reject("User not found");
//       } else {
//         resolve(user);
//       }
//     });
//   }
  
// Q2
// async function getUserInfo() {
//     try {
//       const user = await fetchUser();
//       console.log(user);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
// Q3
// getUserInfo();
  
// Simulate API Calls:-

// Q1
// function apiCall() {
//     return new Promise(resolve => {
//       const delayTime = Math.random() * 1000;
//       setTimeout(() => resolve(`Data received after ${delayTime.toFixed(0)}ms`), delayTime);
//     });
//   }
 
// Q2
// async function getData() {
//     try {
//       const result1 = await apiCall();
//       console.log(result1);
//       const result2 = await apiCall();
//       console.log(result2);
//       const result3 = await apiCall();
//       console.log(result3);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
// Q3
// getData();