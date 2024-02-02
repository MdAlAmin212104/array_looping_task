/*
### Task 1

Write a JavaScript code to reverse the array colors `without using the reverse method`.

**Input:**
`const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

**Output:**

`['orange', 'yellow', 'green', 'blue', 'red']`

*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
//console.log(colors.reverse());


/*
### Task 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

**Input:**
`const numbers = [12, 98, 5, 41, 23, 78, 46];`

**Output:**

`[12, 98, 76, 46]`
*/

let result = [];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      if ( element % 2 === 0 ) {
            result.push(element);
      }
      
}
//console.log(result);


/* 
### Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

**Input:**
`var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

**Output:**

`'TomTimTinTik'`
*/

var deferentName = ['Tom', 'Tim', 'Tin', 'Tik'];
let single_output = '';
for ( let str of deferentName ) {
      single_output = single_output + str
}

console.log(single_output);



/* 
### Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

**Input:**
`const statement = 'I am a hard working person'`

**Output:**

`'person working hard a am I'`
*/