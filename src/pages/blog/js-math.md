---
title: "Javascript Arithmetic Cheat Sheet"
date: "2019-03-05T05:25:12+03:00"
description: "Easy arithmetic with Javascript"
---

Given that one of the main reason computers were invented was to solve mathematical problems quickly, it is no wonder that all the modern programming languages are so rich in arithmetic-oriented methods. The earliest computers were basically just calculators. (_Yes, I'm looking at you [Abacus](https://en.wikipedia.org/wiki/Abacus)_). If you dabble in Javascript (and a little math every now and then), I do hope you find this useful. The very obvious operations like simple addition (+) and subtraction (-) have been omitted. So have more advanced operations.

![meme](https://i.pinimg.com/736x/4f/9b/15/4f9b15222b111831de64397a02297128--funny-teacher-memes-math-memes.jpg)

## Working with constants

Logarithm to base _e_

```javascript
Math.E; // 2.718281828459045
```

Logarithm to base 10

```javascript
Math.LN10; // 2.302585092994046
```

Logarithm to base 2

```javascript
Math.LN2; // 0.6931471805599453
```

Base 10 logarithm of _e_

```javascript
Math.LOG10E; // 0.4342944819032518
```

Base 2 logarithm of _e_

```javascript
Math.LOG2E; // 1.4426950408889634
```

🥧

```javascript
Math.PI; // 3.141592653589793
```

Square root of 1/2

```javascript
Math.SQRT1_2; // 0.7071067811865476
```

Square root of 2

```javascript
Math.SQRT2; // 1.4142135623730951
```

Infinity

```javascript
Infinity; // Infinity
```

## Rounding

`Math.round` returns the value of a number rounded to the nearest integer.

```javascript
Math.round(4.2); // 4
Math.round(4.7); // 5
Math.round(4.5); // 5. Half-way values are always rounded up
```

Speaking of rounding up, `Math.ceil()`:

```javascript
Math.ceil(4.2); // 5
Math.ceil(4.7); // 5
Math.ceil(-4.7); // -4. Ceiling a negative number will round towards zero
```

`Math.floor()` rounds down:

```javascript
Math.floor(4.2); // 4
Math.floor(4.7); // 4
Math.floor(-4.7); // -5. Flooring a negative number will round away from zero
```

## Modulus (%)

Returns the remainder after (integer) division.

```javascript
42 % 10; // 2
-40 % 10; // -0 🤔
```

## Trigonometry

Sine

```javascript
Math.sin(60); // -0.3048106211022167
```

Cosine

```javascript
Math.cos(60); // -0.9524129804151563
```

Tangent

```javascript
Math.tan(60); // 0.320040389379563
```

## Incrementing (++)

`++` increments its operand by 1.

```javascript
// postfix: returns the value before incrementing
let a = 4, // 4
  b = a++, // 4
  c = a; //5
```

```javascript
// prefix: returns the value after incrementing
let a = 4, // 4
  b = ++a, // 5
  c = a; //5
```

## Decrementing (--)

`--` decrements its operand by 1.

```javascript
// postfix: returns the value before decrementing
let a = 4, // 4
  b = a--, // 4
  c = a; //3
```

```javascript
// prefix: returns the value after decrementing
let a = 4, // 4
  b = -a, // 3
  c = a; //3
```

## Exponentiation (\*\*)

```javascript
// Math.pow() or ** can be used
let a = 4,
  b = 2,
  c = Math.pow(a, b), // 16
  d = a ** b; // 16
```

## Getting maximum and minimum

```javascript
Math.max(4.2, 4.7); // 4.7
Math.min(4.2, 4.7); // 4.2
```

Getting maximum and minimum from an array:

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  max = Math.max(...arr), // 9
  min = Math.min(...arr); // 1
```

## Getting roots √

Square Root

```javascript
Math.sqrt(16); // 4
```

Cube Root

```javascript
Math.cbrt(27); // 3
```

To find the nth-root, use the Math.pow() function and pass in a fractional exponent.

```javascript
// This finds the 6th root of 64
Math.pow(64, 1 / 6); // 4
```

Much more complex calculations can be done by combining one or more of these operations.
