const Person = require("./script2");
const person1 = new Person(`John`, 30);
const a = person1.age;
const b = 0;

setTimeout(() => {
  console.log(a + b);
}, 100);
person1.greeting();

console.log(__dirname);
// directory name
