// QUESTION 2: Promises
// Given then script file callbacks.js, write a script that does the following:
//      - Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
//      - Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
//      - Call both promises separately and handle the resolved and reject results and then output to the console.


const resolvedPromise = () => {
    return new Promise( (resolve) => 
        setTimeout( () => resolve({'message': 'delayed success'}), 500))
}

const rejectedPromise = () => {
    return new Promise( (resolve, reject) => 
        setTimeout( () => reject({'error': 'delayed exception!'}), 500))
}

resolvedPromise()
    .then( (result) => console.log(result))

rejectedPromise()
    .catch( (error) => console.log(error))