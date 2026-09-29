function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.SayHello = () => {
  const result = `my name is ${this.name} and my age is ${this.age} `;
  console.log(result);
};

const person = new Person("John", 30);

// person.SayHello();

(function bar(value) {
  console.log(value);
})("foo");

function foo() {
  x = 1;
}

// foo();
// console.log(x); // 1\

for (let i = 1; i <= 100; i++) {}
