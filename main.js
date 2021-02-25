

// Diff Two Arrays (freeCodeCamp)
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//
// Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    let newArr = [];
    if(arr1.length > arr2.length){
      return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)))
    }else if(arr1.length < arr2.length){
      return arr2.filter(x => !arr1.includes(x)).concat(arr1.filter(x => !arr2.includes(x)))
    }else{
      return arr2.filter(x => !arr1.includes(x)).concat(arr1.filter(x => !arr2.includes(x)))
    }
    return newArr
  }

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))


// Sum All Numbers in a Range (freeCodeCamp)
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
//
// function personName(bozo){
//   bigList.push(bozo)
//   console.log(`${bozo} you are #${bigList.length} in the array`)
// }
//
// personName('Willy')


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
// // Example 2
// function tryTwo(num1, num2){
//   let roundDown = Math.floor(num1 / num2)
//   console.log(roundDown)
// }
// tryTwo (5, 4)
