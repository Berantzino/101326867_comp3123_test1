// QUESTION 1: ES6 Features
// Create a script with a function name lowerCaseWords that takes a mixed array as input.
// The function will do the following:
//      - return a promise that is resolved or rejected
//      - filter the non-strings and lower case the remaining words

const lowerCaseWords = (arr) => {
    // return a promise
    return new Promise( (resolve, reject) => {

        // check if parameter is an array
        if (Array.isArray(arr)) {
            // return resolved promise with an array of strings only (non-strings filtered out)
            resolve(arr.filter( (element) => (typeof element === "string" || element instanceof String))
                // make every string all lower case
                .map( (string) => string.toLowerCase()))
        } else {
            // return rejected promise if parameter was NOT an array
            reject(`Error: input parameter must be of type: Array\n\tNot of type: ${typeof arr}`)
        }
        
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, "Wings"]

lowerCaseWords(mixedArray)
.then( (result) => console.log(result))
.catch( (error) => console.log(error))