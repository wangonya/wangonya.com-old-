---
title: "Difference between a python module and a package"
date: "2019-02-20T18:35:12+03:00"
description: "Simple explanation of the difference between a python module and a package"
---

## Modules

Modules are single Python files that can be imported. Any python file can be a module. For example, if I have two Python files: `module.py` and `hello.py` in the same directory:

```python
# module.py

def hello(name):
    print("Hello {}".format(name))
```

I can `import` that module in my `hello.py`:

```python
#hello.py

import module

module.hello("World!") # Hello World!
```

The same can be done in the interpreter:

```bash
>>> from module import hello
>>> hello("World!") # Hello World!
```

## Packages

Packages are made up of multiple Python files (or modules), and can even include libraries written in different languages like C or C++. Seeing an `__init.py__` file in a folder typically tells you that that folder is a Python package. The `__init__.py` doesn't have to contain any code -- sometimes it does -- it just has to be there for Python take that particular folder as a package.

```
📁 my_package
    |- __init__.py
    |- module.py
```

```python
# __init.py__

from my_package.module import hello
```

When you import `my_package` in your script, the `__init__.py` script will be run, giving you access to all of the functions in the package. In this case, it only gives access to the `module.hello` function.
