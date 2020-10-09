// QUESTION 3: File Module
// Create a script that will do the following:
//  1. Remove Log files
//      - remove all the files from the Logs directory, if exists
//      - output the file names to delete
//      - remove the Logs directory
//  2. Create Log files
//      - create a Logs directory, if it does not exist
//      - change the current process to the new Logs directory
//      - create 10 log files and write some text into the file
//      - output the files names to console
var fs = require('fs');
var path = require('path');

const remove = () => {
    // TODO
}

const add = () => {

    if (!fs.existsSync('./Logs')) {
        fs.mkdirSync('./Logs');
    }

    for (let i = 0; i < 10; i++) {
        let fileName = `log${i}.txt`
        fs.appendFile(`./Logs/${fileName}`, "This file is used for logs", (error) => {
            if (error) throw error;
            fs.readFile(`./Logs/${fileName}`, (error, data) => {
                console.log(fileName);
            });
        })
    }
}

add()