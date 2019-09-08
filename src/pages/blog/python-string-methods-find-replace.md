---
title: A quick reference to Python string methods - Find and Replace
date: 2019-09-07
series: A quick reference to Python string methods 
---

<small>Note: <sup style="color: red">*</sup> represents a required parameter
.</small>

## Find and Replace

### <a name="find"></a> `find()`

#### Parameters

```python
string.find(substring, start, end)
```

`substring`<sup style="color: red">*</sup>: the substring to be searched in the `string`.

`start`: index from which to begin the search.

`end`: index at which to end the search.  

#### Return value

Returns an integer value pointing to the index of first occurrence of the
 substring. If the substring is not found, it returns `-1`.
 
#### Example

```bash
Python 3.7.4

>>> s = "I find your lack of faith disturbing"

# find 'lack' in s
>>> s.find('lack')
12

# find 'vader' in s
>>> s.find('vader')
-1

# find 'lack' in s
# begin at index 13
>>> s.find('lack', 13)
-1

# find 'lack' in s
# begin at index 11
>>> s.find('lack', 11)
12

# find 'lack' in s
# begin at index 0, end at index 2
>>> s.find('lack', 0, 2)
-1

# find 'lack' in s
# begin at index 0, end at index 13
>>> s.find('lack', 0, 13)
12
```

### <a name="rfind"></a> `rfind()`

#### Parameters

```python
string.rfind(substring, start, end)
```

`substring`<sup style="color: red">*</sup>: the substring to be searched in the `string`.

`start`: index from which to begin the search.

`end`: index at which to end the search.  

#### Return value
Returns an integer value pointing to the **highest** index of the
 occurrence of the substring. If the substring is not found, it returns `-1`.

#### Example

```bash
Python 3.7.4

>>> s = "Bond. James Bond."

# rfind 'Bond' in s
>>> s.rfind('Bond')
12

# rfind 'Herbert' in s
>>> s.rfind('Herbert')
-1

# rfind 'Bond' in s
# begin at index 13
>>> s.rfind('Bond', 13)
-1

# rfind 'Bond' in s
# begin at index 11
>>> s.rfind('Bond', 11)
12

# rfind 'Bond' in s
# begin at index 0, end at index 5
>>> s.rfind('Bond', 0, 5)
0

# rfind 'Bond' in s
# begin at index 0, end at index 16
>>> s.rfind('Bond', 0, 16)
12
```

### <a name="index"></a> `index()`

#### Parameters

```python
string.index(substring, start, end)
```

`substring`<sup style="color: red">*</sup>: the substring to be searched in the `string`.

`start`: index from which to begin the search.

`end`: index at which to end the search.

#### Return value

Returns an integer value pointing to the index of the first occurrence of the
 substring. If the substring is not found, a ValueError exception is raised.

#### Example

```bash
Python 3.7.4

>>> s = "I find your lack of faith disturbing"

# index 'lack' in s
>>> s.index('lack')
12

# index 'vader' in s
>>> s.index('vader')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: substring not found

# index 'lack' in s
# begin at index 13
>>> s.index('lack', 13)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: substring not found

# index 'lack' in s
# begin at index 11
>>> s.index('lack', 11)
12

# index 'lack' in s
# begin at index 0, end at index 2
>>> s.index('lack', 0, 2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: substring not found

# index 'lack' in s
# begin at index 0, end at index 13
>>> s.index('lack', 0, 13)
12
```

### <a name="rindex"></a> `rindex()`

#### Parameters

```python
string.rindex(substring, start, end)
```

`substring`<sup style="color: red">*</sup>: the substring to be searched in the `string`.

`start`: index from which to begin the search.

`end`: index at which to end the search. 

#### Return value

Returns an integer value pointing to the **highest** index of the
 occurrence of the substring. If the substring is not found, a ValueError exception is raised. 

#### Example

```bash
Python 3.7.4

>>> s = "Bond. James Bond."

# rindex 'Bond' in s
>>> s.rindex('Bond')
12

# rindex 'Herbert' in s
>>> s.rindex('Herbert')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: substring not found

# rindex 'Bond' in s
# begin at index 13
>>> s.rindex('Bond', 13)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: substring not found

# rindex 'Bond' in s
# begin at index 11
>>> s.rindex('Bond', 11)
12

# rindex 'Bond' in s
# begin at index 0, end at index 5
>>> s.rindex('Bond', 0, 5)
0

# rindex 'Bond' in s
# begin at index 0, end at index 16
>>> s.rindex('Bond', 0, 16)
12
```

### <a name="replace"></a> `replace()`
 
#### Parameters

```python
string.replace(old, new, count)
```

`old`<sup style="color: red">*</sup>: the substring to be replaced.

`new`<sup style="color: red">*</sup>: the substring to replace `old`.

`count`: the number of instances of `old` you want replaced with `new`. If
 not specified, **all** instances of `old` in `string` will be replaced.

#### Return value

Returns a **copy** of `string` with all the specified instances of `old
` replaced with `new`.

#### Example

```bash
Python 3.7.4

>>> s = "My mother thanks you. My father thanks you. My sister thanks you. And I thank you."

# replace all instances of 'thank' with 'love'
>>> s.replace('thank', 'love')
'My mother loves you. My father loves you. My sister loves you. And I love you.'

# replace the first 2 instances of 'thank' with 'love
>>> s.replace('thank', 'love', 2)
'My mother loves you. My father loves you. My sister thanks you. And I thank you.'
```
