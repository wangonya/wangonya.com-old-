---
title: Python 'is' vs '=='
date: 2019-09-06
---

A lot of times when I'm doing `if`s in Python, I find myself wondering whether to use `is` or `==` for the check.

```python
# do I do
if a is b:
    ...

# or
if a == b:
    ...
```

It can be a bit confusing if you're new to Python, and it's easy to assume the two can be used interchangeably. So, what's the difference?

## `is`
The `is` operator checks if both elements point to the same object. Let's fire up a python console to help illustrate this:

```bash
$ python3
Python 3.7.4
[Clang 10.0.1 (clang-1001.0.46.4)] on darwin
Type "help", "copyright", "credits" or "license" for more information.

>>> a = []
>>> b = []
>>> c = a

>>> a
[]
>>> b
[]
>>> c
[]
>>>
```

So, we've declared three variables and assigned them values. `a` and `b` are both empty lists, and `c = a`. We can see that all three variables contain an empty list. Using `is` to compare them:

```bash
>>> a is b
False
>>> b is c
False
>>> a is c
True
```

Despite the fact that `a` and `b` seem identical (in that they're both empty lists), the variables `a` and `b` do not point to the same object, therefore `a is b` evaluates to `False`. The same goes for `b is c`.

Conversely, because we assigned the variable `a` to `c`, they both point to the same object, thus `a is c` is `True`.

## `==`
`==` on the other hand checks if both elements contain equal values. Whether or not they point to the same object doesn't matter here.

```bash
>>> a == b
True
>>> b == c
True
>>> a == c
True
```

All checks using `==` evaluate to `True`, because the values of `a`, `b` and `c` are all equal. If `d = [1, 2, 3]` is introduced, `a == d`, `b == d` and `c == d` would all be `False`, because the values are not equal.

So if you want to check that elements point to the same object, use `is`. If you're only interested in the equality of the values, use `==`.
