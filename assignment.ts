//Question No 1:
// Installed  Node.js, TypeScript and VS Code on my computer.

// Question No 2:
const personName = "Faizan";
console.log(`Hello ${personName}, Would you like to learn Typescript?`);
const name1 = "Waqas"; 
const city = "Karachi";
console.log(`Hello, My name is ${name1} and I'm from ${city}.`);

// Question No 3:
const name2 = "Faizan Ali"

console.log(`Hello ${name2.toLowerCase()}, would you like to learn some Python today?`);
console.log(name2.toUpperCase()); // Upper case
console.log(`Hello ${name2.toUpperCase()}, How are you?`);
console.log(`Hello ${toTitleCase(name2)}, would you like to learn some Python today?`);

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Question No 4:
console.log(`Albert Einsteinʼ said, "A person who never made a mistake never tried anything new.`);

// Question No 5:
const quote = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
