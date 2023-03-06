/* Mutating array methods are methods that modify the original array directly.
 That is, they change the array in place, and they return the modified array. 
 WHILE Non-mutating array methods, on the other hand, create a new array or a new value 
 based on the original array, leaving the original array unchanged.

Here are five examples of each type of array method:

Mutating Array Methods:
push()
pop()
splice() 
reverse()
sort()

Non-Mutating Array Methods:
concat() 
slice() 
map()
filter()
reduce()
*/

// Question 2

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
let index = languages.indexOf('Ruby');
languages.splice(index + 1, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
index = languages.indexOf('PHP');
languages.splice(index, 1, 'Go', 'Rust');

console.log(languages); // ['Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

// Question 3
/* ['apple', 'mango', 'orange'] */


//Question 4

function max(arr) {
  let maxVal = arr[0]; // initialize max value to the first element of the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]; // update max value if current element is greater
    }
  }
  return maxVal;
}

let arr = [4, 5, 10, -2];
console.log(max(arr)); // Output: 10


//Question 5

function valTimesIndex(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }
  return result;
}

console.log(valTimesIndex([1,2,3])); // Output: [0, 2, 6]
console.log(valTimesIndex([5,10,15])); // Output: [0, 10, 30]
