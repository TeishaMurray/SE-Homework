// 1) Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// var subtraction=(x,y)=>{
    //     var z = x-y
    //     console.log(z)
    // }

// var maxOfTwoNumbers=(x,y)=>{
//     if (x > y){
//         console.log(x)
//     } 
//     else {
//         console.log(y)
//     }
// }
// maxOfTwoNumbers (20, 10)



// 2) Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// var maxOfThreeNumbers=(x,y,z)=>{
//     if (x > y && x > z){
//         console.log(x)
//     }
//     if (y > x && y > z){
//         console.log(y)
//     }
//     else if (z > x && z > y){
//         console.log(z)
//     }
// }
// maxOfThreeNumbers(7,7,8)



// 3) Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// var isCharacterAVowel = (x) => {
//     if(x == "a"){
//         console.log("true")
//     }
//     else if(x == "e"){
//         console.log("true")
//     }
//     else if(x == "i"){
//         console.log("true")
//     }
//     else if(x == "o"){
//         console.log("true")
//     }
//     else if(x == "u"){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }

// isCharacterAVowel("m")


// 4) Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// var sumArray = [1,2,3,4]
// var sum = sumArray.reduce((x, y) => x + y);
// console.log(sum)

// var multiplyArray = [1,2,3,4]
// var times = multiplyArray.reduce((x, y) => x * y);
// console.log(times)


// 6) Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// var animeArray = "mugen and jin".split('');
// animeArray.reverse();


// console.log(animeArray.join(''));

//NOTES FOR WHEN YOU COME BACK
//  split()
// join()
// reverse()
// not necessarily in that order; see resource sent by Daquan and what you dropped in the slack for #7, works better for this

// 7) Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// function findLongestWord(strings){
//         var words = strings.split(" ").length;
//         return words;
// }
// findLongestWord("prescience", "parameter","soliloquy","permission","individuality");



// 8) Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// var longWords=["prescience","parameter","soliloquy","intelligence"]

// longWords.map( (itemInTheArray)=>{
//     if(itemInTheArray.length > 10){
//     console.log(itemInTheArray)
//     }
// }
// )
