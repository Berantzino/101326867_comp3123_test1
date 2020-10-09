// QUESTION 3: File Module
// Create a script that will do the following:
//  2. Create Log files
//      - create a Logs directory, if it does not exist
//      - change the current process to the new Logs directory
//      - create 10 log files and write some text into the file
//      - output the files names to console
var fs = require('fs');
var path = require('path');

const add = () => {
    if (!fs.existsSync('./Logs')) {
        fs.mkdirSync('./Logs');
    }

    for (let i = 0; i < 10; i++) {
        let fileName = `log${i}.txt`

        fs.writeFile(`./Logs/${fileName}`, "This file is used for logs", (error) => {
            if (error) {
                throw error; 
            }
        })
        console.log(fileName);
    }
}

add()