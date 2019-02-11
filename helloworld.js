console.log("Hello World");

console.log(process.argv[0]);

console.log(process.argv[1]);

for (var i = 2; i < process.argv.length; i++){
  console.log(process.argv[i]);
}
