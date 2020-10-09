// QUESTION 3: File Module
// Create a script that will do the following:
//  1. Remove Log files
//      - remove all the files from the Logs directory, if exists
//      - output the file names to delete
//      - remove the Logs directory
var fs = require('fs');
var path = require('path');

const remove = () => {

    if (fs.existsSync('./Logs')) {
        fs.readdirSync('./Logs').forEach(element => {
            let fileToDelete = element
    
            fs.unlink(`./Logs/${element}`, (error) => {
                if (error) {
                    throw error;
                }
            })
            console.log(`delete files...${fileToDelete}`);
        });

        fs.rmdirSync('./Logs')
    }    
}

remove()