// functions are resable blocks of code

// one way to add variables and add 3 every time it's required
// (x+y+z+w) + 3
// the way we would do this without functions
// var numX =2
// var numY = 3
// var numZ =4
// var numW = 5
// var sum = numY + numZ + numW
// console.log(sum)

// Functions is ES5
// Step 1: use keyword function
// Step 2: name function
// Step 3: create parameters; put them within your parentheses
// Step 4: to use the function, make a function call / invoke the function
// Step 5: fill parameters in function call with arguments
// Once you do this you don't have to do another function; you can just repeat the function call and replace the variable placeholders (x,y)
// Once a variable is declared inside a function it cannot be used anywhere else
// function addition(x,y){
//     var z = x*y 
//     console.log(z)
// }

// addition (5,7)
// addition (3,7)

// Exercise: Write your own function

// function addition (x, y, z){
//     var sum = x+y+z
//     console.log(sum)
// }

// addition (3,4,7) 
// addition (12, 42, 1)

// ES6 Arrow Function

    // var subtraction=(x,y)=>{
    //     var z = x-y
    //     console.log(z)
    // }

// Global variables: 

// Exercise extend the cookie exercise using a function. Cookie costs $2 and you paid $20

// var cookieChange=(paid,cost)=>{
//     var change = (paid-cost)*4
//     console.log(change)
// }

// cookieChange(20,2)

// Jon's example using while loop
// var coinDesp=(paid, cost)=>{
//     var changeInCoin=(paid-cost)*4
//     numCoin= 1
//     while (numCoin<=changeInCoin){
//         console.log(numCoin)
//         numCoin++
//     }
// }
// coinDesp(4,2)

// Tavaris' example created a variable for each denomination (try that if you can't get your code to work)



// Bonus question: $100-27.83 in largest denominations possible

// var change=(paid,cost)=>{
//     change = paid-cost;
//     while (change !==0){
//         if (change >=50){
//             console.log(50)
//             change -=50
//         }
//         if (change >=20){
//             console.log(20)
//             change -=20
//         }
//         if (change >=10){
//             console.log(10)
//             change -=10
//         }
//         if (change >=5){
//             console.log(5)
//         }
//         else {console.log(change*1)
//             change -=1
//         }
//     }
//     while (change <1){
//         if (change %.25 ==0){
//             console.log(change*.25)
//             change -=.25
//         }
//         if (change %.10 ==0){
//             console.log(change*.10)
//             change -=.10
//         }
//         if (change %.05 ==0){
//             console.log(change*.05)
//             change -=.05
//         }
//         else {console.log(change*.01)}
//         change -=.01;
//     }

// }

// change(100,27.83)


// Second Attempt

// while (loop >0){
//     console.log (loop);
//     loop = loop -=5;
// }

// var change=(paid,cost)=>{
//     change = paid-cost;
//     while (change >.01){
//         if (change >=50){
//             console.log(50)
//             change -=50
//         }
//         if (change >=20){
//             console.log(20)
//             change -=20
//         }
//         if (change >=10){
//             console.log(10)
//             change -=10
//         }
//         if (change >=5){
//             console.log(5)
//         }
//         if (change %.25 ==0){
//             console.log(change*.25)
//             change -=.25
//         }
//         if (change %.10 ==0){
//             console.log(change*.10)
//             change -=.10
//         }
//         if (change %.05 ==0){
//             console.log(change*.05)
//             change -=.05
//         }
//         else {console.log(change*.01)
//         change -=.01;
//         }
//     }
// }
// change(100,27.83)

 