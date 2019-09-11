---
title: A quick reference to Python string methods - Cases
date: 2019-09-11
series: A quick reference to Python string methods
---

<small>Note: <sup style="color: red">*</sup> represents a required parameter.</small>

## Cases

### <a name="capitalize"></a> `capitalize()`

#### Parameters

```python
string.capitalize()
```

`capitalize()` takes no parameters.

#### Return value

Returns a **copy** of the string with the first letter of the first word capitalized and all the other characters of the
string in lowercase.

#### Example

```bash
Python 3.7.4

>>> s = "soMe peopLe AcTUally tyPE Like thIs."

>>> s.capitalize()
'Some people actually type like this.'
```

### <a name="title"></a> `title()`

#### Parameters

```python
string.title()
```

`title()` takes no parameters.

#### Return value

Returns a **copy** of the string with the first letter of **each** word capitalized and all the other characters of the
string in lowercase.

#### Example

```bash
Python 3.7.4

>>> s = "soMe peopLe AcTUally tyPE Like thIs."

>>> s.title()
'Some People Actually Type Like This.'
```

### <a name="swapcase"></a> `swapcase()`

#### Parameters

```python
string.swapcase()
```

`swapcase()` takes no parameters.

#### Return value

Returns a **copy** of the string with all uppercase characters swapped to lowercase and lowercase
characters swapped to uppercase.

#### Example

```bash
Python 3.7.4

>>> s = "soMe peopLe AcTUally tyPE Like thIs."

>>> s.swapcase()
'SOmE PEOPlE aCtuALLY TYpe lIKE THiS.'
```

### <a name="upper"></a> `upper()`

#### Parameters

```python
string.upper()
```

`upper()` takes no parameters.

#### Return value

Returns a **copy** of the string with all characters in uppercase.

#### Example

```bash
Python 3.7.4

>>> s = "soMe peopLe AcTUally tyPE Like thIs."

>>> s.upper()
'SOME PEOPLE ACTUALLY TYPE LIKE THIS.'
```

### <a name="lower"></a> `lower()`

#### Parameters

```python
string.lower()
```

`lower()` takes no parameters.

#### Return value

Returns a **copy** of the string with all characters in lowercase.

#### Example

```bash
Python 3.7.4

>>> s = "soMe peopLe AcTUally tyPE Like thIs."

>>> s.lower()
'some people actually type like this.'
```
