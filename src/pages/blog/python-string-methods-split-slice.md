---
title: A quick reference to Python string methods - Splitting and Slicing
date: 2019-09-13
series: A quick reference to Python string methods 
---

<small>Note: <sup style="color: red">*</sup> represents a required parameter
.</small>

## Splitting and Slicing

### <a name="join"></a> `join()`

#### Parameters

```python
string.join(iterable)
```

`iterable`<sup style="color: red">*</sup>: a python iterable e.g a list, tuple, string, dictionary or set.

#### Return value

Returns a string concatenated with the elements of the passed in iterable.

#### Example

```bash
Python 3.7.4

>>> n1 = ['1', '2', '3', '4', '5']
>>> n2 = ('1', '2', '3', '4', '5')
>>> separator = ', '

>>> separator.join(n1)
'1, 2, 3, 4, 5'
>>> separator.join(n2)
'1, 2, 3, 4, 5'
```

### <a name="join"></a> `partition()`

#### Parameters

```python
string.partition(separator)
```

`separator`<sup style="color: red">*</sup>: the part of the string that will trigger the separation. If it 
occurs more than once in the string, the **first** occurrence is considered.

#### Return value

Return a tuple containing three parts:
* the part of the string before the separator
* the separator itself
* the part of the string after the separator

#### Example

```bash
Python 3.7.4

>>> s = "I feel the need - the need for speed!"
>>> s.partition("-")
('I feel the need ', '-', ' the need for speed!')

>>> s.partition(",")
('I feel the need - the need for speed!', '', '')

>>> s = "I feel the need - the need - for speed!"
>>> s.partition("-")
('I feel the need ', '-', ' the need - for speed!')
```

### <a name="join"></a> `rpartition()`

#### Parameters

```python
string.rpartition(separator)
```

`separator`<sup style="color: red">*</sup>: the part of the string that will trigger the separation. If it 
occurs more than once in the string, the **last** occurrence is considered.

#### Return value

Return a tuple containing three parts:
* the part of the string before the last occurrence of the separator
* the separator itself
* the part of the string after the separator

#### Example

```bash
Python 3.7.4

>>> s = "I feel the need - the need for speed!"
>>> s.rpartition("-")
('I feel the need ', '-', ' the need for speed!')

>>> s.rpartition(",")
('', '', 'I feel the need - the need for speed!')

>>> s = "I feel the need - the need - for speed!"
>>> s.rpartition("-")
('I feel the need - the need ', '-', ' for speed!')
```

### <a name="join"></a> `split()`

#### Parameters

```python
string.split(separator, maxsplit)
```

`separator`: the element to use in separating the string. If none is specified, the string is 
separated using spaces.

`maxsplit`: the maximum number of splits

#### Return value
Returns a list of strings separated at the specified `separator`.

#### Example

```bash
Python 3.7.4

>>> s = "I feel the need - the need for speed!"
>>> s.split()
['I', 'feel', 'the', 'need', '-', 'the', 'need', 'for', 'speed!']

>>> s.split("-")
['I feel the need ', ' the need for speed!']

>>> s.split("need")
['I feel the ', ' - the ', ' for speed!']

>>> s.split("need", 1)
['I feel the ', ' - the need for speed!']
```

### <a name="join"></a> `rsplit()`

#### Parameters

```python
string.rsplit(separator, maxsplit)
```

`separator`: the element to use in separating the string. If none is specified, the string is 
separated using spaces.

`maxsplit`: the maximum number of splits

#### Return value
Returns a list of strings separated at the specified `separator` **starting from the right**.

#### Example

```bash
Python 3.7.4

>>> s = "I feel the need - the need for speed!"
>>> s.rsplit()
['I', 'feel', 'the', 'need', '-', 'the', 'need', 'for', 'speed!']

>>> s.rsplit("-")
['I feel the need ', ' the need for speed!']

>>> s.rsplit("need")
['I feel the ', ' - the ', ' for speed!']

>>> s.rsplit("need", 1)
['I feel the need - the ', ' for speed!']
```

### <a name="join"></a> `splitlines()`

#### Parameters

```python
string.splitlines(keepends)
```

`keepends`: if included, the line breaks are also included in the returned items of the list. 
Provided as either `True` or `False`. Defaults to `False` if nothing is provided.

#### Return value
Returns a list of lines in the string.

#### Example

```bash
Python 3.7.4

>>> s = """“Hope” is the thing with feathers -
... That perches in the soul -
... And sings the tune without the words -
... And never stops - at all -"""

>>> s.splitlines()
['“Hope” is the thing with feathers -', 'That perches in the soul -', 
'And sings the tune without the words -', 'And never stops - at all -']

>>> s.splitlines(True)
['“Hope” is the thing with feathers -\n', 'That perches in the soul -\n', 
'And sings the tune without the words -\n', 'And never stops - at all -']
```
