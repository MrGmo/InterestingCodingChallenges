// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// const checkCashRegister = (price, cash, cid) => {
//   const UNIT_AMOUNT = {
//     "PENNY": .01,
//     "NICKEL": .05,
//     "DIME": .10,
//     "QUARTER": .25,
//     "ONE": 1.00,
//     "FIVE": 5.00,
//     "TEN": 10.00,
//     "TWENTY": 20.00,
//     "ONE HUNDRED": 100.00
//   }
//   let totalCID = 0;
//   for (let element of cid) {
//     totalCID += element[1];
//   }
//   totalCID = totalCID.toFixed(2);
//   let changeToGive = cash - price;
//   const changeArray = [];
//   if (changeToGive > totalCID) {
//     return { status: "INSUFFICIENT_FUNDS", change: changeArray };
//   } else if (changeToGive.toFixed(2) === totalCID) {
//     return { status: "CLOSED", change: cid };
//   } else {
//     cid = cid.reverse();
//     for (let elem of cid) {
//       let temp = [elem[0], 0];
//       while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
//         temp[1] += UNIT_AMOUNT[elem[0]];
//         elem[1] -= UNIT_AMOUNT[elem[0]];
//         changeToGive -= UNIT_AMOUNT[elem[0]];
//         changeToGive = changeToGive.toFixed(2);
//       }
//       if (temp[1] > 0) {
//         changeArray.push(temp);
//       }
//     }
//   }
//   if (changeToGive > 0) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   }
//   return { status: "OPEN", change: changeArray};
// }


// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.
//
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
//
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


// function telephoneCheck(str){
//   let clean = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
//   return clean.test(str)
// }
//
// console.log(telephoneCheck("555-555-5555"))


// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


// function rot13(str) {
//   return str.replace(/[A-Z]/g, L =>
//     String.fromCharCode((L.charCodeAt(0) % 26) + 65)
//   );
// }
//
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))


// Roman Numeral Converter
// Convert the given number into a roman numeral.
//
// All roman numerals answers should be provided in upper-case.

// function convertToRoman(num){
//
// let = romanMatrix = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],
// [1, 'I']];
//
//     if (num === 0) {
//       return '';
//     }
//     for (let i = 0; i < romanMatrix.length; i++) {
//       if (num >= romanMatrix[i][0]) {
//         return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
//       }
//     }
//   }
//
// console.log(convertToRoman(36))


// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
//
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
//
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


// function palindrome(str){
//   let newStr = str.trim().replace(/[^a-z0-9]/gi, '').toLowerCase()
//   let pali = newStr.split('').reverse().join('')
//   return newStr === pali
// }
//
// console.log(palindrome("_eye"))


// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.


// function addTogether(){
//   const [first, second] = Object.values(arguments)
//   if(typeof first !== 'number'){
//     return undefined
//   }
//
//   const addSecond = second => typeof second === 'number' ? first + second : undefined;
//
//   if(second !== undefined){
//     return addSecond(second)
//   }else{
//     return addSecond
//   }
//
// }
//
// console.log(addTogether(2, 3))
// should return 5


// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// //
// // You may assume that each input would have exactly one solution, and you may not use the same element twice.
// //
// // You can return the answer in any order.
//
//
//
// function twoSums(nums, target){
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i+1; j < nums.length; j++){
//       if(nums[i] + nums[j] == target){
//         return [i, j]
//       }
//     }
//   }
// }
//
// console.log(twoSums([2, 7, 11, 15], 9))
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
//
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
//
// Remember, you can access object properties through either dot notation or [] notation.

//
// function truthCheck(collection, pre){
//   for(const object of collection){
//     if(!object[pre]){
//       return false
//     }
//   }
//   return true
// }
//
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))


// Binary Agents
// Return an English translated sentence of the passed binary string.
//
// The binary string will be space separated.


// Solution 1
// function binaryAgent(str) {
//   return String.fromCharCode(
//     ...str.split(" ").map(function(char) {
//       return parseInt(char, 2);
//     })
//   );
// }


// Solution 2
// function binaryAgent(str){
//
//   let arr = str.split(' ')
//   let newArr = []
//   let wordsArr = []
//   for(let i = 0; i < arr.length; i++){
//     newArr.push(Number(arr[i]))
//   }
//   let words = newArr.map(x => parseInt(x, 2))
//   for(let j = 0; j <= words.length; j++){
//     wordsArr.push(String.fromCharCode(words[j]))
//   }
//   return wordsArr.join('')
// }

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))

// return "Aren't bonfires fun!?"

// console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))


// should return "I love FreeCodeCamp!"


// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// function steamrollArray(arr){
//   let flat = [].concat(...arr)
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }
//
// console.log(steamrollArray([1, [2], [3, [[4]]]]))


// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array

