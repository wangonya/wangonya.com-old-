---
title: Python's 'heapq' module
date: 2018-12-21
---
Often when working with collections of data, you may want to find the smallest or largest item. It's easy enough to write a function 
that iterates through the items and returns the smallest or largest one, or use the builtin `min()`, `max()`, or `sorted()` functions. 
Another interesting way may be implementing a heap (priority) queue.

Python provides a pretty convenient module called `heapq` that does that for you. `heapq` comes with a cool set of inbuilt functions that you can read 
more about in the [docs](https://docs.python.org/3.0/library/heapq.html). For this short post, I just want to show how you can easily find the smallest 
and largest items in a collection

## Finding the smallest items
Find 3 of the smallest items using the `nsmallest` function:
```python
import heapq

numbers = [9, 45, 21, 4, 63, 3, 109]

print(heapq.nsmallest(3, numbers)) # [3, 4, 9]
```

Also, converting a list into a heap using the `heapify` function automatically sets the smallest item as the first:
```python
import heapq

numbers = [9, 45, 21, 4, 63, 3, 109]

heapq.heapify(numbers)
print(numbers)
# Output: [3, 4, 9, 45, 63, 21, 109]
```

You can then pop from the heap with `heappop()`:
```python
heapq.heappop(numbers) # 3
print(numbers)
# Output: [4, 45, 9, 109, 63, 21]

heapq.heappop(numbers) # 4
print(numbers)
# Output: [9, 45, 21, 109, 63]
```

## Finding the largest items
Find 3 of the largest items using the `nlargest` function:
```python
import heapq

numbers = [9, 45, 21, 4, 63, 3, 109]

print(heapq.nlargest(3, numbers)) # [109, 63, 45]
```

## A more practical example
```python
import heapq

people = [
    {'fname': 'John', 'lname': 'Doe', 'age': 30},
    {'fname': 'Jane', 'lname': 'Doe', 'age': 25},
    {'fname': 'Janie', 'lname': 'Doe', 'age': 10},
    {'fname': 'Jane', 'lname': 'Roe', 'age': 22},
    {'fname': 'Johnny', 'lname': 'Doe', 'age': 12},
    {'fname': 'John', 'lname': 'Roe', 'age': 45}
]

oldest = heapq.nlargest(2, people, key=lambda s: s['age'])
print(oldest)
# Output: [{'fname': 'John', 'lname': 'Roe', 'age': 45}, {'fname': 'John', 'lname': 'Doe', 'age': 30}]

youngest = heapq.nsmallest(2, people, key=lambda s: s['age'])
print(youngest)
# Output: [{'fname': 'Janie', 'lname': 'Doe', 'age': 10}, {'fname': 'Johnny', 'lname': 'Doe', 'age': 12}]
```

It should be noted though that the `nsmallest(n, iterable)` and `nlargest(n, iterable)` functions perform best for smaller values of `n`. 
For larger values, it is more efficient to use the `sorted()` function. Also, when `n==1`, it is more efficient to use the builtin `min()` and 
`max()` functions.