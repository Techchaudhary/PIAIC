//Question No 1:
// Installed  Node.js, TypeScript and VS Code on my computer.
// Question No 2:
var personName = "Faizan";
console.log("Hello ".concat(personName, ", Would you like to learn Typescript?"));
var name1 = "Waqas";
var city = "Karachi";
console.log("Hello, My name is ".concat(name1, " and I'm from ").concat(city, "."));
// Question No 3:
var name2 = "Faizan Ali";
console.log("Hello ".concat(name2.toLowerCase(), ", would you like to learn some Python today?"));
console.log(name2.toUpperCase()); // Upper case
console.log("Hello ".concat(name2.toUpperCase(), ", How are you?"));
console.log("Hello ".concat(toTitleCase(name2), ", would you like to learn some Python today?"));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Question No 4:
console.log("Albert Einstein\u02BC said, \"A person who never made a mistake never tried anything new.");
// Question No 5:
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