// Solution 1
// function dropElements(arr, func){
//   while(arr.length > 0 && !func(arr[0])){
//       arr.shift()
//     }
//   return arr
// }

// Solution 2
// function dropElements(arr, func){
    // let length = arr.length
//   for (let i = 0; i < length; i++) {
//     if(func(arr[0])){
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }
//
// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }))

// should return [3, 4]


// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in numerical order.
//
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


// function smallestCommons(arr){
//   if(arr[0] > arr[1]){
//     arr.sort((a, b) => a - b)
//   }
//
//   let lcm = arr[1]
//
// let calcSum = function(a, b){
//   let mult = 1
//   for(let i = 1; i <= a; i++){
//     mult = b * i;
//     if(mult % a === 0){
//       return mult
//     }
//   }
// }
//   for(let j = arr[1]; j >= arr[0]; j--){
//     lcm = calcSum(j, lcm)
//   }
//   return lcm;
// }
//
// console.log(smallestCommons([1, 13]))
// should return 60


// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
//
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


// function sumPrimes(num){
//   let arr = []
//
//   for(let i = 2; i <= num; i++){
//     if(isPrimeNumber(i)){
//       arr.push(i);
//     }
//   }
//   return arr.reduce((a, b) => a + b, 0)
// }
//
// function isPrimeNumber(num){
//   for(let j = 2; j < num; j++){
//     if(num % j === 0){
//       return false;
//     }
//   }
//   return true;
// }
//
//
// console.log(sumPrimes(10))

// should return 17



// Write a function that returns an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array.

// function fibonacci(num){
//   let a = 0
//   let b = 1
//   let sum = b
//   let arr = [0,1]
//   for(let i = 2; i < num; i++){
//     sum = a + b
//     a = b
//     b = sum
//     arr.push(sum)
//   }
//   return arr
// }
//
// console.log(fibonacci(4))

// should return [0,1,1,2]


// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
//
//
// function sumFibs(num){
//   let sum = 1;
//   let a = 1;
//   let b = 1;
//
//   while (b <= num){
//     if(b % 2 !== 0){
//       sum+=b;
//     }
//     let temp = b
//     b = a + b
//     a = temp
//   }
//   return sum
// }
//
// console.log(sumFibs(10))


// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


// function convertHTML(str){
//   let arr = str.split("")
//   for(let i = 0; i < arr.length; i++){
//     switch(arr[i]){
//       case '&':
//       arr[i] = "&amp;";
//       break;
//       case '<':
//       arr[i] = "&lt;";
//       break;
//       case '>':
//       arr[i] = "&gt;";
//       break;
//       case '"':
//       arr[i] = "&quot;";
//       break;
//       case "'":
//       arr[i] = "&apos;";
//     }
//   }
//   arr = arr.join("");
//   return arr;
// }

// console.log(convertHTML('Stuff in "quotation marks"'))
// should return "Stuff in &quot;quotation marks&quot;".



// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
// Check the assertion tests for examples.



// const uniteUnique = (...arr) => [...new Set(arr.flat())]
//
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
//
// // should return [1, 3, 2, 5, 4]



// Missing letters
// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.

//
// function fearNotLetter(str){
//   const numArr = []
//   const checkArr = []
//   const min = str.charCodeAt(str[0])
//   const max = str.charCodeAt(str.length-1)
//
//   for(let i = 0; i < str.length; i++){
//     numArr.push(str.charCodeAt(i))
//   }for(let j = min; j <= max; j++){
//     checkArr.push(j)
//   }
//
//   const diff = checkArr.reduce((a, b) => a+b, 0) - numArr.reduce((a, b) => a+b, 0)
//
//   if(diff === 0){
//     return undefined
//   }else{
//     return String.fromCharCode(diff)
//   }
// }
//
// console.log(fearNotLetter("abce"))
// // should return the letter d



// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
// Return the provided character as the first element in each array.
//
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Solution 1
// function pairElement(str){
//   let initialArr = str.split('')
//   let newArr = []
//   let arrArr = []
//   initialArr.forEach(x => {
//     if(x === 'A'){
//       newArr.push('A')
//       newArr.push('T')
//     }else if(x === 'T'){
//       newArr.push('T')
//       newArr.push('A')
//     }else if(x === 'C'){
//       newArr.push('C')
//       newArr.push('G')
//     }else{
//       newArr.push('G')
//       newArr.push('C')
//     }
//   })
//     while(newArr.length > 1){
//       arrArr.push(newArr.splice(0,2))
//     }
//     return arrArr
// }
//


// Solution 2
// function pairElement(str){
//   const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   const arr = str.split("");
//   return arr.map(x => [x, pairs[x]]);
// }


// console.log(pairElement("ATCGA"))
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]


// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
//
// Second argument is the word that you will be replacing (before).
//
// Third argument is what you will be replacing the second argument with (after).
//
// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


