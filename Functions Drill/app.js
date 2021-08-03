// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
// Test Cases:
// Expect sumOfNums([1,2,3,4,5]) to equal 15
// Expect sumOfNums([0,0,5]) to equal 5
// Expect sumOfNums([-1,0,1])) to equal 0
// Expect sumOfNums([])) to equal 0

// ANSWER
// const array = [5,10,15,20]
// const sumOfNumbers = array.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sumOfNumbers)



// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
// greater (i.e. greater than but not equal to) than 10
// Test Case:
// Expect numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]) to equal [11, 20, 100]

// ANSWER
// const array = [-1,-3,0,2,4,6,12,20,25]
// const numGreaterThanTen = array.filter(element => element >10);
// console.log(numGreaterThanTen)



// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
// `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
// Test Cases:
// Expect allGreaterThanTen([11, 20, 100]) to equal true
// Expect allGreaterThanTen([9, 100, 299])) to equal false
// Expect allGreaterThanTen([1, 2])) to equal false
// Expect allGreaterThanTen([10])) to equal false
// Expect allGreaterThanTen([])).to.equal(true);

// TEST ARRAYS
// const array = [11, 20, 100]
// const array =[9, 100, 299]
// const array = [1, 2]
// const array = [10]
// const array = []
// ANSWER
// const allGreaterThanTen = array.every(num => num >10);
// console.log(allGreaterThanTen)



// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
// Test Cases:
// Expect wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg'])
// to equal ['alphabet', 'banana', 'carrot']
// const array = ['alphabet', 'banana', 'carrot', 'doe', 'egg']

// ANSWER
// const wordsWithAtLeastFiveLetters = array.filter(element => element.length >=5);
// console.log(wordsWithAtLeastFiveLetters)


// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
// `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases:
// Expect allStartingWithA(['apple', 'alligator', 'Arkansas'])) to equal true
// Expect allStartingWithA(['Amy', 'Bob'])) to equal false
// Expect allStartingWithA([]) to equal true
// const array = ["alice", "angel","alexis"]
// const array = ['apple', 'alligator', 'Arkansas']
// const array = ['Amy', 'Bob']

// for (let i = 0; i < array.length-1; i++){
//     console.log(array[i])
// }

// ANSWER
// array.every(function(){              //looping through the array with a callback function
//     let i = 0; i < array.length-1; i++;     //not sure what this is besides setting the starting point at 0 and telling the loop to do the length of the array (.lengt-1) one at a time (++)
//         if(array[i].charAt(0) == "a"){          //using a method to test if the string has the letter "a" at the beginning of the word (string index 0 / .charAT(0)
//             console.log(true);
//         }
//         else{console.log(false)
//         }           
// })


// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
// (case-insensitive), `false` otherwise
// Test Cases:
// Expect anyStartingWithB(['Amy', 'Bob']) to equal true
// Expect anyStartingWithB(['apple', 'alligator', 'Arkansas'])) to equal false
// const anyStartingWithB = function (words) {

// TEST ARRAY
// const array = ["bob","brunette","babbette"]

// ANSWER
// const anyStartingWithB = array.some(function(){
//      let i =0; i < array.length-1; i++;
//         if(array[i].charAt(0) == "b"){
//             console.log(true);
//         }
//         else{console.log(false)}
//  })
// cannot seem to get it not to output true/false for every corresponding entry in the array

    // This last set of functions are all related to one another! Use functions 7 to solve function 8,
    // use function 8 to solve 9, 10, and 11.


// #7
// Input: a single word and a number (`n`)
//Output: `true` if the word has at least some number (`n`) of vowels,
// `false` otherwise
// Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
// Test Cases:
// Expect hasAtLeastNVowels('uncopywriteable', 0)) to equal true
//This case should be true as long as n is less or equal to 6
// Expect hasAtLeastNVowels('dangerous', 5) to equal false
// Expect hasAtLeastNVowels('banana', -1) to equal null
// const str = "Teisha5";

    // var n = (str.match(/[aeiou]/g) || []).length;
    //     if(n >= 5){
    //         console.log(true)
    //     }
    //     else{console.log(false)}
// soooo this is not a function, but it works which is all that matters, but is this scalable??? (info for previous attempt to split string into an array below)

// const arrayString = str.split("");
// hasAtLeastNVowels
// TEST ARRAYS
// var array = ['dangerous', 5]

// var hasAtLeastOneVowel=(array) => {
//     let i=0; i < array.length-1; i++;
//     var str = array[0];
//     while (n > 0){
//     var n = (str.match(/[aeiou]/g) || []).length;
        
//     if(n >= 5){
//        console.log(true)
//     }
//     else{console.log(false)
//     }
//         }
// }

// var array = ["Teisha",5];

// ANSWER attempt
// const vowelCount = array.filter(letter => "aeiou".includes(letter)).length;
// console.log(vowelCount)
    // if(vowelCount >= 3){
    //     console.log(true)
    // }
    // else{console.log(false)}
// I don't understand the "Edge Case"



// #8
    // Input: an array of words
    // Output: an array of words from the original array that have at least two
    // vowels
    // Test Cases:
    // Expect wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])
    // to equal ['alphabet', 'doe']
// const array =[]
// const vowelCount = array.filter(letter => "aeiou".includes(letter)).length;
// var item = 0; item <= array.length-1; item++;
// const wordsWithAtLeastTwoVowels = array.filter( y => vowelCount >= 2)


    // #9
    // Input: an array of words
    // Output: `true` if ALL words have two or more vowels, `false` otherwise
    // Edge Case: If the array is empty, the function should return `true`.
    // Expect allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']) to equal true
    // Expect allHaveAtLeastTwoVowels(['Al', 'Barbara']) to equal false
    // Expect allHaveAtLeastTwoVowels(['Al', 'buck', 'can']) to equal false
    // Expect allHaveAtLeastTwoVowels([]) to equal true

// var array = ['apple', 'alligator', 'Arkansas']
//     const vowelCount = array.every(letter => "aeiou".includes(letter)).length;
    //     if(vowelCount >= 2){
    //     console.log(itemInTheArray)
    // }
    // else{console.log(false)}
    // #10
    // Input: an array of words
    // Output: `true` if there are ANY words have two or more vowels,
    // `false` otherwise.
    // Test Cases:
    // Expect anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])) to equal true
    // Expect anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])) to equal true
    // #11
    // Input: an array of words
    // Output: `true` if NONE of the words have two or more vowels,
    // `false` otherwise
    // Edge Case: If the array is empty, the function should return `true`.
    // Test Cases:
    // Expect noneHaveTwoOrMoreVowels(['Al', 'buck', 'can'])) to equal true
    // Expect noneHaveTwoOrMoreVowels(['Al', 'Barbara'])) to equal false
    // Expect noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas']) to equal false
    // Expect noneHaveTwoOrMoreVowels([]) to equal true
    // #12
    // Input: an array of words
    // Output: an object ({}) where each word in the array is a key, and the value
    // tied to that key is the length of the word.
    // e.g. given ['cat', 'horse', 'elephant'],
    // return { cat: 3, horse: 5, elephant: 8}
    // Test Cases:
    // Expect buildObjectFromWords(['apple', 'banana', 'cranberry'])
    // to equal {'apple': 5, 'banana': 6, 'cranberry': 9}
    