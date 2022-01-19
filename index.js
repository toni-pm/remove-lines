const fs = require('fs');
const cracked = 'assets/cracked.txt';
const hashes = 'assets/hashes.txt';
const newFile = 'result.txt';

console.log("Remove lines starting");

const array1 = fs.readFileSync(hashes).toString().split('\n');
const array2 = fs.readFileSync(cracked).toString().split('\n');

const result = array1.filter(line => {
    let exists = array2.find(line2 => line2.includes(line));
    return exists ? false : true;
});

fs.writeFileSync(newFile, result.join('\n'), 'utf-8');

console.log("Remove lines finished");