//
// function myReplace(str, before, after){
//   if(/^[A-Z]/.test(before)){
//     after = after[0].toUpperCase() + after.substring(1)
//   }else{
//     after = after[0].toLowerCase() + after.substring(1)
//   }
//   return str.replace(before, after)
// }
//
//
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
// // should return "He is Sitting on the couch"


// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:
//
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
//
// - If a word begins with a vowel, just add "way" at the end.
//
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


// function translatePigLatin(str){
//   if(str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u'){
//     return str + 'way'
//   }else{
//     const elimCons = str.replace(/^[^aeiou]+/, '')
//     return elimCons + str.match(/^[^aeiou]+/).join('') + 'ay'
//   }
// }


// console.log(translatePigLatin("schwartz"))
// should return "artzschway"
// console.log(translatePigLatin('algorithm'))
// should return "algorithmway


// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str){
//   let noCamel = str.replace(/([a-z])([A-Z])/g, '$1 $2')
//   return noCamel.replace(/[^a-z0-9]/gi,'-').toLowerCase()
// }
//
// console.log(spinalCase('thisIsSpinalTap'))

// console.log(spinalCase('The_Andy_Griffith_Show'))
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".


// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


// Solution 1
// function whatIsInAName(collection, source){
//   let arr = collection.filter(item => {
//     for(let x in source){
//       if(source[x] !== item[x]){
//         return false
//       }
//     }
//       return true
//   })
//   return arr
// }

// Solution 2
// function whatIsInAName(collection, source){
//   let keys = Object.keys(source)
//
//   return collection.filter(obj => {
//     for(let x of keys){
//       if(!obj.hasOwnProperty(x) || obj[x] !== source[x]){
//         return false;
//         }
//       }
//       return true;
//   });
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"}))


// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// Note: You have to use the arguments object.


// function destroyer(arr, ...rest){
//   return arr.filter(x => !rest.includes(x))
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))


// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//
// Note: You can return the array with its elements in any order.


// function diffArray(arr1, arr2) {
//     let newArr = [];
//     if(arr1.length > arr2.length){
//       return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)))
//     }else if(arr1.length < arr2.length){
//       return arr2.filter(x => !arr1.includes(x)).concat(arr1.filter(x => !arr2.includes(x)))
//     }else{
//       return arr2.filter(x => !arr1.includes(x)).concat(arr1.filter(x => !arr2.includes(x)))
//     }
//     return newArr
//   }
//
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))


// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
//
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10

// function sumAll(arr){
//   let newArr = []
//   for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
//     newArr.push(i)
//   }
//   return newArr.reduce((a, b) => a + b, 0)
// }
//
// console.log(sumAll([4, 1]))



// Create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert 'Winner'

// function numWord(num, word){
//   let num1 = Number(num)
//   let word1 = Number(word.length)
//   if(num1 * word1 > 100){
//     alert('WINNER')
//   }else{
//     alert('Less than a hundo')
//   }
// }
//
// numWord(10, 'manufacturing')

// function numWord(num, word){
//   let num1 = Number(num)
//   let word1 = Number(word.length)
//   num1 * word1 > 100 ? alert('WINNER') : alert('Less than a hundo')
// }
//
// numWord(10, 'man')


// Create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array.

// function sumTwo(array){
//   let sum  = array[0] + array.pop()
//   console.log(sum)
// }
//
// sumTwo([1, 2, 3, 4])

// or
//
// function sumTwo(array){
//   console.log(array[0] + array.pop())
// }
//
// sumTwo([1, 2, 3, 4, 5, 6])


// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.

// let bigList = ['James', 'Karen', 'Mike', 'Sara']

// function personName(var){
//   bigList.push(var)
//   console.log(`${var} you are #${bigList.length} in the array`)
// }

// personName('Max')


// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.
//
// Review our last practice problem from last class if you need some ideas.

// function bigStack(arr){
//   let odd = arr.filter(function(numz){
//     return (numz % 2 !== 0)
//   })
//   console.log(odd)
// }
//
// bigStack([1, 2, 3, 4, 5])


// // Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

// function skipNum(num){
//   for(let i = 1; i <= num; i++){
//     if((i * 3) % 2 !== 0){
//     console.log(i)
//     }
//   }
// }
//
// skipNum(100)

// or

// function skipNum(num){
//   for(let i = 1; i <= num; i++){
//     if((i * 3) % 2 === 1){
//     console.log(i)
//     }
//   }
// }
//
// skipNum(100)

// // Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down.
//
// // Example 1
// function challenge1(num1, num2){
//   let roundDown = num1 / num2
//   console.log(Math.floor(roundDown))
// }
// challenge1(100, 3)
//
//
// Example 2
// function tryTwo(num1, num2){
//   let roundDown = Math.floor(num1 / num2)
//   console.log(roundDown)
// }
// tryTwo(5, 2)