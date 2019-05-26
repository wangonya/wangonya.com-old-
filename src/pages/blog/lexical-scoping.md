---
title: "Lexical Variable Scoping with Javascript"
date: "2019-03-08T12:52:10+03:00"
description: "Setting variable scope with the 'let' keyword"
---

In Javascript, code blocks are created using curly braces ({}). For example:

```javascript
someFunction() {
    // some code here
}

anotherFunction() {
    // some more code here
}
```

`someFunction` and `anotherFunction` are two different code blocks. These two different code blocks could also be considered as two different scopes. What that means is that the variables declared in `someFunction` only affect that block of code, and those declared in `anotherFunction` only affect that block of code. They are _"scoped"_ in that sense. To illustrate:

```javascript
var name = "Kenny"

someFunction() {
    var name = "Kyle"
    console.log("someFunction block:", name) // someFunction block: Kyle
}

anotherFunction() {
    var name = "Timmy"
    console.log("anotherFunction block:", name) // anotherFunction block: Timmy
}

console.log("global", name) // global Kenny
```

As you can see, the same variable `name` retains its global value although it gets redefined within `someFunction` and `anotherFunction`.

Now here is where it can get a bit tricky. With that knowledge in mind, it is easy to assume that this would always be the case whenever we have code blocks. Except, it doesn't work the same with `if/else` statements and `for` loops.

```javascript
var name = "Kenny";

if (name) {
  var name = "Kyle";
  console.log("if block:", name); // if block: Kyle
}

console.log("global", name); // global Kyle
```

The `name` variable inside the `if` block resets the value of `name`. The same happens in a `for` loop:

```javascript
var name = "Kenny";

for (var i = 0; i < 1; i++) {
  var name = "Kyle";
  console.log("for loop block:", name); // for loop block: Kyle
}

console.log("global", name); // global Kyle
```

The solution is to use the `let` keyword instead of `var`.

```javascript
var name = "Kenny";

if (name) {
  let name = "Kyle";
  console.log("if block:", name); // if block: Kyle
}

console.log("global", name); // global Kenny
```

```javascript
var name = "Kenny";

for (var i = 0; i < 1; i++) {
  let name = "Kyle";
  console.log("for loop block:", name); // for loop block: Kyle
}

console.log("global", name); // global Kenny
```
