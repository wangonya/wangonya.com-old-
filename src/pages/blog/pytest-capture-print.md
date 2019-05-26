---
title: "Capturing print statements while debugging"
date: 2019-01-30T8:06:29+03:00
description: "Python TDD with Pytest Part 3 -- Capturing print statements while debugging"
---

You might need to capture print statements in your tests while debugging. This might be just to help you debug, or for some other reason. I mostly do this kind of thing when testing for database connections where, in addition to other tests, I want to make sure I see that "Database connection successful" message.

Let's demonstrate with a simple example:

```python
def add_numbers(num1, num2):
    print("Add function started...")
    result = num1 + num2
    print("Numbers added. Returning result...")
    return result

def test_add_numbers():
    assert add_numbers(2, 3) == 3
```

Running the test above fails with the given traceback:

```shell
collected 1 item
print.py F                 [100%]

============================ FAILURES ============================

    def test_add_numbers():
>       assert add_numbers(2, 3) == 3
E       assert 5 == 3
E        +  where 5 = add_numbers(2, 3)

print.py:9: AssertionError
---------------------- Captured stdout call ----------------------------
Add function started...
Numbers added. Returning result...
===================== 1 failed in 0.11 seconds ====================
```

Notice the `Captured stdout call` section. It captured out two print statements. During test execution, any output sent to stdout and stderr is captured. By default, the captured output is only displayed if the test fails. Changing our `assert add_numbers(2, 3) == 3` to `assert add_numbers(2, 3) == 5` and running the test again gives the following output:

```shell
collected 1 item
print.py .                       [100%]

========================= 1 passed in 0.05 seconds ===========================
```

You can access your captured output in your tests by using `readouterr()`:

```python
def add_numbers(num1, num2):
    print("Add function started...")
    result = num1 + num2
    print("Numbers added. Returning result...")
    return result

def test_add_numbers(capsys):
    result = add_numbers(2, 3)
    captured = capsys.readouterr()
    assert "Hello" in captured.out
    assert result == 3
```

```shell
collected 1 item
print.py F                             [100%]

====================== FAILURES =======================

capsys = <_pytest.capture.CaptureFixture object at 0x10ba25d30>

    def test_add_numbers(capsys):
        result = add_numbers(2, 3)
        captured = capsys.readouterr()
>       assert "Hello" in captured.out
E       AssertionError: assert 'Hello' in 'Add function started...\nNumbers added. Returning result...\n'
E        +  where 'Add function started...\nNumbers added. Returning result...\n' = CaptureResult(out='Add function started...\nNumbers added. Returning result...\n', err='').out

print.py:11: AssertionError
======================== 1 failed in 0.09 seconds =======================
```

It's important to note that each `readouterr()` call snapshots the output so far, so we can call it repeatedly, checking the output of our test step by step.

```python
def add_numbers(num1, num2):
    print("Add function started...")
    result = num1 + num2
    print("Numbers added. Returning result...")
    return result

def test_add_numbers(capsys):
    result = add_numbers(2, 3)
    captured = capsys.readouterr()
    assert "Add function started" in captured.out
    assert "Numbers added. Returning result" in captured.out
    # thus far, readouterr() out only has the two print statements from the add_numbers function
    assert result == 5
    print("thank you, next")
    captured = capsys.readouterr()
    # here, readouterr() out doesn't have the two outputs from above
    # it now contains the new value, "thank you, next"
    assert captured.out == "thank you, next\n"
```

```shell
collected 1 item
print.py .                       [100%]

========================= 1 passed in 0.05 seconds ===========================
```
