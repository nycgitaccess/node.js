'use strict';

//---------all require is here !!
let {
    readFile,
    writeFile,
    appendFile
} = require('fs');

//-----argv is empty now
let memory = process.argv.splice(2);
//console.log(memory);
let command = memory;
//console.log(command);
//--file path
let filePath = 'data.txt';
let encodeing = 'utf8';

if (command[0] === 'add') {
    readFile(filePath, encodeing, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let grabedArray = JSON.parse(data);
            //console.log(grabedArray);
            grabedArray.push(command[1])
            writeFile('data.txt', JSON.stringify(grabedArray), (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
} else if (command[0] === 'list') {
    readFile(filePath, encodeing, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
} else if (command[0] === 'reset') {

    writeFile(filePath, '[]', encodeing, (err) => {
        if (err) {
            console.log(err);
        }
    })
} else if (command[0] === `remove`) {
    readFile(filePath, encodeing, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let grabedArray = JSON.parse(data);
            //console.log(grabedArray);
            let indexToRemove = (command[1] - 1);
            let howManyToRemove = 1;

            grabedArray.splice(indexToRemove, howManyToRemove);

            writeFile('data.txt', JSON.stringify(grabedArray), (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
} else {
    console.log(`     -------------------------------------------------------------------------
       list --- view that you have included.
       add --- to add something to list.
       remove --- you can remove by number (EX: remove 1 or remove 2).
       reset --- to remove all the thing from the list.
     -------------------------------------------------------------------------`);
}
