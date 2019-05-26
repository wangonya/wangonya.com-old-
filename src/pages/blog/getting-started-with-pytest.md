---
title: "Python TDD with Pytest  -- Getting Started"
date: 2019-01-28T08:15:40+03:00
description: "Python TDD with Pytest Part 1 -- Getting Started"
---

Test-Driven Development is great. If you're a Pythonista, it gets even better with pytest - a framework that makes building simple and scalable tests easy.

In this series, I'll be exploring the cool features that pytest offers to help make testing Python code a breeze.

## Preparing your python environment

Let's set up our testing environment with `virtualenv`. We'll be working with Python 3. `cd` into your working directory and create a new virtual environment:

```shell
python3 -m venv env
```

Activate the virtual environment:

```shell
source env/bin/activate
```

### Installing `pytest`

```shell
pip install pytest
```

That's all you need to do to get pytest ready. You can check the installed version by running:

```shell
pytest --version
```

## Creating your first test

Say we need to create an app that says hello to the name you give it when it runs (I know, very original 😅).

```python
# simple hello world test

def hello_world(name):
    pass

def test_hello():
    assert hello_world("World!") == "Hello World!"
```

You'll notice that our test function name begins with the word _test_. That's how pytest discoveres test methods. Also, :

- Test files should be named `test_<something>.py` or `<something>_test.py`
- Test classes should be named `Test<Something>`

Running `pytest hello.py` should return:

```shell
collected 1 item
hello.py F                         [100%]

===================== FAILURES ======================
    def test_hello():
>       assert hello_world("World!") == "Hello World!"
E       AssertionError: assert None == 'Hello World!'
E        +  where None = hello_world('World!')

hello.py:6: AssertionError
```

Pytest shows why the test failed: `AssertionError: assert None == 'Hello World!’`. Obviously, we have no code in our hello function so let’s fix that.

```python
def hello_world(name):
    return "Hello {}".format(name)

def test_hello():
    assert hello_world("World!") == "Hello World!"
```

Running `pytest hello.py` should now return:

```shell
collected 1 item
hello.py .                       [100%]

==================== 1 passed in 0.04 seconds ======================
```

As you can see, it’s pretty easy to get started with testing in python with pytest. Now that we have everything set up, we’ll be going into more advanced features as the series continues.
