var fs = require('fs');

// fs.readFile("./test.txt", 'utf-8', myCallback);
//
// function myCallback(error, contents){
//   if (error) {console.log(error);}
//   console.log(contents);
// }

console.log( fs.readFileSync("./test.txt", 'utf-8') );

console.log("Befor or after")
/*
method(someArg1, someArg2, callback)

*/
